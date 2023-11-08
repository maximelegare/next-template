import React, { type ReactElement } from "react";

interface Props {
  button: ReactElement;
}

const PageSubFooter: React.FC<Props> = ({ button }) => {
  return (
    <div className="fixed bottom-0 right-0 flex w-full justify-end px-5 pb-24">
      {button}
    </div>
  );
};

export default PageSubFooter;
