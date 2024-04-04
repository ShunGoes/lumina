import "./hero.css";
import helper from "../../helper/helper";
import { useContext, useState } from "react";
import { Auth_Context } from "../../context/auth.context";
import { useNavigate } from "react-router-dom";
import { Modal } from "react-responsive-modal";
import Helper from "../../helper/helper";
import {
  signInWithFacebookPopup,
  signInWithGooglePopup,
} from "../../utils/firebase/firebase.config";

const Hero = () => {
  const { setShowModal, showModal, setFormError, set_social_user, show_login_modal, set_show_login_modal } =
    useContext(Auth_Context)!;
  const [showOhoneLoginMModal, setShowPhoneModal] = useState(false);

  const open_phone_modal = () => {
    setShowPhoneModal(true);
  };
  const close_phone_modal = () => {
    setShowPhoneModal(false);
  };
  const open_login_modal = () => {
    set_show_login_modal(true);
  };
  const close_login_modal = () => {
    set_show_login_modal(false);
  };
  const create_account_modal = () => {
    setShowModal(true);
  };
  const handle_close_modal = () => {
    setShowModal(false);
  };
  const back_to_signup_modal = () => {
    set_show_login_modal(false)
    setShowModal(true)
    
  }
  const navigate = useNavigate();

  const go_to_register_page = () => {
    navigate("/register");
  };

  // get user email and name usng facebook sign up
  const get_google_signup_details = async () => {
    try {
      const response = await signInWithGooglePopup();

      const { displayName, email } = response.user;

      if (typeof displayName === "string" && typeof email === "string") {
        const firstName = displayName?.split(" ")[0];
        set_social_user({ firstName, email });
        go_to_register_page();
      }
    } catch (err) {
      setFormError({ error: err });
    }
  };

  // get user email and name usng facebook sign up
  const get_facebook_signup_details = async () => {
    try {
      const response = await signInWithFacebookPopup();

      const { displayName, email } = response.user;

      if (typeof displayName === "string" && typeof email === "string") {
        const firstName = displayName?.split(" ")[0];
        set_social_user({ firstName, email });
        go_to_register_page();
      }
    } catch (err) {
      setFormError({ error: err });
    }
  };


  return (
    <div className="hero relative w-full z-100   h-full text-white flex justify-center items-center">
      <div className=" h-auto w-[386px]  lg:w-[808px] lg:h-[378px] flex flex-col  lg:gap-0  lg:justify-around">
        <div className=" h-[180px] lg:h-[200px] z-10  lg:leading-[80px] ">
          <h2 className="font-[700] hero-text text-[32px] lg:text-[70px]  px-1 text-center">
            <span className="text-[#006DF8]">Discover</span> Your Perfect <br />
            Match <span className="text-[#006DF8]">with</span> <br />
            Lumina
          </h2>
        </div>

        <div className="flex flex-col  justify-around items-center gap-[10px]">
          <div
            className="bg-[#F74887] z-10 py-[10px] px-[24px] cursor-pointer rounded-[32px] h-[50px] w-11/12 flex justify-center items-center  gap-[10px] lg:w-[220px] "
            onClick={create_account_modal}
          >
            <span className="font-[700] text-white"> create account </span>{" "}
            <img src={helper.Arrow_Right} alt="" />
          </div>
          <div onClick={open_login_modal} className="bg-[transparent] lg:hidden border-2 border-[#fff] cursor-pointer z-10 py-[10px] px-[24px] rounded-[32px] h-[50px] w-11/12 flex justify-center items-center  ">
            <span className="font-[700] text-white"> log in </span>
          </div>
        </div>
      </div>
      <div className="absolute bottom-0 w-full flower-sm  h-[284px]  lg:hidden">
        <div className=" flex flex-col justify-end h-full items-center w-full">
          <span className="font-[700] text-[20px]  mb-[2rem]  text-white">
            Terms and Policy
          </span>
        </div>
      </div>
      <div className=" w-full h-full absolute hidden top-0 flower-lg lg:block  "></div>
      <Modal open={showModal} onClose={handle_close_modal} center>
        <div className="  w-[290px]  lg:h-[465px] lg:w-[547px]  flex justify-between items-center flex-col gap-[3rem] lg:gap-0  ">
          <div className="w-full gap-2   lg:h-[400px] lg:w-[400px] flex flex-col justify-center lg:gap-3 items-center">
            <div className="text-center mb-3">
              <h2 className="text-[20px] lg:leading-[39px] lg:font-[600] lg:text-[30px] lg:text-[#555555]  mb-2">
                Create account
              </h2>
              <p className="w-[90%] mx-auto text-[13px] lg:text-[16px] font-[300] lg:w-[378px] lg:h-[42px] lg:font-[500] lg:leading-[20.8px] ">
                By clicking Log in, you agree to our{" "}
                <span className="text-[#F74887]">Terms</span> of Lumina Service
                and <span className="text-[#F74887]"> Privacy Policy </span> .
              </p>
            </div>

            <div className="flex flex-col gap-3  w-full mt-[1rem] lg:gap-5 items-center">
              <div
                onClick={open_phone_modal}
                className="flex w-11/12 mx-auto lg:w-[367px] cursor-pointer h-[50px] lg:h-[58px] items-center px-[18px] gap-[5px] lg:py-[10px] lg:px-[24px] border-2 lg:border-4 rounded-[32px] border-[#CCCCCC] "
              >
                <img src={Helper.Mail_Black} alt="lumina google login" />
                <p className="font-[700] text-[16px] lg:font-[700] lg:text-[18px]  text-[#808080] text-center  w-full ">
                  Sign Up with Email
                </p>
              </div>

              <div
                onClick={get_google_signup_details}
                className="flex w-11/12 mx-auto lg:w-[367px] cursor-pointer h-[50px] lg:h-[58px] items-center px-[18px] gap-[5px] lg:py-[10px] lg:px-[24px] border-2 lg:border-4 rounded-[32px] border-[#CCCCCC] "
              >
                <img src={Helper.Google} alt="lumina google login" />
                <p className="font-[700] text-[16px] lg:font-[700] lg:text-[18px]  text-[#808080] text-center  w-full ">
                  Sign Up with Google
                </p>
              </div>

              <div
                onClick={get_facebook_signup_details}
                className="flex w-11/12 mx-auto lg:w-[367px] cursor-pointer h-[50px] lg:h-[58px] items-center px-[18px] gap-[5px] lg:py-[10px] lg:px-[24px] border-2 lg:border-4 rounded-[32px] border-[#CCCCCC] "
              >
                <img src={Helper.Facebook} alt="" />
                <p className="font-[700] text-[16px] lg:font-[700] lg:text-[18px]  text-[#808080] text-center  w-full ">
                  Sign Up with Facebook
                </p>
              </div>
            </div>
          </div>
          <div className="">
            <p className="font-[700] text-[14px] lg:text-[18px] text-[#808080] ">
              Have an account already? {" "}
              <span onClick={open_login_modal} className="text-[#F74887] cursor-pointer">
                Log in
              </span>
            </p>
          </div>
        </div>
      </Modal>
      <Modal open={showOhoneLoginMModal} onClose={close_phone_modal} center>
        <div className="  w-[300px] h-[500px] flex flex-col gap-[35px] lg:gap-[32px] items-center  lg:w-[500px] ">
          <div>
            <div className="h-[84px]"></div>
            <h4 className="font-[400] text-[18px] lg:font-[500] lg:text-[22px] text-[#2B2B2B] ">
              Enter your Email address
            </h4>
          </div>
          <div className="flex flex-col items-center gap-8">
            <input
              type="text"
              className="h-[46px] w-10/12 lg:w-[349px] outline-none px-[20px] rounded-[5px] border border-[#EDF0F7] placeholder-[#555555] placeholder-[14px] bg-[#EDF0F7] text-[400] text-[14px] "
              placeholder="Enter yoour email address"
            />
            <p className="w-11/12  lg:w-[375px] text-[12px] font-[400] lg:text-[14px] ">
              When you tab <span className="text-blue-500">continue</span>, you
              will be sent an email with a verification code sent to your email.
              The verification code number can be used to logged in.
            </p>
            <button className=" h-[] lg:h-[58px] lg:w-[261px] rounded-[32px] px-[24px] py-[10px] bg-[#CCCCCCBD] lg:font-[700] text-[18px] text-[#808080] ">
              Continue
            </button>
          </div>
        </div>
      </Modal>
      <Modal open={show_login_modal} onClose={close_login_modal} center>
        <div className="w-[290px]  lg:w-[547px]  py-[20px] rounded-[10px] ">
          <div className=" flex flex-col gap-[2rem] h-full lg:gap-[3rem] ">
            <div>
              <div className="h-[106px]"></div>
              <h4 className=" text-[18px] text-center lg:font-[600] lg:text-[30px] text-[#2B2B2B]">
                {" "}
                Log in to Lumina{" "}
              </h4>
            </div>
            <div className="lg:h-[341px]  flex flex-col gap-[3rem] lg:gap-0 lg:justify-between ">
              <div className="flex flex-col items-center gap-4 lg:gap-5">
                <div className="relative lg:h-[46px] w-11/12 lg:w-auto ">
                  <input
                    type="text"
                    className="w-full mx-auto  lg:w-[367px] lg:h-full rounded-[5px] border bg-[#EDF0F7] border-[#AAAAAA] px-[45px] py-[5px] lg:py-0  placeholder-[#555555] outline-none placeholder-[14px] "
                    placeholder="Enter yoour email address"
                  />
                  <div className="flex items-center left-3 lg:left-5 h-full absolute top-0 w-[30px]">
                    <img
                      src={Helper.User}
                      alt="user icon lumina"
                      className=""
                    />
                  </div>
                </div>

                <button className="w-11/12 lg:w-[367px] lg:h-[58px] rounded-[32px] px-[24px] py-[10px] bg-[#F74887] font-[600] lg:font-[700] text-[16px] text-[#FDF7FF] ">
                  Continue
                </button>
              </div>

              <div className="flex flex-col gap-3 w-full  lg:gap-5 items-center">
                <div
                  onClick={get_google_signup_details}
                  className="flex w-11/12 mx-auto lg:w-[367px] cursor-pointer h-[50px] lg:h-[58px] items-center px-[18px] gap-[5px] lg:py-[10px] lg:px-[24px] border-2 lg:border-4 rounded-[32px] border-[#CCCCCC] "
                >
                  <img src={Helper.Google} alt="lumina google login" />
                  <p className="font-[700] text-[16px] lg:font-[700] lg:text-[18px]  text-[#808080] text-center  w-full ">
                    Continue with Google
                  </p>
                </div>

                <div
                  onClick={get_facebook_signup_details}
                  className="flex w-11/12 mx-auto lg:w-[367px] cursor-pointer h-[50px] lg:h-[58px] items-center px-[18px] gap-[5px] lg:py-[10px] lg:px-[24px] border-2 lg:border-4 rounded-[32px] border-[#CCCCCC] "
                >
                  <img src={Helper.Facebook} alt="" />
                  <p className="font-[700] text-[16px] lg:font-[700] lg:text-[18px]  text-[#808080] text-center  w-full ">
                    Log in with Facebook
                  </p>
                </div>
              </div>
            </div>
            <div>
              <p className="lg:font-[700] font-[500] text-center text-[15px] lg:text-[18px] text-[#808080] ">
                Don't have an account{" "}
                <span onClick={back_to_signup_modal} className="text-[#F74887] cursor-pointer">
                  Sign Up
                </span>
              </p>
            </div>
          </div>
        </div>
      </Modal>
    </div>
  );
};

export default Hero;
