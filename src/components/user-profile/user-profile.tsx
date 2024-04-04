const User_Profile = () => {
  return (
    <div className="">
      <div className="mb-[2rem]  lg:h-[157px]  flex flex-col justify-around">
        <h5 className="text-[#000000] font-[700] text-[18px] lg:text-[22px] mb-[1rem] lg:mb-0">
          Passion
        </h5>
        <div className="flex gap-4 shrink-0 flex-wrap">
          <p className="h-[36px] font-[400] text-[14px] text-[#555555] rounded-[20px] border-2 px-[12px] py-[5px] border-[#CCCCCC] ">
            photography
          </p>
          <p className="h-[36px] font-[400] text-[14px] text-[#555555] rounded-[20px] border-2 px-[12px] py-[5px] border-[#CCCCCC] ">
            photography
          </p>
          <p className="h-[36px] font-[400] text-[14px] text-[#555555] rounded-[20px] border-2 px-[12px] py-[5px] border-[#CCCCCC] ">
            photography
          </p>
          <p className="h-[36px] font-[400] text-[14px] text-[#555555] rounded-[20px] border-2 px-[12px] py-[5px] border-[#CCCCCC] ">
            photography
          </p>
        </div>
      </div>

      <div className="mb-[2rem]  lg:h-[157px]  flex flex-col justify-around">
        <h5 className="text-[#000000] font-[700] text-[18px] lg:text-[22px] mb-[1rem] lg:mb-0">
          About Me
        </h5>
        <textarea
          name="about"
          id=""
          placeholder="About me..."
          cols={30}
          rows={10}
          className="outline-none p-8 hidden lg:block"
        ></textarea>
        <textarea
          name="about"
          id=""
          placeholder="About me..."
          cols={30}
          rows={5}
          className="outline-none p-2 lg:hidden"
        ></textarea>
      </div>

      <div className="mb-[2rem]  lg:h-[104px]  flex flex-col justify-around">
        <h5 className="text-[#000000] font-[700] text-[18px] lg:text-[22px] mb-[1rem] lg:mb-0">
          Job title
        </h5>
        <input
          type="text"
          placeholder="Add job title"
          className="outline-none px-3 w-9/12"
        />
      </div>

      <div className="mb-[2rem]  lg:h-[104px]  flex flex-col justify-around">
        <h5 className="text-[#000000] font-[700] text-[18px] lg:text-[22px] mb-[1rem] lg:mb-0">
          Company Name
        </h5>
        <input
          type="text"
          placeholder="Add Company Name"
          className="outline-none px-3 w-9/12"
        />
      </div>

      <div className="mb-[2rem]  lg:h-[104px]  flex flex-col justify-around">
        <h5 className="text-[#000000] font-[700] text-[18px] lg:text-[22px] mb-[1rem] lg:mb-0">
          School
        </h5>
        <input
          type="text"
          placeholder="Add Schooly Name"
          className="outline-none px-3 w-9/12"
        />
      </div>

      <div className="mb-[2rem]  lg:h-[104px]  flex flex-col justify-around">
        <h5 className="text-[#000000] font-[700] text-[18px] lg:text-[22px] mb-[1rem] lg:mb-0">
          Living in
        </h5>
        <input
          type="text"
          placeholder="Add City"
          className="outline-none px-3 w-9/12"
        />
      </div>

      <div className="mb-[2rem]  lg:h-[104px]  flex flex-col justify-around">
        <h5 className="text-[#000000] font-[700] text-[18px] lg:text-[22px] mb-[1rem] lg:mb-0">
          Gender
        </h5>
        <div className=" flex flex-row-reverse justify-end gap-4 ">
          <label htmlFor="male">Male</label>
          <input type="radio" id="male" name="gender" value="male" className="" />
        </div>
        <div className=" flex flex-row-reverse justify-end gap-4 ">
          <label htmlFor="female">Female</label>
          <input type="radio" id="female" name="gender" value="female" className="" />
        </div>
      </div>
    </div>
  );
};

export default User_Profile;
