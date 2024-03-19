
const Terms_And_Policy = () => {
  return (
    <main className=' flex justify-center items-center '>
        <div className='w-10/12  h-11/12 flex flex-col gap-[4rem] my-[2rem]'>
            <h2 className='text-[22px] font-[700] text-[#2B2B2B] text-center'>Terms and Policy</h2>
            <div className='lg:h-[576px] w-full border-4'>
                <p className='text-[14px] lg:text-[18px] font-[400] mb-[1rem]'>
                By using the Lumina application, you agree to the following terms and policies:
                </p>
                <div className="flex gap-[10px] lg:gap-[15px]">
                    <p className=' text-[14px] lg:text-[18px] font-[400]'>
                        1
                    </p>
                    <p className='text-[14px] lg:text-[18px] font-[400]'>
                    User Agreement: You agree to abide by the Lumina User Agreement, which governs your use of the application and outlines your rights and responsibilities as a user.
                    </p>
                </div>
            </div>

        </div>
    </main>
  )
}

export default Terms_And_Policy