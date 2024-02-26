import { useContext } from "react";
import { Auth_Context } from "../../context/auth.context";

import "./register.css";
import helper from "../../helper/helper";

const Register_User = () => {
  const { handle_register_user, setRegisterInfo, registerInfo } =
    useContext(Auth_Context)!;

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    setRegisterInfo({ ...registerInfo, [name]: value });
  };

  return (
    <div className=" h-screen register">
      <nav className="h-[90px] shadow shadow-[#5D6173] register-nav border-4 border-blue-500"></nav>

      <div className="form-container ">
        <div className="w-[362px] h-[61px]  mx-auto mb-[3rem] mt-[2rem] flex flex-col items-center">
          <span className="font-[600] text-[26px] ">Create Acount </span>
          <span className="font-[400] text-[16px] text-[#808080]">
            Join the community and start connecting today!
          </span>
        </div>
        <div className="grid grid-cols-2 w-11/12 mx-auto justify-items-center border-4 border-blue-500">
          <form className="w-11/12 col-span-2 lg:col-span-1" onSubmit={handle_register_user}>
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
                type="email"
                placeholder="johndoe@exammple.com"
                name="email"
                value={registerInfo.email}
                onChange={handleChange}
                className="h-[50px] bg-[#EDF0F7] font-[400] text-[#2b2b2b] text-[16px] border border-[#CCCCCC] outline-none px-4 "
              />{" "}
            </div>
            <br />

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
              ></label>
              <input
                type="text"
                placeholder="email"
                name="email"
                value={registerInfo.email}
                onChange={handleChange}
              />
              <input
                type="password"
                placeholder="password"
                name="password"
                value={registerInfo.password}
                onChange={handleChange}
              />{" "}
            </div>

            <br />
            <button type="submit">register</button>
          </form>

          <div className="h-full w-11/12 col-span-1 hidden  lg:block">
            <p className="font-[500] text-[18px] text-[#808080] mb-[1rem]">
              Profile Picture
            </p>
            <div className="grid grid-cols-3 gap-[20px] ">
              <div className="h-[230px] relative rounded-[8px] border-[4px] border-dashed">
                <div className="w-full h-full">
                  
                </div>
                <img src={helper.Add_Icon} alt="add pictures" className="absolute -bottom-3 -right-2" />
              </div>
              <div className="h-[230px] relative rounded-[8px] border-[4px] border-dashed">
                <div className="w-full h-full">
                  
                </div>
                <img src={helper.Add_Icon} alt="add pictures" className="absolute -bottom-3 -right-2" />
              </div>
              <div className="h-[230px] relative rounded-[8px] border-[4px] border-dashed">
                <div className="w-full h-full">
                  
                </div>
                <img src={helper.Add_Icon} alt="add pictures" className="absolute -bottom-3 -right-2" />
              </div>
              <div className="h-[230px] relative rounded-[8px] border-[4px] border-dashed">
                <div className="w-full h-full">
                  
                </div>
                <img src={helper.Add_Icon} alt="add pictures" className="absolute -bottom-3 -right-2" />
              </div>
              <div className="h-[230px] relative rounded-[8px] border-[4px] border-dashed">
                <div className="w-full h-full">
                  
                </div>
                <img src={helper.Add_Icon} alt="add pictures" className="absolute -bottom-3 -right-2" />
              </div>
              <div className="h-[230px] relative rounded-[8px] border-[4px] border-dashed">
                <div className="w-full h-full">
                  
                </div>
                <img src={helper.Add_Icon} alt="add pictures" className="absolute -bottom-3 -right-2" />
              </div>
              <div className="h-[230px] relative rounded-[8px] border-[4px] border-dashed">
                <div className="w-full h-full">
                  
                </div>
                <img src={helper.Add_Icon} alt="add pictures" className="absolute -bottom-3 -right-2" />
              </div>
              <div className="h-[230px] relative rounded-[8px] border-[4px] border-dashed">
                <div className="w-full h-full">
                  
                </div>
                <img src={helper.Add_Icon} alt="add pictures" className="absolute -bottom-3 -right-2" />
              </div>
              <div className="h-[230px] relative rounded-[8px] border-[4px] border-dashed">
                <div className="w-full h-full">
                  
                </div>
                <img src={helper.Add_Icon} alt="add pictures" className="absolute -bottom-3 -right-2" />
              </div>
            </div>

            <p className="my-[2rem]  font-[400] text-[16px] text-[#808080]">
              Add at least 2 pictures to continue
            </p>

          </div>
        </div>
      </div>
    </div>
  );
};

export default Register_User;
