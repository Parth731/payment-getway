import styles from "../style";
import Logo from "../assets/newLogo.png";
import { footerLinks, socialMedia } from "../constants";

const Footer = () => (
  <section
    className={`${styles.flexCenter} ${styles.paddingY} flex-col px-4 md:px-0`}
  >
    <div className={`${styles.flexStart} md:flex-row flex-col mb-8 w-full`}>
      <div className="flex-1 flex flex-col justify-start mr-10">
        {/* <img
          src={Logo}
          alt="LogoImg"
          className="w-[266px] h-[72px] object-contain"
        /> */}
        <p className={`${styles.paragraph} mt-4 max-w-[31s0px]`}>
          A new way to make the payments ease, reliable and secure.
        </p>
      </div>
      <div className="flex-[1.5] w-full flex flex-rq justify-between flex-wrap md:mt-0 mt-10">
        {footerLinks.map((footerLink) => (
          <div
            key={footerLink.id}
            className="flex flex-col ss:my-0 my-4 min-w-[150px]"
          >
            <h4 className="font-poppins font-medium text-[18px] leading-[27px] text-white">
              {footerLink.title}
            </h4>
            <ul className="list-none mt-4">
              {footerLink.links.map((link, index) => (
                <li
                  key={link.name}
                  className={`font-poppins font-normal text-[16px] leading-[24px] text-dimWhite hover:text-secondary cursor-pointer ${
                    index !== footerLink.links.length - 1 ? "mb-4" : "mb-0"
                  }`}
                >
                  {link.name}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
    <div className="w-full flex justify-between items-center md:flex-row flex-col pt-6 border-t-[1px] border-t-cyan-900">
      <p className="font-poppins font-medium text-[18px] leading-[27px] text-white text-center">
        2022 Parth_Dangroshiya. All Rights Reserved.
      </p>

      <div className="flex flex-row mt-6 md:mt-3">
        {socialMedia.map((social, index) => (
          <img
            key={social.id}
            src={social.icon}
            alt={social.id}
            className={`w-[21px] h-[21px] object-contain brightness-75 hover:brightness-125 duration-300 cursor-pointer ${
              index !== socialMedia.length - 1 ? "mr-6" : "mr-0"
            }`}
          />
        ))}
      </div>
    </div>
  </section>
);

export default Footer;
