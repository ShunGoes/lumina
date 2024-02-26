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
        <input
          type="email"
          placeholder="email"
          name="email"
          value={loginInfo.email}
          onChange={handleChange}
        />{" "}
        <br />
        <input
          type="password"
          placeholder="password"
          name="password"
          value={loginInfo.password}
          onChange={handleChange}
        />{" "}
        <br />
        <button type="submit">register</button>
      </form>
    </div>
  );
};

export default Login;
