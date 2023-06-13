import { Card } from "@/components/common/Card";
import { Title, TitleSm } from "@/components/common/Title";
import { expertise } from "@/public/assets/data/dummydata";
import React from "react";

const Services = () => {
  return (
    <>
      <section className="agency bg-top">
        <div className="container">
          <div className="heading-title">
            <TitleSm title="SERVICES" /> <br />
            <br />
            <Title
              title="Innovative technologies & modern approach"
              className="title-bg"
            />
          </div>
          <div className="grid-2 py">
            {expertise.map((item) => (
              <Card data={item} key={item.id} caption={item.post} show={true} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Services;
