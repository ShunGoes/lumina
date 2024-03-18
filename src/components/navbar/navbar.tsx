import Helper from "../../helper/helper";
import {  useState, useContext } from "react";
import { Modal } from "react-responsive-modal";
import { FaTimes } from "react-icons/fa";

// @ts-ignore
import { LoginSocialGoogle, LoginSocialFacebook } from "reactjs-social-login";
import "./nav.css";
import Nav_Dropdown from "./nav-dropdown";
import { Auth_Context } from "../../context/auth.context";

const Navbar = () => {
  const [showModal, setShowModal] = useState(false);
  const [showOhoneLoginMModal, setShowPhoneModal] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const { set_social_user, setFormError } =
    useContext(Auth_Context)!;

  //  handles interactions with modals
  const handle_show_modal = () => {
    setShowModal(true);
  };
  const handle_close_modal = () => {
    setShowModal(false);
  };

  const go_to_phone_modal = () => {
    setShowModal(false);
    setShowPhoneModal(true);
  };
  const close_phone_modal = () => {
    setShowPhoneModal(false);
  };

  // open hamburger menu for small screens
  const openHamburger = () => {
    setIsOpen(!isOpen);
    console.log("hello");
  };

  // modal styles
  const overlayStyles = {
    background: "rgba(0,0,0,0.7)",
  };
  const modalStyles = {
    height: "616px",
    width: "547px",
    borderRadius: "10px",
    backgroundColor: "#fff",
  };
  const phoneModalStyles = {
    height: "500px",
    width: "547px",
    borderRadius: "10px",
    backgroundColor: "#fff",
  };

  return (
    <nav className="h-[68px]   nav  lg:h-[90px] lg:flex items-center justify-center">
      <div className=" flex  justify-between items-center w-11/12 mx-auto h-full lg:h-[56px] lg:w-10/12 ">
        <div className="flex items-center">
          <img src={Helper.Logo} alt="" className="border-4 border-red-700" />
          <h3 className="font-[800] text-[21.91px] text-[#fff] lg:text-[30px]">
            Lumina
          </h3>
        </div>

        <div className="lg:hidden z-1000" onClick={openHamburger}>
          {!isOpen ? (
            <img src={Helper.Hamburger} alt="" />
          ) : (
            <FaTimes color="white" size={25} />
          )}
        </div>

        <div className="hidden z-10 cursor-pointer lg:flex w-[557px] justify-content gap-[16px]  ">
          <div
            onClick={handle_show_modal}
            className="w-[220px] h-[(58px] rounded-[32px] py-[10px] px-[24px] bg-[#F96C9F] font-[700] flex justify-center items-center members "
          >
            {" "}
            Members Log In
          </div>
          <div
            onClick={handle_show_modal}
            className=" h-[(58px]  flex justify-center gap-[10px] rounded-[32px] py-[10px] px-[24px] border-2  font-[700]  "
          >
            <img src={Helper.Facebook} alt="" />
            <p className="font-[700] text-[#FFFFFF]">Log in with Facebook</p>
          </div>
        </div>
        {isOpen && <Nav_Dropdown />}
      </div>

      <Modal
        open={showModal}
        onClose={handle_close_modal}
        styles={{
          overlay: overlayStyles,
          modal: modalStyles,
        }}
        center
      >
        <div className="h-full w-full  flex justify-center items-center">
          <div className="h-[499px] w-[409px] flex flex-col  lg:gap-3 items-center">
            <img
              src={Helper.Logo}
              alt="Lumina logo"
              className="w-[106px] h-[106px]"
            />
            <div className="text-center mb-3">
              <h2 className="leading-[39px] font-[600] text-[30px] text-[#555555]  mb-2">
                Create account
              </h2>
              <p className="w-[378px] h-[42px] font-[500] leading-[20.8px] ">
                By clicking Log in, you agree to our{" "}
                <span className="text-[#006DF8]">Terms</span> of Lumina Service
                and <span className="text-[#006DF8]"> Privacy Policy </span> .
              </p>
            </div>

            <div className="flex flex-col lg:gap-5 items-center">
              <LoginSocialGoogle
                isOnlyGetToken={false}
                className=""
                client_id={import.meta.env.VITE_CLIENT_ID}
                scope="https://www.googleapis.com/auth/userinfo.email"
                onResolve={({ data }: any) => {
                  const { email, given_name } = data;
                  set_social_user({ name: given_name, email });
                }}
                onReject={(err: any) => {
                  setFormError(err);
                }}
              >
                {/* <GoogleLoginButton /> */}
                <div className="flex w-[367px] h-[58px] gap-[5px] py-[10px] px-[24px] border-4 rounded-[32px] border-[#CCCCCC] ">
                  <img src={Helper.Google} alt="" />
                  <p className="font-[700] text-[18px] leading-[#808080] text-[#808080] text-center  w-full ">
                    Continue with Google
                  </p>
                </div>
              </LoginSocialGoogle>
              <LoginSocialFacebook
                appId={import.meta.env.VITE_FACEBOOK_APP_ID}
                fieldsProfile={`id,first_name,last_name,middle_name,name,name_format,picture,short_name,email,gender`}
                redirect_url={`/explore`}
                onResolve={({ data }: any) => {
                  console.log(data);
                }}
                onReject={(err: any) => {
                  console.log('an error occured while processing your request')
                  setFormError(err);
                }}
              >
                <div className="flex w-[367px] h-[58px] gap-[5px] py-[10px] px-[24px] border-4 rounded-[32px] border-[#CCCCCC] ">
                  <img src={Helper.Facebook} alt="" />
                  <p className="font-[700] text-[18px] leading-[#808080] text-[#808080] text-center  w-full ">
                    Log in with Facebook
                  </p>
                </div>
              </LoginSocialFacebook>

              <div
                className="flex w-[367px] h-[58px] gap-[5px] py-[10px] px-[24px] border-4 rounded-[32px] border-[#CCCCCC] "
                onClick={go_to_phone_modal}
              >
                <img src={Helper.Phone} alt="" />
                <p className="font-[700] text-[18px] leading-[#808080] text-[#808080] text-center  w-full ">
                  Log in with Phone number
                </p>
              </div>
            </div>
          </div>
        </div>
      </Modal>
      <Modal
        open={showOhoneLoginMModal}
        onClose={close_phone_modal}
        styles={{
          overlay: overlayStyles,
          modal: phoneModalStyles,
        }}
        center
      >
        <div className=" h-full flex flex-col justify-center ">
          <div className="w-11/12 mx-auto  flex flex-col justify-around gap-4 items-center ">
            <div className="flex flex-col items-center">
              <img src={Helper.Logo} alt="" />
              <h3 className="font-[500] text-[22px]  ">
                {" "}
                Enter your phone number{" "}
              </h3>
            </div>
            <div className="h-[86px] w-11/12 mx-auto  flex justify-center gap-4">
              <div className="w-[120px] flex flex-col gap-3">
                <label htmlFor="" className="font-[400] text-[16px]">
                  Country
                </label>
                <input
                  type="phone"
                  className="w-[117px] h-[46px] rounded-[5px] outline-none border border-[#AAAAAA]"
                />
              </div>
              <div className="w-[249px] flex flex-col gap-3">
                <label htmlFor="" className="text-[16px] font-[400] ">
                  {" "}
                  Phone Number
                </label>
                <input
                  type="phone"
                  className="w-[249px] h-[46px] outline-none rounded-[5px] border border-[#80B6FB] text-[#CCE2FE38] px-4 "
                />
              </div>
            </div>
            <p className="w-11/12 mx-auto pl-3 text-[14px] my-[2rem] ">
              when you tab <span className="text-[#006DF8]"> continue </span>{" "}
              you will be sent a text with a verification code to your mobile
              number. The verification code number can be used to log in.
            </p>

            <button className="w-[261px] h-[58px] rounded-[32px] py-[10px] px-[24px] bg-[#CCCCCCBD] font-[700] text-[18px] text-[#808080] ">
              Continue
            </button>
          </div>
        </div>
      </Modal>
    </nav>
  );
};

export default Navbar;
