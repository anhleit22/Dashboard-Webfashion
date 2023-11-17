import React from "react";

export const PickColorProduct = () => {
  return (
    <div className="mx-[10px] my-[10px] font-bold">
      Pick Color Product:
      <div className="flex justify-between">
        <div className="flex flex-col items-center">
          <input className="my-[10px]" type="checkbox"></input>
          <div className="w-[20px] h-[20px] bg-[red] rounded-lg"></div>
        </div>

        <div className="flex flex-col items-center">
          <input className="my-[10px]" type="checkbox"></input>
          <div className="w-[20px] h-[20px] bg-[black] rounded-lg"></div>
        </div>

        <div className="flex flex-col items-center">
          <input className="my-[10px]" type="checkbox"></input>
          <div className="w-[20px] h-[20px] bg-[pink] rounded-lg"></div>
        </div>

        <div className="flex flex-col items-center">
          <input className="my-[10px]" type="checkbox"></input>
          <div className="w-[20px] h-[20px] bg-[green] rounded-lg"></div>
        </div>

        <div className="flex flex-col items-center">
          <input className="my-[10px]" type="checkbox"></input>
          <div className="w-[20px] h-[20px] bg-[yellow] rounded-lg"></div>
        </div>
      </div>
    </div>
  );
};
