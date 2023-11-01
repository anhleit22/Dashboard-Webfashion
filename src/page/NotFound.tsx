export const NotFound = () => {
  return (
    <div className="flex justify-center items-center">
      <div className="w-[500px]">
        <div className="">
          <h1 className=" text-[30px] mb-[30px] font-bold">
            Something is not right...
          </h1>
          <p className="mb-[30px] leading-7">
            Page you are trying to open does not exist. You may have mistyped
            the address, or the page has been moved to another URL. If you think
            this is an error contact support.
          </p>
        </div>
        <div className="w-full flex justify-center my-[10px]">
          <button className="p-[10px] md:p-[15px] border-2 border-[#cc797f] rounded-3xl font-bold w-fit text-[20px] ct-hoverDefault">
            <a href="/">Get back to home page</a>
          </button>
        </div>
      </div>
      <div className="w-[500px] h-[500px] ">
        <img
          alt="LehoangAnh"
          src="https://ui.mantine.dev/_next/static/media/image.11cd6c19.svg"
        ></img>
      </div>
    </div>
  );
};
