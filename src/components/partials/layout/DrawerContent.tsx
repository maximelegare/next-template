import React from "react";
import { Button } from "~/components/core/Button";
import { IconClose } from "~/components/core/Icons";


import { useLayout } from "~/hooks/useLayout";

export const DrawerContent = () => {
    
  const {toggleDrawer} = useLayout()


  return (
    <div className="mx-4 h-full">
      <div className="flex h-full flex-col justify-between py-4">
        <div className="flex flex-col gap-1">
          <Button
            justifyContent="start"
            variant="icon-with-text"
            size="xs"
            text="Close"
            handleClick={() => toggleDrawer()}
            icon={<IconClose />}
            color="error"
            
          />
          <Button
            topSeparator
            variant="icon-with-text"
            size="lg"
            text="Close"
            justifyContent="start"
            handleClick={() => toggleDrawer()}
            icon={<IconClose />}
            width="full"
          />
          <Button
            variant="icon-with-text"
            text="Close"
            justifyContent="start"
            handleClick={() => toggleDrawer()}
            icon={<IconClose />}
            width="full"
          />
        </div>
        <div className="text-center text-base-100">footer message</div>
      </div>
    </div>
  );
};
