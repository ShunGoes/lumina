import "./register.css";
import Registration_Form from "../../components/registration-form/register-form";
const Register_User = () => {
    return (
        <div className="  register">
            <nav className=" shadow shadow-[#5D6173] register-nav "></nav>

            <div className="form-container relative ">
                <div className="w-[362px] h-[61px]  mx-auto mb-[3rem] mt-[2rem] flex flex-col items-center">
                    <span className="font-[600] text-[26px] ">
                        Create Acount{" "}
                    </span>
                    <span className="font-[400] text-[16px] text-[#808080]">
                        Join the community and start connecting today!
                    </span>
                </div>
                <Registration_Form />
            </div>
        </div>
    );
};

export default Register_User;
