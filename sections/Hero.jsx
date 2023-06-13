import { Title, TitleLogo, TitleSm } from "@/components/common/Title";
import { home } from "@/public/assets/data/dummydata";
import React from "react";

const Hero = () => {
  return (
    <div>
      <section className="hero">
        <div className="container">
          <TitleLogo title=".Inc" caption="PaperSwitch" className="logobg" />
          <h1 className="hero-title">WE CREATE DIGITAL EXPERIENCES</h1>
          <div className="sub-heading">
            <TitleSm title="WEBSITES" /> 
            <TitleSm title="BRANDING" /> 
            <TitleSm title="DIGITAL MARKETING" /> 
            <TitleSm title="SCRIPT WRITING" />
          </div>
        </div>
      </section>
      <div className="hero-sec">
        <div className="container">
          <div className="heading-title">
            <Title title="The final digital agency you'll ever need" />
            <p>
              We are a fast-growing and forward-thinking digital studio focusing
              in visual and motion design, web development, digital marketing,
              and script writing. Our passion is assisting companies like yours
              to prosper in the digital landscape.
            </p>
          </div>
          <div className="hero-content grid-4">
            {home.map((item, i) => (
              <div className="box" key={i}>
                <span className="green">{item.icon}</span> <br />
                <br />
                <h3>{item.title}</h3>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
