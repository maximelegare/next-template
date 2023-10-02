import type { ReactElement, FC } from "react";

type Props = { children: ReactElement; bgColor: string  };

export const Section: FC<Props> = ({ children, bgColor }) => {
  return (
    <section className={`min-h-screen flex justify-center ${bgColor}`}>
      <div className=" container">{children}</div>
    </section>
  );
};
