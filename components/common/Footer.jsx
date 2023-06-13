import Link from "next/link";
import { BsFacebook, BsTwitter } from "react-icons/bs";
import {
  AiFillBehanceCircle,
  AiFillInstagram,
  AiFillLinkedin,
  AiFillTwitterCircle,
} from "react-icons/ai";
import { TitleLogo } from "./Title";

const Footer = () => {
  return (
    <>
      <footer>
        <div className="container">
          <div className="grid-4">
            <div className="logo">
              <TitleLogo
                title=".Inc"
                caption="PaperSwitch"
                className="logobg"
              />
              <br />
              <span>
                Questions? Reach us <br /> Monday – Friday from 8 am to 7 pm
              </span>
              <br />
              <br />
              <h3>+265 992 132 195</h3>
              <br />
              <Link href="/contact">
              <button className="button-primary">Request for quote</button>
              </Link>
            </div>
            <ul>
              <h3>COMPANY</h3>
              <li>
                <Link href="/agency">About agency</Link>
              </li>
              <li>
                <Link href="/services">Services</Link>
              </li>
              <li>
                <Link href="/showcase">Showcase</Link>
              </li>
              <li>
                <Link href="/contact">Contact</Link>
              </li>
            </ul>
            <ul>
              <h3>SERVICES</h3>
              <li>
                <Link href="/services">Web Design & Development</Link>
              </li>
              <li>
                <Link href="/services">Branding & Creative Services</Link>
              </li>
              <li>
                <Link href="/services">Digital Marketing</Link>
              </li>
              <li>
                <Link href="/services">Script Writing</Link>
              </li>
            </ul>
            <ul>
              <h3>CONNECT</h3>
              <div className="connect">
                <li>
                  <Link href="/">
                    <BsFacebook size={25} />
                  </Link>
                </li>
                <li>
                  <Link href="/">
                    <BsTwitter size={25} />
                  </Link>
                </li>
                <li>
                  <Link href="/">
                    <AiFillInstagram size={25} />
                  </Link>
                </li>
                <li>
                  <Link href="/">
                    <AiFillLinkedin size={25} />
                  </Link>
                </li>
              </div>
            </ul>
          </div>
          <div className="legal connect py">
            <div className="text">
              <span>© 2023 PAPERSWITCH.INC ALL RIGHTS RESERVED</span>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
