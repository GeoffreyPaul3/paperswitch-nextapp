import React from "react";
import { Title, TitleLogo } from "./common/Title";
import Link from "next/link";

const Banner = () => {
  return (
    <div>
      <section className="banner">
        <div className="container">
          <div>
            <Title title="We are excited to embark on a new endeavor" /> <br />
            <br />
            <TitleLogo title="Let us help you take your business to the next level!" />
          </div>
          <div>
            <Link href="/contact">
            <button className="button-primary">Request a call-back</button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Banner;
