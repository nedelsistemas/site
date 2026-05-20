"use client";

import { TypeAnimation } from "react-type-animation";

export const ExampleComponent = () => {
  return (
    <TypeAnimation
      sequence={["gestão empresarial", 4000, "gestão", 4000, "decisões", 4000]}
      wrapper="span"
      speed={20}
      style={{ display: "inline-block" }}
      repeat={Infinity}
    />
  );
};
