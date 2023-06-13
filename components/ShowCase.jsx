import React from "react";
import Link from "next/link";
import { HiOutlineArrowRight } from "react-icons/hi";
import { showcase } from "@/public/assets/data/dummydata";
import { Title } from "./common/Title";
import { Card } from "./common/Card";

const ShowCase = () => {
  return (
    <>
      <section className="showcase">
        <div className="container">
          <div className="heading-title">
            <Title title="Selected cases" />
          </div>
          <div className="hero-content grid-3 py">
            {showcase.map((item) => (
              <Card data={item} key={item.id} />
            ))}
          </div>
          <div className="card links">
            <Link href="/showcase">
              VIEW ALL CASES <HiOutlineArrowRight className="link-icon" />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default ShowCase;
