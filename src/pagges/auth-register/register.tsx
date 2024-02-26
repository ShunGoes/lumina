import { useContext } from "react";

import { Auth_Context } from "../../context/auth.context";

import './register.css'


const Register_User = () => {
  const { handle_register_user, setRegisterInfo, registerInfo } =
    useContext(Auth_Context)!;

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name,value } = e.target

        setRegisterInfo({...registerInfo, [name]: value})
    }

  return (
    <div className=" h-screen register">
      <nav className="h-[90px] shadow shadow-[#5D6173] register-nav border-4 border-blue-500">

      </nav>

      <div className="form-container ">
          <div className="w-[362px] h-[61px] border-4 mx-auto flex flex-col items-center">
              <span className="font-[600] text-[26px] ">Create Acount </span>
              <span className="font-[400] text-[16px] text-[#808080]">Join the community and start connecting today!</span>
          </div>
          <div className="grid grid-cols-2 w-11/12 mx-auto border-4">
              <form onSubmit={handle_register_user}>
                <div className="flex flex-col gap-2">
                  <label htmlFor="" className="font-[500] text-[18px] "> First Name</label>
                  <input
                    type="text"
                    placeholder="name"
                    name="fname"
                    value={registerInfo.fname}
                    onChange={handleChange}
                    className="h-[50px] text-[#EDF0F7]  border border-[#CCCCCC] outline-none px-4 "
                  />{" "}
                </div>
                <div className="flex flex-col gap-2">
                  <label htmlFor="" className="font-[500] text-[18px] "> First Name</label>
                  <input
                    type="email"
                    placeholder="name"
                    name="email"
                    value={registerInfo.fname}
                    onChange={handleChange}
                    className="h-[50px] text-[#EDF0F7]  border border-[#CCCCCC] outline-none px-4 "
                  />{" "}
                </div>
                <br />
                <input
                  type="email"
                  placeholder="email"
                  name="email"
                  value={registerInfo.email}
                  onChange={handleChange}
                />{" "}
                <br />
                <input
                  type="password"
                  placeholder="password"
                  name="password"
                  value={registerInfo.password}
                  onChange={handleChange}
                />{" "}
                <br />
                <button type="submit">
                    register
                </button>
              </form>

          </div>

      </div>
    </div>
  );
};

export default Register_User;
