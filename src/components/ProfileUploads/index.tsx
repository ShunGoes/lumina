import { ChangeEvent, useContext, useRef } from "react";
import { AppConfigContext } from "../../context/appConfig.context";
import helper from "../../helper/helper";
import Modal from "react-responsive-modal";

const ProfileUploads = ({
    upload,
    setUploads,
}: {
    upload: string;
    setUploads: (e: string) => void;
}) => {
    const {
        togglePictureOptions,
        isPictureOptionOpen,
        toggleCamera,
        isCameraOpen,
        uploadToCloudinary,
    } = useContext(AppConfigContext);

    const handleFileChange = async (e: ChangeEvent<HTMLInputElement>) => {
        const file: File | undefined = e.target.files?.[0];

        // upload file to cloudinary
        if (file) {
            uploadToCloudinary(file, setUploads);
            togglePictureOptions();
        }
    };

    const videoRef = useRef<HTMLVideoElement | null>(null);
    const videoReference = videoRef.current;

    function dataURItoBlob(dataURI: string) {
        // convert base64/URLEncoded data component to raw binary data held in a string
        let byteString;
        if (dataURI.split(",")[0].indexOf("base64") >= 0)
            byteString = atob(dataURI.split(",")[1]);
        else byteString = unescape(dataURI.split(",")[1]);
        // separate out the mime component
        const mimeString = dataURI.split(",")[0].split(":")[1].split(";")[0];
        // write the bytes of the string to a typed array
        const ia = new Uint8Array(byteString.length);
        for (let i = 0; i < byteString.length; i++) {
            ia[i] = byteString.charCodeAt(i);
        }
        return new Blob([ia], { type: mimeString });
    }

    const captureImage = async () => {
        try {
            const canvas_element = document.createElement("canvas");
            const ctx = canvas_element?.getContext("2d");

            if (ctx && videoReference) {
                canvas_element!.width = 100;
                canvas_element!.height = 100;

                ctx?.drawImage(
                    videoReference!,
                    0,
                    0,
                    canvas_element!.width,
                    canvas_element!.height,
                );

                const result = dataURItoBlob(
                    canvas_element.toDataURL("image/jpg"),
                );

                // console.log(result);
                if (result) {
                    // Send image to callback function
                    uploadToCloudinary(result, setUploads);
                    toggleCamera();
                    togglePictureOptions();
                }
            }

            if (videoReference) {
                videoReference.srcObject = null;
            }
        } catch (err) {
            console.log(`An error occured on line 146. error type - ${err}`);
        }
    };

    return (
        <div
            className={`h-[200px]  lg:h-[230px] relative rounded-[8px]  ${
                upload ? "border-none" : "border-dashed border-[4px]"
            } `}
        >
            {upload && (
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
                            onClick={() => togglePictureOptions()}
                        />
                    ) : (
                        <img
                            src={helper.Add_Icon}
                            alt="add pictures"
                            className=" absolute -bottom-3 -right-2"
                            onClick={() => togglePictureOptions()}
                        />
                    )}
                </div>
            </div>
            <Modal
                open={isPictureOptionOpen}
                onClose={() => togglePictureOptions()}
                center
            >
                <div className="h-[300px] w-[300px] lg:w-[547px] lg:h-[500px]">
                    <div className="rounded-[10px] bg-white  flex justify-center items-center">
                        <div className="w-full lg:w-11/12 h-[80%] mx-auto  flex flex-col items-center gap-[1rem] lg:gap-[6rem]">
                            <p className="font-[700] text-[18px] text-[#2B2B2B]  ">
                                Upload Photo
                            </p>
                            <div className="  w-full ">
                                <div
                                    // onClick={handleUploads}
                                    className="w-full"
                                >
                                    <input
                                        type="file"
                                        accept="image/jpg, image/jpeg, image/png"
                                        className="hidden"
                                        onChange={handleFileChange}
                                        id="file"
                                    />
                                    <label
                                        htmlFor="file"
                                        className=" lg:w-[354px] mx-auto cursor-pointer h-[58px] rounded-[32px] border-[2px] border-[#CCCCCC] py-[10px] px-[24px] flex  items-center my-[2rem]"
                                    >
                                        <div className="w-[20%]">
                                            <img
                                                src={helper.Picture_Icon}
                                                className=""
                                            />
                                        </div>
                                        <p className="font-[500]  lg:font-[700] text-[15px] lg:text-[18px] text-[#464646] ">
                                            Upload from Gallery
                                        </p>
                                    </label>
                                </div>
                                <div
                                    onClick={toggleCamera}
                                    className="w-full lg:w-[354px] mx-auto cursor-pointer h-[58px] rounded-[32px] border-[2px] border-[#CCCCCC] py-[10px] px-[24px] flex  items-center "
                                >
                                    <div className="w-[20%]">
                                        <img
                                            src={helper.Camera_Icon}
                                            className=""
                                        />
                                    </div>
                                    <p className="lg:font-[700] text-[15px] lg:text-[18px] text-[#464646] font-[500] ">
                                        Capture from Camera
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Modal>
            <Modal open={isCameraOpen} onClose={toggleCamera}>
                {/* <div className="absolute top-0 bottom-0 left-0 right-0 h-[80vh] flex justify-center items-center  "> */}
                <div className="w-8/12 h-8/12  flex justify-between">
                    <video ref={videoRef} className="border rounded-[10px] " />
                    <div className="flex flex-col gap-3">
                        <button
                            className="w-[5rem]  h-[50px] bg-black text-white py-[10px]  rounded-[10px]  "
                            onClick={() => captureImage()}
                        >
                            {" "}
                            Capture
                        </button>
                        <button
                            className="w-[5rem]  h-[50px] bg-red-500 text-white py-[10px]  rounded-[10px]  "
                            onClick={() => toggleCamera()}
                        >
                            {" "}
                            Cancel
                        </button>
                    </div>
                </div>
                {/* </div> */}
            </Modal>
        </div>
    );
};

export default ProfileUploads;
