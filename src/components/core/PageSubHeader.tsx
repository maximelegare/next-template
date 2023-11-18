import React, { type ReactElement } from "react";

interface TitlePageHeaderProps {
  title: string;
  subtitle?: string;
  firstButton?: ReactElement;
  secondButton?: ReactElement;
  thirdButton?: ReactElement;
  centerLayout?: boolean;
}

const TitlePageHeader: React.FC<TitlePageHeaderProps> = ({
  title,
  subtitle,
  firstButton,
  secondButton,
  thirdButton,
  centerLayout = false,
}) => {
  return (
    <>
      {!centerLayout ? (
        <div className="flex-grow">
          <div className="mb-4 flex items-center justify-between">
            <div>
              <div className="h-10">
                <h1 className="text-xl font-bold text-primary">{title}</h1>
                <p className="text-xs font-bold leading-3 text-secondary">
                  {subtitle ?? subtitle}
                </p>
              </div>
            </div>
            <div className="flex gap-2">
              {firstButton ?? firstButton} {secondButton ?? secondButton}{" "}
              {thirdButton ?? thirdButton}
            </div>
          </div>
        </div>
      ) : (
        <div className="mb-4">
          <div className="h-10">
            <h1 className="text-xl text-center font-bold text-primary">{title}</h1>
            <p className="text-sm text-center font-bold leading-3 text-secondary">
              {subtitle ?? subtitle}
            </p>
          </div>
        </div>
      )}
    </>
  );
};

export default TitlePageHeader;
