import React, { useState } from "react";
import { useUserInfoCollections } from "./UserInfoProvider";
import formImg from "../../img/form.png";
import formWelcomeImg from "../../img/formWelcomeImg.png";
import Form_UserID from "./formComponents/Form_UserID";
import Form_AboutSection from "./formComponents/Form_AboutSection";
import Form_EducationSection from "./formComponents/Form_EducationSection";
import Form_SkillsSection from "./formComponents/Form_SkillsSection";
import Form_ProjectsSection from "./formComponents/Form_ProjectsSection";
import Form_ExperienceSection from "./formComponents/Form_ExperienceSection";
import Form_ContactSection from "./formComponents/Form_ContactSection";
import LinkProvideSection from "./formComponents/LoadingComponent";
import Form_ProfilePic from "./formComponents/Form_ProfilePic";

export default function UserDetailsForm() {
  const { currentForm, setCurrentForm, userData, setUserData } =
    useUserInfoCollections();
  return (
    <div className=" sm:w-11/12 md:w-4/5 mx-auto sm:pt-20 relative font-ubuntu ">
      <div className="flex sm:mx-0 h-screen w-11/12 sm:left-2 mx-4 pb-6 overflow-hidden absolute top-0">
        <div className="w-full shadow sm:w-4/5 md:w-3/5 sm:px-10 py-5 mt-20 overflow-y-scroll lg:ml-10 shadow-indigo-200 relative scrollbarSize">
          <h1
            className={` ${
              currentForm === "welcomePara"
                ? "text-transparent"
                : currentForm === "idSection"
                ? "text-transparent"
                : currentForm === "finalSection"
                ? "text-transparent"
                : "text-indigo-400"
            }  text-xl sm:text-xl`}
          >
            Fill all infromation below for your Portfolio
          </h1>
          <div className=" py-5 ">
            {currentForm === "welcomePara" ? (
              <div className="p-5  flex justify-center items-end h-80 mb-20">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-xl  text-gray-700"
                  >
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                    Perspiciatis, mollitia!
                  </label>
                  <div className="w-full flex justify-end">
                    <button
                      onClick={() => {
                        setCurrentForm("idSection");
                      }}
                      className="py-1 border text-gray-600 border-indigo-400 hover:text-white hover:bg-indigo-500 rounded-2xl px-6 "
                    >
                      Start
                    </button>
                  </div>
                </div>
              </div>
            ) : currentForm === "idSection" ? (
              <Form_UserID />
            ) : currentForm === "aboutSection" ? (
              <Form_AboutSection />
            ) : currentForm === "profileSection" ? (
              <Form_ProfilePic />
            ) : currentForm === "educationSection" ? (
              <Form_EducationSection />
            ) : currentForm === "skillsSection" ? (
              <Form_SkillsSection />
            ) : currentForm === "projectSection" ? (
              <Form_ProjectsSection />
            ) : currentForm === "experienceSection" ? (
              <Form_ExperienceSection />
            ) : currentForm === "contactSection" ? (
              <Form_ContactSection />
            ) : currentForm === "finalSection" ? (
              <Form_ContactSection />
            ) : (
              ""
            )}
          </div>
        </div>
        <div className="hidden sm:flex border-r border-indigo-50  mt-20 sm:w-1/5 md:w-2/5 shadow shadow-indigo-200">
          <img src={formImg} className="object-cover mt-20" alt="" />
        </div>
        {currentForm === "welcomePara" ? (
          <div className=" sm:hidden opacity-80 absolute bottom-0  -z-10">
            <img src={formWelcomeImg} alt="" />
          </div>
        ) : currentForm === "idSection" ? (
          <div className=" sm:hidden opacity-80 absolute bottom-0  -z-10">
            <img src={formWelcomeImg} alt="" />
          </div>
        ) : currentForm === "aboutSection" ? (
          <div className=" sm:hidden opacity-80 absolute bottom-0  -z-10">
            <img src={formWelcomeImg} alt="" />
          </div>
        ) : (
          ""
        )}
      </div>
    </div>
  );
}
