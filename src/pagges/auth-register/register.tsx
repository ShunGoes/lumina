import { ChangeEvent, useContext, useEffect, useRef, useState } from "react";
import { Auth_Context } from "../../context/auth.context";

import "./register.css";
import helper from "../../helper/helper";
import Modal from "react-responsive-modal";
import Upload_Modal from "../../components/upload_modal";

// types and interfaces starts here

type ImgType = Record<string, string | ArrayBuffer | null>;

// types and interfaces ends here

const Register_User = () => {
  const { handle_register_user, setRegisterInfo, registerInfo } =
    useContext(Auth_Context)!;


    //    STATES
  const [showImageModal, setShowImageModal] = useState(false);
  const [previewImage, setPreviewImage] = useState<ImgType[]>([
    { imgUrl: "", frame: "first_frame" },
    { imgUrl: "", frame: "second_frame" },
    { imgUrl: "", frame: "third_frame" },
    { imgUrl: "", frame: "fourth_frame" },
    { imgUrl: "", frame: "fifth_frame" },
    { imgUrl: "", frame: "sixth_frame" },
  ]);
  const [number_of_picture, set_number_of_pics] = useState(0);
  const [showModal, setShowModal] = useState(false);
  const [domIndex, setDomIndex] = useState<number | null>(null);



  // dynamically creating refs for our input elements
  const fileInputRef = Array.from({ length: 6 }, () =>
    useRef<HTMLInputElement | null>(null)
  );
  const videoRef = Array.from({ length: 6 }, () =>
    useRef<HTMLVideoElement | null>(null)
  );
  



  //  these functions handle input interractions
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    setRegisterInfo({ ...registerInfo, [name]: value });
  };

  const handleGenderChange = (e: React.MouseEvent<HTMLInputElement>) => {
    const { name, value } = e.currentTarget;

    setRegisterInfo({ ...registerInfo, [name]: value });
  };



  //  this function fires a click event on the element with the ref depending on the index the function receives
  const handleFileInputChange = (index: number) => {
    fileInputRef[index]?.current?.click();
  };

  // this function handles image uploads
  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    const file: File | undefined = e.target.files?.[0];
    const { name } = e.target;

    if (file) {
      const reader = new FileReader();

      // set the image to state as a data URL
      reader.onloadend = () => {
        const updated_state_array = previewImage.map((obj) =>
          obj.frame === name ? { ...obj, imgUrl: reader.result } : obj
        );
        setPreviewImage(updated_state_array);
        setShowModal(false);
      };
      //  this function is invoked here and all it does is to read the content of the file.
      //  after reading is completed, the onloadend event is fired on the "reader" instance
      reader.readAsDataURL(file);
    }
  };


  //  these functions handle opening the camera and taking a photo
  const open_camera = async (index: number) => {
    setShowModal(false);
    setShowImageModal(true);

    try {
      const stream = await navigator.mediaDevices.getUserMedia({ video: true });

      const video_refernce = videoRef[index].current;
      console.log(video_refernce);

      video_refernce!.srcObject = stream;
      video_refernce?.play();

      setTimeout(() => {
        stream.getTracks().forEach((track) => track.stop());
        setShowImageModal(false)

      }, 56000)
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
          // console.log(result)
          const updated_state_array = previewImage.map((obj, idx) =>
          idx === index ? { ...obj, imgUrl: result } : obj
          );
          
          setPreviewImage(updated_state_array);
          setShowModal(false);
          setShowImageModal(false)
        }

        if(video_refernce){
          video_refernce.srcObject = null
        }
      } catch (err) {
        console.log(`An error occured on line 146. error type - ${err}`);
        
      }
  };



  // helpers for modals
  const handle_open_modal = (index: number) => {
    setShowModal(true);
    setDomIndex(index);
  };
  const handle_close_modal = () => {
    setShowModal(false);
  };


  // console.log(number_of_picture);
  useEffect(() => {
    for (let obj of previewImage) {
      if (obj?.imgUrl) {
        set_number_of_pics((prev) => prev + 1);
      }
    }
    // const counter = previewImage.map(obj => typeof obj.imgUrl === 'string' && obj?.imgUrl?.length >= 2 ? 1 : number_of_picture)
    // set_number_of_pics(prev => prev + counter)
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
        <div className="grid grid-cols-2 w-11/12 mx-auto justify-items-center ">
          <form
            className="w-11/12 col-span-2 lg:col-span-1"
            onSubmit={handle_register_user}
          >
            <div className="flex flex-col gap-2 h-[94px]">
              <label
                htmlFor=""
                className="font-[500] text-[18px] text-[#2B2B2B] "
              >
                {" "}
                First Name
              </label>
              <input
                type="text"
                placeholder="name"
                name="first_name"
                value={registerInfo.first_name}
                onChange={handleChange}
                className="h-[50px]  bg-[#EDF0F7] font-[400] text-[#2b2b2b] text-[16px]  border border-[#CCCCCC] outline-none px-4 "
              />{" "}
            </div>

            <div className="flex flex-col gap-2 h-[94px]">
              <label
                htmlFor=""
                className="font-[500] text-[18px] text-[#2B2B2B] "
              >
                {" "}
                Last Name
              </label>
              <input
                type="text"
                placeholder="last name"
                name="last_name"
                value={registerInfo.last_name}
                onChange={handleChange}
                className="h-[50px]  bg-[#EDF0F7] font-[400] text-[#2b2b2b] text-[16px]  border border-[#CCCCCC] outline-none px-4 "
              />{" "}
            </div>

            <div className="flex flex-col gap-2 h-[94px]">
              <label
                htmlFor=""
                className="font-[500] text-[18px] text-[#2B2B2B] "
              >
                {" "}
                Email Address
              </label>
              <input
                type="email"
                placeholder="johndoe@exammple.com"
                name="email"
                value={registerInfo.email}
                onChange={handleChange}
                className="h-[50px] bg-[#EDF0F7] font-[400] text-[#2b2b2b] text-[16px] border border-[#CCCCCC] outline-none px-4 "
              />{" "}
            </div>

            <div className="flex flex-col gap-2 h-[94px]">
              <label
                htmlFor=""
                className="font-[500] text-[18px] text-[#2B2B2B] "
              >
                {" "}
                Birthday
              </label>
              <div className="flex gap-[10px] ">
                <input
                  type="number"
                  pattern="\d*"
                  placeholder="DD"
                  name="day"
                  inputMode="numeric"
                  maxLength={2}
                  value={registerInfo.day}
                  onChange={handleChange}
                  className="h-[50px] bg-[#EDF0F7] w-[104px] font-[400] text-[#2b2b2b] text-[16px] border border-[#CCCCCC] outline-none text-center "
                />{" "}
                <input
                  type="number"
                  pattern="\d*"
                  placeholder="MM"
                  name="month"
                  maxLength={2}
                  value={registerInfo.month}
                  onChange={handleChange}
                  className="h-[50px] bg-[#EDF0F7] w-[104px] font-[400] text-[#2b2b2b] text-[16px] border border-[#CCCCCC] outline-none text-center "
                />{" "}
                <input
                  type="number"
                  pattern="\d*"
                  placeholder="YYYY"
                  name="year"
                  maxLength={4}
                  value={registerInfo.year}
                  onChange={handleChange}
                  className="h-[50px] bg-[#EDF0F7] w-[123px] font-[400] text-[#2b2b2b] text-[16px] border border-[#CCCCCC] outline-none text-center "
                />{" "}
              </div>
            </div>

            <div>
              <label
                htmlFor=""
                className="text-[#2B2B2B] font-[500] text-[18px] "
              >
                {" "}
                Gender
              </label>
              <div className="flex gap-[10px]">
                <input
                  type="button"
                  name="gender"
                  value="Man"
                  onClick={handleGenderChange}
                  className="h-[50px] bg-[#EDF0F7] w-5/12 font-[500] text-[#333333] text-[16px] border border-[##EDF0F7] outline-none text-center"
                />
                <input
                  type="button"
                  name="gender"
                  value="Woman"
                  onClick={handleGenderChange}
                  className="h-[50px] bg-[#EDF0F7] w-5/12 font-[500] text-[#333333] text-[16px] border border-[##EDF0F7] outline-none text-center"
                />{" "}
              </div>
            </div>
          </form>

          <div className="h-full w-11/12 col-span-1 hidden  lg:block">
            <p className="font-[500] text-[18px] text-[#808080] mb-[1rem]">
              Profile Picture
            </p>
            <div className="grid grid-cols-3 gap-[20px] ">
              {previewImage.map((obj, index) => (
                <div
                  className={`h-[230px] relative rounded-[8px]  ${
                    obj?.imgUrl ? "border-none" : "border-dashed border-[4px]"
                  } `}
                  key={index}
                >
                  {typeof obj?.imgUrl === "string" && obj?.imgUrl && (
                    <div className="w-full h-full">
                      <img
                        src={obj?.imgUrl}
                        alt=""
                        className="w-full h-full object-cover"
                      />
                    </div>
                  )}
                  <div className=" absolute bottom-0  w-full h-full ">
                    <input
                      type="file"
                      accept="image/*"
                      className="hidden"
                      ref={fileInputRef[index]}
                      name={
                        typeof obj?.frame === "string" ? obj?.frame : undefined
                      }
                      onChange={handleFileChange}
                    />
                    <div className=" w-full h-full relative">
                    {obj?.imgUrl ? (
                      <img
                        src={helper.Edit_Icon}
                        alt="edit pictures"
                        className="absolute -bottom-3 -right-2 "
                        onClick={() => handle_open_modal(index)}
                      />
                    ) : (
                      <img
                        src={helper.Add_Icon}
                        alt="add pictures"
                        className= " absolute -bottom-3 -right-2"
                        onClick={() => handle_open_modal(index)}
                      />
                    )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
            {number_of_picture >= 2 ? null : (
              <p className="my-[2rem]  font-[400] text-[16px] text-[#808080]">
                Add at least 2 pictures to continue
              </p>
            )}
          </div>
          {showImageModal && (
            <div className="absolute top-0 bottom-0 left-0 right-0 h-[80vh] flex justify-center items-center  ">
              <div className="w-8/12 h-8/12  flex justify-between">
                <video
                  ref={videoRef[domIndex!]}
                  className="border rounded-[10px] "
                />
                <div className="flex flex-col gap-3">
                <button className="w-[5rem]  h-[50px] bg-black text-white py-[10px]  rounded-[10px]  " onClick={() => capture_image(domIndex!)}> Capture</button>
                <button className="w-[5rem]  h-[50px] bg-red-500 text-white py-[10px]  rounded-[10px]  " onClick={() => setShowImageModal(false)}> Cancel</button>

                </div>
              </div>
            </div>
          )}
        </div>

        {number_of_picture >= 2 && (
          <button
            type="submit"
            className={`  capitalize  my-[2rem] mx-auto w-[220px] h-[58px] flex justify-center items-center rounded-[32px]  bg-[#F74887] font-[700] text-[16px] text-[#FDF7FF]`}
          >
            register
          </button>
        )}
        <Modal open={showModal} onClose={handle_close_modal} center>
          <Upload_Modal
            uploadFromGallery={handleFileInputChange}
            open_camera={open_camera}
            domIndex={domIndex}
          />
        </Modal>
        {/* <Modal open={showImageModal} onClose={handle_close_image_modal}  center>
        </Modal> */}
      </div>
    </div>
  );
};

export default Register_User;
