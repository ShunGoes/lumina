import { ChangeEvent, useContext, useEffect, useRef, useState } from "react";
import { Auth_Context } from "../../context/auth.context";

import "./register.css";
import helper from "../../helper/helper";

// types and interfaces starts here

type ImgType = Record<string, string | ArrayBuffer | null>;

// types and interfaces ends here

const Register_User = () => {
  const { handle_register_user, setRegisterInfo, registerInfo } =
    useContext(Auth_Context)!;

  // dynamically creating refs for our input elements
  const fileInputRef = Array.from({ length: 6 }, () =>
    useRef<HTMLInputElement | null>(null)
  );

  const [previewImage, setPreviewImage] = useState<ImgType[]>([
    { imgUrl: "", frame: "first_frame" },
    { imgUrl: "", frame: "second_frame" },
    { imgUrl: "", frame: "third_frame" },
    { imgUrl: "", frame: "fourth_frame" },
    { imgUrl: "", frame: "fifth_frame" },
    { imgUrl: "", frame: "sixth_frame" },
  ]);
  const [number_of_picture, set_number_of_pics] = useState(0);
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
      };
      //  this function is invoked here and all it does is to read the content of the file.
      //  after reading is completed, the onloadend event is fired on the "reader" instance
      reader.readAsDataURL(file);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    setRegisterInfo({ ...registerInfo, [name]: value });
  };
console.log(number_of_picture)
  
  useEffect(() => {
    for(let obj of previewImage){
      if(obj?.imgUrl){
          set_number_of_pics(prev => prev + 1)
      }
    }
    // const counter = previewImage.map(obj => typeof obj.imgUrl === 'string' && obj?.imgUrl?.length >= 2 ? 1 : number_of_picture)
    // set_number_of_pics(prev => prev + counter)
  },[previewImage])

  return (
    <div className="  register">
      <nav className=" shadow shadow-[#5D6173] register-nav "></nav>

      <div className="form-container ">
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
                name="fname"
                value={registerInfo.fname}
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
                name="fname"
                value={registerInfo.fname}
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
                Password
              </label>
              <input
                type="password"
                placeholder="xxxxxxxxx"
                name="password"
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
                  value={registerInfo.email}
                  onChange={handleChange}
                  className="h-[50px] bg-[#EDF0F7] w-[104px] font-[400] text-[#2b2b2b] text-[16px] border border-[#CCCCCC] outline-none text-center "
                />{" "}
                <input
                  type="number"
                  pattern="\d*"
                  placeholder="MM"
                  name="month"
                  value={registerInfo.email}
                  onChange={handleChange}
                  className="h-[50px] bg-[#EDF0F7] w-[104px] font-[400] text-[#2b2b2b] text-[16px] border border-[#CCCCCC] outline-none text-center "
                />{" "}
                <input
                  type="number"
                  pattern="\d*"
                  placeholder="YYYY"
                  name="year"
                  value={registerInfo.email}
                  onChange={handleChange}
                  className="h-[50px] bg-[#EDF0F7] w-[123px] font-[400] text-[#2b2b2b] text-[16px] border border-[#CCCCCC] outline-none text-center "
                />{" "}
              </div>
            </div>
            <br />
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
                  type="text"
                  placeholder="email"
                  name="email"
                  value={registerInfo.email}
                  onChange={handleChange}
                  className="h-[50px] bg-[#EDF0F7] w-5/12 font-[400] text-[#2b2b2b] text-[16px] border border-[#CCCCCC] outline-none text-center"
                />
                <input
                  type="password"
                  placeholder="password"
                  name="password"
                  value={registerInfo.password}
                  onChange={handleChange}
                  className="h-[50px] bg-[#EDF0F7] w-5/12 font-[400] text-[#2b2b2b] text-[16px] border border-[#CCCCCC] outline-none text-center"
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
                  className="h-[230px] relative rounded-[8px] border-[4px] border-dashed"
                  key={index}
                >
                  {typeof obj?.imgUrl === "string" &&
                    obj?.imgUrl.length > 1 && (
                      <div className="w-full h-full">
                        <img
                          src={obj?.imgUrl}
                          alt=""
                          className="w-full h-full object-cover"
                        />
                      </div>
                    )}
                  <div className=" absolute -bottom-3 -right-2 ">
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
                    <img
                      src={helper.Add_Icon}
                      alt="add pictures"
                      className=" "
                      onClick={() => handleFileInputChange(index)}
                    />
                  </div>
                </div>
              ))}
            </div>

            <p className="my-[2rem]  font-[400] text-[16px] text-[#808080]">
              Add at least 2 pictures to continue
            </p>
          </div>
        </div>

        {number_of_picture >= 2 && (
          <button
            type="submit"
            className={`  capitalize  my-[2rem] mx-auto w-[220px] h-[58px] flex justify-center items-center rounded-[32px]  bg-[#F74887] font-[700] text-[16px] text-[#FDF7FF]`}
          >
            register
          </button>
        )}
      </div>
    </div>
  );
};

export default Register_User;
