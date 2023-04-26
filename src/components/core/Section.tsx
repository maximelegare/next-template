import type { ReactElement, FC } from "react";

type Props = { children: ReactElement; styles?: string  };

export const Section: FC<Props> = ({ children, styles }) => {
  return (
    <section className={`min-h-screen flex justify-center ${styles ? styles : ""}`}>
      <div className="container">{children}</div>
    </section>
  );
};
