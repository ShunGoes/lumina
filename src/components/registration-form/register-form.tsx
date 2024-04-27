import { useContext, useState } from "react";

import helper from "../../helper/helper";
import { Auth_Context } from "../../context/auth.context";

import Modal from "react-responsive-modal";
import Passion_Box from "../passion-box/passion-box";
import { useForm } from "react-hook-form";
import Input from "../Input";
import ProfileUploads from "../ProfileUploads";

const Registration_Form = () => {
  const {
    registerInfo,
    setRegisterInfo,
    social_user,
    signed_in_with_socials,
    PASSION_DATA,
  } = useContext(Auth_Context)!;

  const { register, handleSubmit, setValue, watch } = useForm<RegisterUserInfo>(
    {
      defaultValues: {
        email: social_user.email,
        passion: registerInfo.passion,
      pictures: []
      },
    }
  );

  const [showModal, setShowModal] = useState(false);
  const [genderBtn, setGenderBtn] = useState("");
  const [showPassion, setShowPassion] = useState(false);

  //  these functions handle input interractions
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    setRegisterInfo((prevState) => ({ ...prevState, [name]: value }));
  };

  const handleGenderChange = (e: React.MouseEvent<HTMLInputElement>) => {
    const { name, value } = e.currentTarget;

    setRegisterInfo({ ...registerInfo, [name]: value });
    setGenderBtn(value);
  };

  const handleOpenModal = () => {
    setShowModal(true);
    setShowPassion(false);
  };
  const handleCloseModal = () => {
    setShowModal(false);
  };

  const handle_show_passion = () => {
    setShowPassion(true);
    setShowModal(false);
  };

  return (
    <form className="w-11/12 col-span-2 lg:col-span-1">
      <Input
        label="First Name"
        placeholder="John Doe"
        {...register("first_name")}
      />
      {!signed_in_with_socials && (
        <Input
          type="password"
          label="Password"
          placeholder="password"
          {...register("password")}
        />
      )}

      {!signed_in_with_socials && (
        <Input
          type="email"
          label="Email Address"
          placeholder="Johndoe@example.com"
          {...register("email")}
        />
      )}

      <div className="flex flex-col gap-2 h-[94px] my-2 ">
        <label htmlFor="" className="font-[500] text-[18px] text-[#2B2B2B] ">
          {" "}
          Birthday
        </label>
        <div className="flex gap-[10px] justify-between items-center  w-11/12 border-4">
          <Input
            width="1/3"
            type="number"
            pattern="\d"
            inputMode="numeric"
            maxLength={2}
            placeholder="DD"
            {...register("day")}
          />
          <Input
            width="1/3"
            type="number"
            pattern="\d"
            inputMode="numeric"
            maxLength={2}
            placeholder="MM"
            {...register("month")}
          />
          <Input
            width="1/3"
            type="number"
            pattern="\d"
            inputMode="numeric"
            maxLength={4}
            placeholder="YYYY"
            {...register("year")}
          />
        </div>
        {/* <div className="flex gap-[10px]  w-full">
          <input
            type="number"
            pattern="\d*"
            placeholder="DD"
            inputMode="numeric"
            maxLength={2}
            {...register("day")}
            className="h-[50px] bg-[#EDF0F7] w-3/12 lg:w-[104px] font-[400] text-[#2b2b2b] text-[16px] border border-[#CCCCCC] outline-none text-center rounded-[10px]"
          />{" "}
          <input
            type="number"
            pattern="\d*"
            placeholder="MM"
            maxLength={2}
            {...register("month")}
            className="h-[50px] bg-[#EDF0F7] w-3/12 lg:w-[104px] font-[400] text-[#2b2b2b] text-[16px] border border-[#CCCCCC] outline-none text-center rounded-[10px]"
          />{" "}
          <input
            type="number"
            pattern="\d*"
            placeholder="YYYY"
            maxLength={4}
            {...register("year")}
            className="h-[50px] bg-[#EDF0F7] w-4/12 lg:w-[123px] font-[400] text-[#2b2b2b] text-[16px] border border-[#CCCCCC] outline-none text-center rounded-[10px]"
          />{" "}
        </div> */}
      </div>

      <div className="flex flex-col gap-2 my-2 ">
        <label htmlFor="" className="text-[#2B2B2B] font-[500] text-[18px] ">
          {" "}
          Gender
        </label>
        <div className="flex gap-[10px]">
          <input
            type="button"
            value="male"
            onClick={() => {
              setValue("gender", "male");
            }}
            className={`${
              watch("gender") === "male"
                ? "bg-[#F74887] text-white"
                : "bg-[#EDF0F7]"
            } h-[50px]  w-5/12 font-[500] text-[#333333] text-[16px] border border-[##EDF0F7] outline-none text-center rounded-[10px]`}
          />
          <input
            type="button"
            value="female"
            onClick={() => {
              setValue("gender", "female");
            }}
            className={`${
              watch("gender") === "female"
                ? "bg-[#F74887] text-white"
                : "bg-[#EDF0F7]"
            } h-[50px] bg-[#EDF0F7] w-5/12 font-[500] text-[#333333] text-[16px] border border-[##EDF0F7] outline-none text-center rounded-[10px]`}
          />{" "}
        </div>
      </div>

      <div className="flex flex-col gap-2 my-2">
        <label
          htmlFor="passion"
          className="font-[500] text-[18px] text-[#2B2B2B] "
        >
          Passion
        </label>
        <div
          onClick={handleOpenModal}
          className="w-[265px] h-[50px] rounded-[10px] border-[2px] bg-[#EDF0F7] border-[#A0ABC0] px-[24px] gap-4 flex  items-center cursor-pointer "
        >
          <img src={helper.Plus_Circle} alt="" />
          <span className="font-[500] text-[16px] text-[#464646] ">
            Add Passion
          </span>
        </div>

        <div className="w-10/12  rounded-[15px] p-[14px] flex flex-wrap mt-4 mb-[3rem]">
          {showPassion &&
            Array.from(registerInfo.passion).map((item: number) => (
              <span
                key={item}
                className="rounded-[20px] py-[8px] px-[12px] border-[2px] m-[7px] border-[#CCCCCC] text-[14px] font-[400] cursor-pointer  shrink-0"
              >
                {PASSION_DATA[item - 1].name}
              </span>
            ))}
        </div>
      </div>
      {/*  */}
      <div className="h-full w-full lg:w-11/12 col-span-1  hidden lg:block">
        <p className="font-[500] text-[18px] text-[#808080] mb-[1rem]">
          Profile Picture
        </p>
        <div className="grid grid-cols-2 lg:grid-cols-3 gap-[20px] ">

        {
          [...Array(6).map((obj, index) => (
            <ProfileUploads key={index} upload={watch("pictures")[index]} setUploads={(e) => setValue("pictures", [...watch("pictures"), e])}/>
          ))]
        }
        </div>
        {number_of_picture >= 2 ? null : (
          <p className="my-[2rem]  font-[400] text-[16px] text-[#808080]">
            Add at least 2 pictures to continue
          </p>
        )}
      </div>
      <Modal open={showModal} onClose={handleCloseModal} center>
        <div className=""></div>
        <div className="w-[300px] h-[700px] lg:h-[550px] lg:w-[600px]    rounded-[10px]  flex flex-col justify-center gap-[2rem] ">
          <div className=" lg:w-[511px] w-full mx-auto flex flex-col items-center ">
            <h6 className="font-[700] text-[18px] text-[#2B2B2B]  ">
              Passions
            </h6>
            <p className="font-[400] text-[14px] text-[#A0ABC0] text-center ">
              Let everyone know what you are passionate about by adding it to
              your profile
            </p>
          </div>
          <div className="lg:w-[514px] w-full lg:h-[400px]  mx-auto flex   flex-wrap">
            {PASSION_DATA.map((passion) => (
              <Passion_Box
                key={passion.id}
                passion={passion.name}
                idx={passion.id}
              />
            ))}
          </div>
          <button
            onClick={handle_show_passion}
            className="px-[24px] py-[10px] h-[50px] text-white bg-[#F74887] rounded-[10px] outline-none font-[700]"
          >
            {" "}
            Add Passion{" "}
          </button>
        </div>
      </Modal>
    </form>
  );
};

export default Registration_Form;
