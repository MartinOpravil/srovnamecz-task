import React from "react";

type ControlBarProps = {
  children: React.ReactNode;
};

const ControlBar = ({ children }: ControlBarProps) => {
  return <div className="flex w-full justify-end py-5">{children}</div>;
};

export default ControlBar;
