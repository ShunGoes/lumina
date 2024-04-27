import  { ChangeEvent, useContext } from "react";
import { AppConfigContext } from "../../context/appConfig.context";
import helper from "../../helper/helper";

const ProfileUploads = ({
    upload,
  setUploads,
}: {
    upload: string;
  setUploads: (e: string) => void;
}) => {
  const { toggleModal } = useContext(AppConfigContext);

  const cloudinary_name = import.meta.env.VITE_CLOUDINARY_NAME;
  const cloudinary_preset = import.meta.env.VITE_UPLOAD_PRESET;

 

  const handleFileChange = async (e: ChangeEvent<HTMLInputElement>) => {
    const file: File | undefined = e.target.files?.[0];

    // upload file to cloudinary
    if (
      (file && file?.type === "image/png") ||
      file?.type === "image/jpg" ||
      file?.type === "image/jpeg"
    ) {
      const image = new FormData();
      image.append("file", file);
      image.append("cloud_name", cloudinary_name);
      image.append("upload_preset", cloudinary_preset);

      try {
        const response = await fetch(
          `https://api.cloudinary.com/v1_1/${cloudinary_name}/upload`,
          {
            method: "POST",
            body: image,
          }
        );

        const data = await response.json();

        setUploads(data.url);
      } catch (error) {
        console.log("An Error occured uploading image:", error);
      }
    }
  };
  const handle_open_modal = () => {
    toggleModal();
  };

  return (
    <div className="grid grid-cols-2 lg:grid-cols-3 gap-[20px] ">
        <div
          className={`h-[200px]  lg:h-[230px] relative rounded-[8px]  ${
            upload ? "border-none" : "border-dashed border-[4px]"
          } `}
          
        >
          {upload  && (
            <div className="w-full h-full">
              <img
                src={upload}
                alt=""
                className="w-full h-full rounded-[8px] object-cover"
              />
            </div>
          )}
          <div className=" absolute bottom-0  w-full h-full ">
            <input
              type="file"
              accept="image/jpg, image/jpeg, image/png"
              className="hidden"
              onChange={handleFileChange}
            />
            <div className=" w-full h-full relative">
              {upload ? (
                <img
                  src={helper.Edit_Icon}
                  alt="edit pictures"
                  className="absolute -bottom-3 -right-2 "
                  onClick={() => handle_open_modal()}
                />
              ) : (
                <img
                  src={helper.Add_Icon}
                  alt="add pictures"
                  className=" absolute -bottom-3 -right-2"
                  onClick={() => handle_open_modal()}
                />
              )}
            </div>
          </div>
        </div>
    </div>
  );
};

export default ProfileUploads;
