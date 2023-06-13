import { expertise } from "@/public/assets/data/dummydata";
import { Card } from "./common/Card";
import React from "react";
import { Title } from "./common/Title";

const Expertise = () => {
  return (
    <div>
      <section className="expertise">
        <div className="container">
          <div className="heading-title">
            <Title title="Our expertise" />
            <p>
              We are a rapidly expanding and innovative digital studio
              specializing in web design & development, digital marketing,
              script writing, and branding & creative services.
            </p>
          </div>
          <div className="hero-content grid-4">
            {expertise.map((item) => (
              <Card data={item} key={item.id} caption="learn more" />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Expertise;
