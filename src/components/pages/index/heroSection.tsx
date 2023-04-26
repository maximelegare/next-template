import React from "react";
import { Section } from "~/components/core/Section";

export const HeroSection = () => {
  return (
    <Section styles="bg-primary">
      <div className=" flex h-full items-center justify-center">
        <div data-aos="fade-up-custom" data-aos-easing="ease-in-out-back">
          <h1 className="text-center text-4xl">
            this is my{" "}
            <span className="font-display text-6xl text-accent">Template</span>
            <br /> for{" "}
            <span className="font-display text-6xl text-accent">
              future
            </span>{" "}
            projects{" "}
            <span className="font-display text-6xl text-accent">.</span>
          </h1>
        </div>
      </div>
    </Section>
  );
};
