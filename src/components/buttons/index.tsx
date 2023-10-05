import React from "react";

export const Button = ({ children }: any) => {
  return <button className="bg-primary text-white px-4 py-3 rounded hover:bg-primary/75">{children}</button>;
};
