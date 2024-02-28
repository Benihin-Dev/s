import React from "react";
import footer from "./img/footer.png";
import phoneImg from "./img/telephone-call.png";
import emailImg from "./img/email.png";
import linkedinImg from "./img/linkedin.png";
import githubImg from "./img/github-sign.png";
import whatsappImg from "./img/whatsapp.png";
import instagramImg from "./img/instagram.png";

export default function Footer({ contactData }) {
  return (
    <div className="h-20  w-full sm:w-4/5 pb-1 flex justify-center mt-10 sm:mt-20 items-end sm:items-center mx-auto footer">
      <div className="sm:flex ml-0 gap-5 sm:ml-5 w-full">
        <div className="w-11/12 sm:w-1/2 md:w-2/5 ml-8 sm:ml-0 mx-auto">
          <div className="flex gap-3">
            <img className="contactImg1" src={phoneImg} alt="phone.png" />
            <h1 className="text-sm text-white hover:text-yellow-500">
              {contactData.phone}
            </h1>
          </div>
          <div className="flex gap-3">
            <img className="contactImg1" src={emailImg} alt="email.png" />
            <h1 className=" text-sm text-white hover:text-yellow-500">
              {contactData.email}
            </h1>
          </div>
        </div>

        <div className="flex mt-3 ml-0 sm:mt-0 sm:w-3/5 justify-around">
          <a href={contactData.linkedin}>
            <img className="contactImg" src={linkedinImg} alt="LinkedIn.png" />
          </a>
          <a href={contactData.github}>
            <img className="contactImg" src={githubImg} alt="GitHub.png" />
          </a>
          <a href={contactData.whatsapp}>
            <img className="contactImg" src={whatsappImg} alt="Whatsapp.png" />
          </a>
          <a href={contactData.instagram}>
            <img
              className="contactImg"
              src={instagramImg}
              alt="Instagram.png"
            />
          </a>
        </div>
      </div>
      <div className=" w-1/4">
        <img className="footerImage" src={footer} alt="" />
      </div>
    </div>
  );
}
