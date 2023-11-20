import React from "react";

export const DialogHeader = ({title}:{title:string}) => {
  return (
    <h3 className="mb-4 text-center text-xl font-bold text-base-200">
      {title}
    </h3>
  );
};
