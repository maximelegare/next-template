import * as ScrollArea from "@radix-ui/react-scroll-area";
import React, { ReactNode } from "react";


interface Props {
  children:ReactNode;
  thumbColor?:string
}

export const R_ScrollBar = ({ children, thumbColor = "bg-primary-content"  }: Props) => {
  return (
    <ScrollArea.Root className="h-full w-full overflow-hidden">
      <ScrollArea.Viewport className="h-full w-full px-3">
        {children}
      </ScrollArea.Viewport>
      <ScrollArea.Scrollbar
        className="flex w-2 touch-none select-none p-[1px]"
        orientation="vertical"
      >
        <ScrollArea.Thumb className={`ScrollAreaThumb relative w-2 flex-grow rounded-md ${thumbColor}`} />
      </ScrollArea.Scrollbar>
      <ScrollArea.Scrollbar
        className="flex-col h-[10px]"
        orientation="horizontal"
      >
        <ScrollArea.Thumb className="ScrollAreaThumb" />
      </ScrollArea.Scrollbar>
      <ScrollArea.Corner className="ScrollAreaCorner" />
    </ScrollArea.Root>
  );
};
