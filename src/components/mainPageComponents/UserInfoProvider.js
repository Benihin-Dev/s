import React, { createContext, useContext, useState } from "react";

const SharedUserInfoContext = createContext();

export const UserInfoProvider = ({ children }) => {
  const [currentForm, setCurrentForm] = useState("welcomePara");
  const [userProfilePicName, setUserProfilePicName] = useState("");

  const [userData, setUserData] = useState({
    about: {
      userid: "",
      name: "",
      titleName: "",
      description: "",
      profile: "",
      cv: "",
    },
    eduSkills: {
      education: [
        {
          title: "",
          place: "",
          description: "",
          _id: "",
        },
        {
          title: "",
          place: "",
          description: "",
          _id: "",
        },
        {
          title: "",
          place: "",
          description: "",
          _id: "",
        },
      ],
      skills: [
        {
          title: "",
          description: "",
          _id: "",
        },
        {
          title: "",
          description: "",
          _id: "",
        },
        {
          title: "",
          description: "",
          _id: "",
        },
        {
          title: "",
          description: "",
          _id: "",
        },
      ],
      projects: [
        {
          title: "",
          description: "",
          projectLink: "",
          _id: "",
        },
        {
          title: "",
          description: "",
          projectLink: "",
          _id: "",
        },
        {
          title: "",
          description: "",
          projectLink: "",
          _id: "",
        },
      ],
    },
    contacts: {
      email: "",
      phone: "",
      linkedin: "",
      github: "",
      whatsapp: "",
      instagram: "",
    },
    experience: [
      {
        title: "",
        year: "",
        description: "",
        _id: "",
      },
      {
        title: "",
        year: "",
        description: "",
        _id: "",
      },
      {
        title: "",
        year: "",
        description: "",
        _id: "",
      },
      {
        title: "",
        year: "",
        description: "",
        _id: "",
      },
    ],
  });

  return (
    <SharedUserInfoContext.Provider
      value={{
        userData,
        setUserData,
        currentForm,
        setCurrentForm,
      }}
    >
      {children}
    </SharedUserInfoContext.Provider>
  );
};

export const useUserInfoCollections = () => useContext(SharedUserInfoContext);
