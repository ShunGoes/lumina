import { ChangeEvent, useContext, useEffect, useRef, useState } from "react";

import "./register.css";
import helper from "../../helper/helper";
import Modal from "react-responsive-modal";
import Upload_Modal from "../../components/upload_modal";
import Registration_Form from "../../components/registration-form/register-form";
import { Auth_Context } from "../../context/auth.context";
import ProfileUploads from "../../components/ProfileUploads";

const Register_User = () => {
  const [showImageModal, setShowImageModal] = useState(false);
  const [number_of_picture, set_number_of_pics] = useState(0);
  const [domIndex, setDomIndex] = useState<number | null>(null);
  const {
    previewImage,
    setPreviewImage,
    handle_register_user,
    signed_in_with_socials,
    handle_signin_with_social,
  } = useContext(Auth_Context)!;
  const [previewImage, setPreviewImage] = useState<string[]>([
   
  ]);


  // dynamically creating refs for our input elements
 
  const videoRef = Array.from({ length: 6 }, () =>
    useRef<HTMLVideoElement | null>(null)
  );

  //  this function fires a click event on the element with the ref depending on the index the function receives
  const handleFileInputChange = (index: number) => {
    fileInputRef[index]?.current?.click();
  };

  // this function handles image uploads


  //  these functions handle opening the camera and taking a photo
  const open_camera = async (index: number) => {
    setShowModal(false);
    setShowImageModal(true);

    try {
      const stream = await navigator.mediaDevices.getUserMedia({ video: true });

      const video_refernce = videoRef[index].current;

      video_refernce!.srcObject = stream;
      video_refernce?.play();

      setTimeout(() => {
        stream.getTracks().forEach((track) => track.stop());
        setShowImageModal(false);
      }, 56000);
    } catch (error) {
      console.log(`error accessing camera: ${error}`);
    }
  };

  const capture_image = async (index: number) => {
    try {
      const canvas_element = document.createElement("canvas");
      const ctx = canvas_element?.getContext("2d");

      const video_refernce = videoRef[index].current;

      if (ctx && video_refernce) {
        canvas_element!.width = 100;
        canvas_element!.height = 100;

        ctx?.drawImage(
          video_refernce!,
          0,
          0,
          canvas_element!.width,
          canvas_element!.height
        );

        const result = canvas_element.toDataURL("image/jpg");
        // console.log(result);
        if (result) {
          const image = new FormData();
          image.append("file", result);
          image.append("cloud_name", cloudinary_name);
          image.append("upload_preset", import.meta.env.VITE_UPLOAD_PRESET);

          try {
            const response = await fetch(
              `https://api.cloudinary.com/v1_1/${cloudinary_name}/upload`,
              {
                method: "POST",
                body: image,
              }
            );
            const data = await response.json();
            set_cloudinary_url([...cloudinary_url, data.url]);
          } catch (error) {
            console.log("An error occure uploading image from camera", error);
          }
        }

        // console.log(result)
        const updated_state_array = previewImage.map((obj, idx) =>
          idx === index ? { ...obj, imgUrl: result } : obj
        );

        setPreviewImage(updated_state_array);
        setShowModal(false);
        setShowImageModal(false);
      }

      if (video_refernce) {
        video_refernce.srcObject = null;
      }
    } catch (err) {
      console.log(`An error occured on line 146. error type - ${err}`);
    }
  };

  // helpers for modals
 
  const handle_close_modal = () => {
    setShowModal(false);
  };

  useEffect(() => {
    for (let obj of previewImage) {
      if (obj?.imgUrl) {
        set_number_of_pics((prev) => prev + 1);
      }
    }
  }, [previewImage]);

  return (
    <div className="  register">
      <nav className=" shadow shadow-[#5D6173] register-nav "></nav>

      <div className="form-container relative ">
        <div className="w-[362px] h-[61px]  mx-auto mb-[3rem] mt-[2rem] flex flex-col items-center">
          <span className="font-[600] text-[26px] ">Create Acount </span>
          <span className="font-[400] text-[16px] text-[#808080]">
            Join the community and start connecting today!
          </span>
        </div>

        <div className="grid grid-cols-1 gap-y-[2rem] lg:grid-cols-2 w-11/12 mx-auto justify-items-center ">
          <div className="h-full w-full lg:w-11/12 col-span-1  lg:hidden">
            <p className="font-[500] text-[22px] text-[#808080] mb-[1rem]">
              Profile Picture
            </p>
           
            {number_of_picture >= 2 ? null : (
              <p className="my-[2rem]  font-[400] text-[16px] text-[#808080]">
                Add at least 2 pictures to continue
              </p>
            )}
          </div>

          {/* form starts here */}
          <Registration_Form />

       

          {showImageModal && (
            <div className="absolute top-0 bottom-0 left-0 right-0 h-[80vh] flex justify-center items-center  ">
              <div className="w-8/12 h-8/12  flex justify-between">
                <video
                  ref={videoRef[domIndex!]}
                  className="border rounded-[10px] "
                />
                <div className="flex flex-col gap-3">
                  <button
                    className="w-[5rem]  h-[50px] bg-black text-white py-[10px]  rounded-[10px]  "
                    onClick={() => capture_image(domIndex!)}
                  >
                    {" "}
                    Capture
                  </button>
                  <button
                    className="w-[5rem]  h-[50px] bg-red-500 text-white py-[10px]  rounded-[10px]  "
                    onClick={() => setShowImageModal(false)}
                  >
                    {" "}
                    Cancel
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>

        {number_of_picture >= 2 && !signed_in_with_socials && (
          <button
            onClick={handle_register_user}
            className={`  capitalize  my-[2rem] mx-auto w-[220px] h-[58px] flex justify-center items-center rounded-[32px]  bg-[#F74887] font-[700] text-[16px] text-[#FDF7FF]`}
          >
            register
          </button>
        )}
        {number_of_picture >= 2 && signed_in_with_socials && (
          <button
            onClick={handle_signin_with_social}
            className={`  capitalize  my-[2rem] mx-auto w-[220px] h-[58px] flex justify-center items-center rounded-[32px]  bg-blue-500 font-[700] text-[16px] text-[#FDF7FF]`}
          >
            register
          </button>
        )}

        
            <Upload_Modal
              uploadFromGallery={handleFileInputChange}
              open_camera={open_camera}
              domIndex={domIndex}
            />
          </div>
        </Modal>
      </div>
    </div>
  );
};

export default Register_User;
