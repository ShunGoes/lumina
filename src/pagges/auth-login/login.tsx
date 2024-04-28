import { useContext } from "react";

import { Auth_Context } from "../../context/auth.context";

const Login = () => {
  const { handle_login_user, setLoginInfo, loginInfo } =
    useContext(Auth_Context)!;

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    setLoginInfo({ ...loginInfo, [name]: value });
  };

  return (
    <div>
      
      <form onSubmit={handle_login_user}>
         <div className="flex flex-col gap-2 h-[94px] my-2">
        <label htmlFor="" className="font-[500] text-[18px] text-[#2B2B2B] ">
          {" "}
          Email Address
        </label>
        <input
          type="email"
          placeholder="johndoe@exammple.com"
          name="email"
          value={loginInfo.email}
          onChange={handleChange}
          className="h-[50px] bg-[#EDF0F7] font-[400] text-[#2b2b2b] text-[16px] border border-[#CCCCCC] outline-none px-4 rounded-[10px] "
        />{" "}
      </div>

        <br />
        <div className="flex flex-col gap-2 h-[94px] my-2">
        <label htmlFor="" className="font-[500] text-[18px] text-[#2B2B2B] ">
          {" "}
          Password
        </label>
        <input
          type="password"
          placeholder="*********"
          name="password"
          value={loginInfo.password}
          onChange={handleChange}
          className="h-[50px] bg-[#EDF0F7] font-[400] text-[#2b2b2b] text-[16px] border border-[#CCCCCC] outline-none px-4 rounded-[10px] "
        />{" "}
      </div>
        <br />
        <button type="submit">register</button>
      </form>
    </div>
  );
};

export default Login;
