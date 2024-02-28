import React, { createContext, useContext, useState } from "react";

import blue1 from "../../img/portfolioSnips/blue/blue.png";
import blue2 from "../../img/portfolioSnips/blue/bluePhone.png";

import pink1 from "../../img/portfolioSnips/pink/pink.png";
import pink2 from "../../img/portfolioSnips/pink/pinkPhone.png";

import green1 from "../../img/portfolioSnips/green/green.png";
import green2 from "../../img/portfolioSnips/green/greenPhone.png";

import purple1 from "../../img/portfolioSnips/purple/purple.png";
import purple2 from "../../img/portfolioSnips/purple/purplePhone.png";

import yellow1 from "../../img/portfolioSnips/yellow/yellow.png";
import yellow2 from "../../img/portfolioSnips/yellow/yellowPhone.png";

import blueDark1 from "../../img/portfolioSnips/blueDark/blueDark.png";
import blueDark2 from "../../img/portfolioSnips/blueDark/blueDarkPhone.png";

import pinkDark1 from "../../img/portfolioSnips/pinkDark/pinkDark.png";
import pinkDark2 from "../../img/portfolioSnips/pinkDark/pinkDarkPhone.png";

import greenDark1 from "../../img/portfolioSnips/greenDark/greenDark.png";
import greenDark2 from "../../img/portfolioSnips/greenDark/greenDarkPhone.png";

import yellowDark1 from "../../img/portfolioSnips/yellowDark/yellowDark.png";
import yellowDark2 from "../../img/portfolioSnips/yellowDark/yellowDarkPhone.png";

import whiteDark1 from "../../img/portfolioSnips/whiteDark/whiteDark.png";
import whiteDark2 from "../../img/portfolioSnips/whiteDark/whiteDarkPhone.png";

const SharedTempletCollectionsContext = createContext();

export const TempletCollectionProvider = ({ children }) => {
  const [homeActiveComponent, setHomeActiveComponent] = useState("free");
  const [selectedTemplet, setSelectedTemplet] = useState("");

  const blue = [blue1, blue2];
  const pink = [pink1, pink2];
  const green = [green1, green2];
  const purple = [purple1, purple2];
  const yellow = [yellow1, yellow2];

  const blueDark = [blueDark1, blueDark2];
  const pinkDark = [pinkDark1, pinkDark2];
  const greenDark = [greenDark1, greenDark2];
  const whiteDark = [whiteDark1, whiteDark2];
  const yellowDark = [yellowDark1, yellowDark2];
  return (
    <SharedTempletCollectionsContext.Provider
      value={{
        blue,
        green,
        purple,
        yellow,
        pink,
        pinkDark,
        yellowDark,
        greenDark,
        blueDark,
        whiteDark,
        homeActiveComponent,
        setHomeActiveComponent,
        selectedTemplet,
        setSelectedTemplet,
      }}
    >
      {children}
    </SharedTempletCollectionsContext.Provider>
  );
};

export const useTempletCollections = () =>
  useContext(SharedTempletCollectionsContext);
