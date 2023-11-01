import { layoutProps } from "../../typeGlobal";

export const OnlyLayout = ({ children }: layoutProps) => {
  return (
    <div className="h-full flex items-center justify-center">{children}</div>
  );
};
