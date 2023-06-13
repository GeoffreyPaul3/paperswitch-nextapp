import Banner from "@/components/Banner";
import Brand from "@/components/Brand";
import Expertise from "@/components/Expertise";
import Testimonial from "@/components/Testimonial";


import { Hero } from "@/sections";

export default function Home() {
  return (
    <>
      <Hero />
      <Expertise />
      <Banner />
      <Testimonial />
      <Brand />
    </>
  );
}
