import helper from "../helper/helper";

interface PropsType {
  uploadFromGallery: (index: number) => void;
  domIndex: number | null;
  open_camera: (index: number) => Promise<void>,
}

const Upload_Modal = ({ uploadFromGallery, domIndex, open_camera}: PropsType) => {
    const handleUploads = () =>{ 
        uploadFromGallery(domIndex!)
    }

    const handleCaptureImage = () => {
      open_camera(domIndex!)
    }

  return (
    <div className="w-[547px] h-[500px] rounded-[10px] bg-white  flex justify-center items-center">
      <div className="w-11/12 h-[80%] mx-auto  flex flex-col items-center gap-[6rem]">
        <p className="font-[700] text-[18px] text-[#2B2B2B]  ">Upload Photo</p>
        <div>
          <div onClick={handleUploads} className="w-[354px] cursor-pointer h-[58px] rounded-[32px] border-[2px] border-[#CCCCCC] py-[10px] px-[24px] flex  items-center my-[2rem] ">
            <div className="w-[20%]">
              <img src={helper.Picture_Icon} className="" />
            </div>
            <p className="font-[700] text-[18px] text-[#464646] ">
              Upload from Gallery
            </p>
          </div>
          <div onClick={handleCaptureImage} className="w-[354px] cursor-pointer h-[58px] rounded-[32px] border-[2px] border-[#CCCCCC] py-[10px] px-[24px] flex  items-center ">
            <div className="w-[20%]">
              <img src={helper.Camera_Icon} className="" />
            </div>
            <p className="font-[700] text-[18px] text-[#464646] ">
              Capture from Camera
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Upload_Modal;
