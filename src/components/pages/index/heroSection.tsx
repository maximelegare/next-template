import React from "react";
import { Section } from "~/components/core/Section";

export const HeroSection = () => {
  return (
    <Section styles="bg-primary">
      <div className=" flex justify-center h-full items-center">
        <div>
          <h1 className="text-center text-4xl">
            this is my <span className="font-display text-accent text-6xl">Template</span>
            <br /> for <span className="font-display text-accent text-6xl">future</span> projects <span className="font-display text-accent text-6xl">.</span>
          </h1>
        </div>
      </div>
    </Section>
  );
};
