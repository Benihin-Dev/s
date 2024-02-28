import React from "react";
import NavBar from "./NavBar";
import HomeContent from "./HomeContent";
import Contact from "./Contact";
import About from "./About";
import UserDetailsForm from "./UserDetailsForm";
import { useMainPageData } from "./MainPageDataProvider";
import { TempletCollectionProvider } from "./TempletCollectionsProvider";
import { UserInfoProvider } from "./UserInfoProvider";
import PortfolioPreviewSection from "./PortfolioPreviewSection";

export default function MainPage() {
  const { activeState } = useMainPageData();

  return (
    <>
      <TempletCollectionProvider>
        <NavBar />
        {activeState === "home" ? (
          <HomeContent />
        ) : activeState === "contact" ? (
          <Contact />
        ) : activeState === "about" ? (
          <About />
        ) : activeState === "form" ? (
          <UserInfoProvider>
            <UserDetailsForm />
          </UserInfoProvider>
        ) : activeState === "review" ? (
          <PortfolioPreviewSection />
        ) : (
          ""
        )}
      </TempletCollectionProvider>
    </>
  );
}
