import Logo from "../../images/Logo-White.png";
import FacebookIcon from "../../images/facebook.svg";
import TwitterIcon from "../../images/twitter.svg";
import TiktokIcon from "../../images/tiktok.svg";
import LinkedinIcon from "../../images/linkedin.svg";

export default function Footer() {
  return (
    <div className="bg-accent-blue w-full flex items-center justify-center">
      <div className="w-11/12 pt-10 pb-4 lg:pt-14 lg:pb-6 flex items-center justify-center flex-col">
        <img src={Logo} alt="logo" className="w-36 h-auto lg:w-48 mb-10" />
        <div className="flex flex-col text-white gap-5 lg:gap-14 w-full justify-center text-center lg:text-left lg:flex-row lg:justify-evenly">
          <div className="lg:w-1/3 flex flex-col items-center gap-2 lg:items-start lg:gap-4">
            <div className="font-bold text-lg lg:text-xl">ABOUT US</div>
            <div className="text-accent-grey lg:text-lg italic">
              At Remix Expanse, we're dedicated to revolutionizing financial
              services. Through innovation and expertise, we empower our clients
              to achieve their goals, redefining possibilities in finance.
            </div>
          </div>
          <div className="flex flex-col items-center gap-2 lg:items-start lg:gap-4">
            <div className="font-bold text-lg lg:text-xl">SUPPORT</div>
            <div className="text-accent-grey lg:text-lg flex flex-col items-center gap-1 lg:items-start">
              <div>Tech Support</div>
              <div>Documentation</div>
              <div>FAQ</div>
            </div>
          </div>
          <div className="flex flex-col items-center gap-2 lg:items-start lg:gap-4">
            <div className="font-bold text-lg lg:text-xl">SOCIAL CONNECT</div>
            <div className="flex items-center justify-center gap-3">
              <img src={FacebookIcon} alt="facebook" className="w-6 h-6" />
              <img src={TwitterIcon} alt="twitter" className="w-6 h-6" />
              <img src={LinkedinIcon} alt="linkedin" className="w-6 h-6" />
              <img src={TiktokIcon} alt="tiktok" className="w-6 h-6" />
            </div>
          </div>
        </div>
        <div className="text-white italic text-sm text-center mt-12 lg:text-base">
          © 2024 Remix Expanse. All rights reserved. Unauthorized reproduction
          of any content on this site is prohibited.
        </div>
      </div>
    </div>
  );
}
