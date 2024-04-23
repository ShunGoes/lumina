import helper from "../../helper/helper"

const Email_Redirect = () => {
  return (
    <div className="">
        <img src={helper.Logo} alt="" className="mx-auto mt-[2em]"/>
        <p className=" w-11/12 lg:w-10/12 mx-auto text-center text-[18px] font-[400] ">
            We've just sent you an email to verify your email address. Please check your inbox (and spam folder, just in case) and click on the verification link to complete the process. 

        </p>
    </div>
  )
}

export default Email_Redirect