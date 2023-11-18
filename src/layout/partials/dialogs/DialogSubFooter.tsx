import React, { type ReactElement } from "react";

export const DialogSubFooter = ({ children }: { children: ReactElement }) => {
  return (
    <div>
      <div className=" absolute bottom-0 left-1/2 flex  w-11/12 -translate-x-1/2 justify-center  border-t py-4">
        <div className="flex gap-2">
          <div className="flex items-center justify-center gap-3">{children}</div>
        </div>
      </div>
    </div>
  );
};
