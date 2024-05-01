import { useState } from "react";
import helper from "../../helper/helper";
import { useAuth } from "../../context/auth.context";
import Modal from "react-responsive-modal";
import PassionItem from "../PassionItem";
import { useForm } from "react-hook-form";
import Input from "../Input";
import ProfileUploads from "../ProfileUploads";
import { yupResolver } from "@hookform/resolvers/yup";
import { RegisterSchema } from "../../validators/authValidator";

const Registration_Form = () => {
    const {
        signedInWithSocials,
        passions,
        formError,
        registerInfo,
        registerUser,
    } = useAuth();

    const {
        register,
        handleSubmit,
        formState: { errors },
        setValue,
        watch,
        clearErrors,
    } = useForm<RegisterUserInfo>({
        defaultValues: {
            name: registerInfo.name || "",
            email: registerInfo.email || "",
            passion: [],
            pictures: [],
            interested_in: [],
            social_token: registerInfo.social_token || "",
        },
        resolver: yupResolver(RegisterSchema),
    });

    const [showModal, setShowModal] = useState(false);

    const handleOpenModal = () => {
        setShowModal(true);
    };
    const handleCloseModal = () => {
        setShowModal(false);
    };

    const handle_show_passion = () => {
        setShowModal(false);
    };

    const onSubmit = (data: RegisterUserInfo) => {
        registerUser(data);
    };

    const updatePassion = (id: number, action: "add" | "remove" = "add") => {
        if (action === "remove") {
            setValue(
                "passion",
                watch("passion").filter((p) => p !== id),
            );
        } else {
            setValue("passion", [...watch("passion"), id]);
            clearErrors("passion");
        }
    };

    const setInterestedIn = (interest: "male" | "female") => {
        const interests = watch("interested_in");
        if (interests.includes(interest)) {
            setValue(
                "interested_in",
                interests.filter((item) => item !== interest),
            );
        } else {
            setValue("interested_in", [...interests, interest]);
        }
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            {formError && (
                <p className="text-[#AA4A44] text-[14px] text-center">
                    {formError}
                </p>
            )}
            <div className="grid grid-cols-1 gap-y-[2rem] lg:grid-cols-2 w-11/12 mx-auto justify-items-center ">
                <div className="w-11/12 col-span-2 lg:col-span-1">
                    <Input
                        label="Name"
                        placeholder="Name"
                        {...register("name")}
                        error={errors.name?.message}
                    />
                    {!signedInWithSocials && (
                        <Input
                            type="password"
                            label="Password"
                            placeholder="password"
                            {...register("password")}
                            error={errors.password?.message}
                        />
                    )}

                    <Input
                        type="email"
                        label="Email Address"
                        placeholder="Email Address"
                        {...register("email")}
                        error={errors.email?.message}
                    />

                    <div className="flex flex-col gap-2 my-2">
                        <label
                            htmlFor=""
                            className="font-[500] text-[18px] text-[#2B2B2B] "
                        >
                            Birthday
                        </label>
                        <div className="flex justify-between items-center gap-2">
                            <Input
                                type="number"
                                pattern="\d"
                                inputMode="numeric"
                                max={31}
                                min={1}
                                placeholder="DD"
                                {...register("day")}
                                error={errors.day?.message}
                            />
                            <Input
                                type="number"
                                pattern="\d"
                                inputMode="numeric"
                                max={12}
                                min={1}
                                placeholder="MM"
                                {...register("month")}
                                error={errors.month?.message}
                            />
                            <Input
                                type="number"
                                pattern="\d"
                                inputMode="numeric"
                                maxLength={4}
                                placeholder="YYYY"
                                {...register("year")}
                                error={errors.year?.message}
                            />
                        </div>
                    </div>

                    <div className="flex flex-col gap-2">
                        <label
                            htmlFor=""
                            className="text-[#2B2B2B] font-[500] text-[18px] "
                        >
                            Gender
                        </label>
                        <div className="flex gap-[10px]">
                            <input
                                type="button"
                                value="male"
                                onClick={() => {
                                    setValue("gender", "male");
                                    clearErrors("gender");
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
                                    clearErrors("gender");
                                }}
                                className={`${
                                    watch("gender") === "female"
                                        ? "bg-[#F74887] text-white"
                                        : "bg-[#EDF0F7]"
                                } h-[50px] bg-[#EDF0F7] w-5/12 font-[500] text-[#333333] text-[16px] border border-[##EDF0F7] outline-none text-center rounded-[10px]`}
                            />{" "}
                        </div>
                        {errors.gender?.message && (
                            <p className="text-[#AA4A44] text-[14px]">
                                {errors.gender?.message}
                            </p>
                        )}
                    </div>

                    <div className="my-4">
                        <p className="text-[#2B2B2B] font-[500] text-[18px]">
                            Interested in meeting
                        </p>
                        <div className="flex gap-4">
                            <label
                                htmlFor="men"
                                className="flex flex-center text-[#2B2B2B] font-[500] text-[18px] mt-4"
                            >
                                <input
                                    type="checkbox"
                                    id="men"
                                    name="men"
                                    onChange={() => setInterestedIn("male")}
                                    defaultChecked={watch(
                                        "interested_in",
                                    ).includes("male")}
                                    className="mr-2 h-6 w-6 checked:bg-primary checked:border-primary checked:border-2 checked:rounded-[10px]"
                                />
                                Men
                            </label>
                            <label
                                htmlFor="women"
                                className="flex flex-center mt-4 text-[#2B2B2B] font-[500] text-[18px]"
                            >
                                <input
                                    type="checkbox"
                                    id="women"
                                    name="women"
                                    onChange={() => setInterestedIn("female")}
                                    defaultChecked={watch(
                                        "interested_in",
                                    ).includes("male")}
                                    className="mr-2 h-6 w-6 checked:bg-primary checked:border-primary checked:border-2 checked:rounded-[10px]"
                                />
                                Women
                            </label>
                        </div>
                        {errors.interested_in?.message && (
                            <p className="text-[#AA4A44] text-[14px]">
                                {errors.interested_in?.message}
                            </p>
                        )}
                    </div>

                    <div className="flex flex-col gap-2 my-2">
                        <label
                            htmlFor="passion"
                            className="font-[500] text-[18px] text-[#2B2B2B] "
                        >
                            Passions
                        </label>
                        <div className="w-10/12 flex flex-wrap">
                            {watch("passion").map((item: number) => (
                                <div
                                    key={item}
                                    className="rounded-[20px] py-[8px] px-[12px] border-[1px] mr-[5px] mb-[5px] border-[#CCCCCC] text-[14px] font-[400] shrink-0"
                                >
                                    {passions[item - 1].name}
                                    <span
                                        className="text-[#F74887] ml-1 text-[16px] cursor-pointer"
                                        onClick={() =>
                                            updatePassion(item, "remove")
                                        }
                                    >
                                        &times;
                                    </span>
                                </div>
                            ))}
                        </div>
                        <div
                            onClick={handleOpenModal}
                            className="w-[200px] h-[50px] rounded-[10px] border-[2px] bg-[#EDF0F7] border-[#A0ABC0] px-[24px] gap-4 flex  items-center cursor-pointer "
                        >
                            <img src={helper.Plus_Circle} alt="" />
                            <span className="font-[500] text-[16px] text-[#464646] ">
                                Add Passions
                            </span>
                        </div>
                        {errors.passion?.message && (
                            <p className="text-[#AA4A44] text-[14px]">
                                {errors.passion?.message}
                            </p>
                        )}
                    </div>
                </div>
                <div className="h-full w-full lg:w-11/12 col-span-1">
                    <p className="font-[500] text-[18px] text-[#808080] mb-[1rem]">
                        Profile Picture
                    </p>
                    <div className="grid grid-cols-2 lg:grid-cols-3 gap-[20px] ">
                        {Array.from({ length: 6 }, (_, index) => index + 1).map(
                            (_i, j) => (
                                <ProfileUploads
                                    key={j}
                                    upload={watch("pictures")[j]}
                                    setUploads={(e) => {
                                        setValue("pictures", [
                                            ...watch("pictures"),
                                            e,
                                        ]);
                                    }}
                                />
                            ),
                        )}
                    </div>

                    {errors.pictures?.message && (
                        <p className="my-[2rem] text-[#AA4A44] text-[14px]">
                            {errors.pictures?.message}
                        </p>
                    )}
                </div>
            </div>
            <button
                type="submit"
                className={`  capitalize  my-[2rem] mx-auto w-[220px] h-[58px] flex justify-center items-center rounded-[32px]  bg-[#F74887] font-[700] text-[16px] text-[#FDF7FF]`}
            >
                register
            </button>

            <Modal open={showModal} onClose={handleCloseModal} center>
                <div className=""></div>
                <div className="w-[300px] h-[700px] lg:h-[550px] lg:w-[600px]    rounded-[10px]  flex flex-col justify-center gap-[2rem] ">
                    <div className=" lg:w-[511px] w-full mx-auto flex flex-col items-center ">
                        <h6 className="font-[700] text-[18px] text-[#2B2B2B]  ">
                            Passions
                        </h6>
                        <p className="font-[400] text-[14px] text-[#A0ABC0] text-center ">
                            Let everyone know what you are passionate about by
                            adding it to your profile
                        </p>
                    </div>
                    <div className="lg:w-[514px] w-full lg:h-[400px]  mx-auto flex   flex-wrap">
                        {passions.map((passion) => (
                            <PassionItem
                                key={passion.id}
                                passion={passion}
                                isActive={watch("passion").includes(passion.id)}
                                selectPassion={(id: number) => {
                                    if (watch("passion").includes(id)) {
                                        updatePassion(id, "remove");
                                    } else {
                                        updatePassion(id, "add");
                                    }
                                }}
                            />
                        ))}
                    </div>
                    <button
                        onClick={handle_show_passion}
                        className="px-[24px] py-[10px] h-[50px] text-white bg-[#F74887] rounded-[10px] outline-none font-[700]"
                    >
                        Add Passion
                    </button>
                </div>
            </Modal>
        </form>
    );
};

export default Registration_Form;
