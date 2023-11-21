import * as ScrollArea from "@radix-ui/react-scroll-area";
import React, { ReactNode } from "react";

interface Props {
  children: ReactNode;
  thumbColor?: string;
  alwaysShowThumb?: boolean;
}

export const R_ScrollBar = ({
  children,
  thumbColor = "bg-primary-content",
  alwaysShowThumb = false,
}: Props) => {
  return (
    <ScrollArea.Root
      className="h-full w-full overflow-hidden"
      scrollHideDelay={alwaysShowThumb ? 100000000 : 600}
    >
      <ScrollArea.Viewport className="h-full w-full px-3">
        {children}
      </ScrollArea.Viewport>
      <ScrollArea.Scrollbar
        forceMount={alwaysShowThumb ? true : undefined}
        className="flex w-2 touch-none select-none p-[1px]"
        orientation="vertical"
      >
        <ScrollArea.Thumb
          className={`ScrollAreaThumb relative w-2 flex-grow rounded-md ${thumbColor}`}
        />
      </ScrollArea.Scrollbar>
      <ScrollArea.Scrollbar
        className="h-[10px] flex-col"
        orientation="horizontal"
      >
        <ScrollArea.Thumb className="ScrollAreaThumb" />
      </ScrollArea.Scrollbar>
      <ScrollArea.Corner className="ScrollAreaCorner" />
    </ScrollArea.Root>
  );
};
