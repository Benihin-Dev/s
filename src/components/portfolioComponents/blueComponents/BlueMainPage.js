import "./css/blue.css";
import React, { useEffect, useState } from "react";
import NavBar from "./NavBar";
import About from "./About";
import Education from "./Education";
import Projects from "./Projects";
import Experience from "./Experience";
import Footer from "./Footer";
import { Element } from "react-scroll";
import { useParams } from "react-router-dom";
import axios from "axios";

export default function BlueMainPage() {
  const InitialData = {
    about: {
      name: "John Daniel",
      titleName: "Fashion Designer",
      description:
        "Experienced software  amet consectetur adipisicing elit. Veniam reprehenderit repellat odit expedita soluta molestiae numquam, rem esse, repellendus, maiores nulla architecto facilis? Hic rem repellendus reiciendis sint recusandae quae. develope ",
      profile:
        "https://snapfolioprofilepics.s3.amazonaws.com/7cab721a8013230d097bbb500b892c3e.png",
      cv: "https://png.pngtree.com/png-vector/20230728/ourmid/pngtree-profile-picture-png-image_6985293.png",
      userid: "123456789",
    },
    eduSkills: {
      education: [
        {
          title: "Bachelor of Science in Computer Science",
          place: "University of Example, 2014-2018",
          description:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque, nihil? Voluptate fugiat ",
          _id: "65af790322c1b8355890c117",
        },
        {
          title: "Bachelor of Science in Ctber Security",
          place: "Jaffna, 2014-2018",
          description:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque, nihil? Voluptat",
          _id: "65af790322c1b8355890c118",
        },
        {
          title: "Advance level",
          place: "Jaffna, 2014-2018",
          description:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque, nihil? Voluptaofficia nesciunt?",
          _id: "65af7903d22c1b8355890c118",
        },
      ],
      skills: [
        {
          title: "JavaScript",
          description:
            "Proficient in both frontend frontend and backend development.",
          _id: "65af790322c1b8355890c119",
        },
        {
          title: "Node.js",
          description:
            "Extensive experience in building scalable server-side applications.",
          _id: "65af790322c1b8355890c11a",
        },
        {
          title: "React.js",
          description:
            "Extensive experience in building scalable server-side applications.",
          _id: "65af790322c1bds8355890c11a",
        },
        {
          title: "React.js",
          description:
            "Extensive experience in building scalable server-side applications.",
          _id: "65af790322c1bds8hj3558190c11a",
        },
      ],
      projects: [
        {
          title: "Project 1",
          description:
            "Proficient in both frontend frontend and backend development.",
          projectLink: "erhg9 grghierughw9g rguierwhg wg",
          _id: "65af790322c1iyb8355sa890c119",
        },
        {
          title: "project 2",
          description:
            "Extensive experience in building scalable server-side applications.",
          projectLink: "erhg9 grghierughw9g rguierwhg wg",
          _id: "65af790322c1bsiyaw8355890c11a",
        },
        {
          title: "project 3",
          description:
            "Extensive experience in building scalable server-side applications.",
          projectLink: "erhg9 grghierughw9g rguierwhg wg",
          _id: "65af790322cfd1b83ju55890c11a",
        },
        {
          title: "project 3",
          description:
            "Extensive experience in building scalable server-side applications.",
          projectLink: "erhg9 grghierughw9g rguierwhg wg",
          _id: "65af790322cfd1b8jg355890c11a",
        },
      ],
    },
    contacts: {
      email: "john.doe@example.com",
      phone: "+1 123-456-7890",
      linkedin: "https://www.linkedin.com/in/johndoe/",
      github: "https://github.com",
      whatsapp: "https://whatsapp.com",
      instagram: "https://instagram.com",
    },
    experience: [
      {
        title: "Software Developer",
        year: "2021-2023",
        description:
          "XYZ Tech Solutions - Worked on the development of innovative software solutions.",
        _id: "65af790322c1b83558re90c11b",
      },
      {
        title: "Senior Developer",
        year: "2021-2023",
        description:
          "ABC Software Co. - Led a team of developers in building robust web applications.",
        _id: "65af790322c1b8355retr890c11c",
      },
      {
        title: "Network Security",
        year: "2021-2023",
        description:
          "Sathurakondan batticaloa in building robust web applications.",
        _id: "65af790322cer1b8355890c11c",
      },
      {
        title: "Network Security",
        year: "2021-2023",
        description:
          "Sathurakondan batticaloa in building robust web applications.",
        _id: "65af790322c1b8355ter890c11c",
      },
    ],
  };
  const { id } = useParams();
  const [data, setData] = useState(InitialData);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (id !== undefined || null) {
      setLoading(true);
      const fetchData = async () => {
        try {
          const response = await axios.get(
            `https://snapfolio-server.onrender.com/snapfolio/${id}`
          );
          setData(response.data);
          setLoading(false);
        } catch (error) {
          setError(true);
          console.error("Error fetching header data:", error);
        }
      };
      fetchData();
    }
  }, []);

  if (loading) {
    return (
      <div className=" w-screen h-screen flex justify-center items-center bg-indigo-500">
        {" "}
        <div className="flex justify-center gap-[1px] items-center w-8 h-5 ">
          <div className=" w-2 bg-white border border-indigo-400 rounded-md loadingChild"></div>
          <div className=" w-2 bg-white border border-indigo-400 rounded-md loadingChild"></div>
          <div className=" w-2 bg-white border border-indigo-400 rounded-md loadingChild"></div>
          <div className=" w-2 bg-white border border-indigo-400 rounded-md loadingChild"></div>
          <div className=" w-2 bg-white border border-indigo-400 rounded-md loadingChild"></div>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex h-screen justify-center items-center">
        <h1 className="text-red-700 text-xl">404 error!..</h1>
        {/* <p>Error: {error.message}</p>; */}
      </div>
    );
  }

  const aboutData = data.about;
  const educationData = data.eduSkills.education;
  const skillData = data.eduSkills.skills;
  const projectData = data.eduSkills.projects;
  const experienceData = data.experience;
  const contactData = data.contacts;

  return (
    <div className="font-kanit mainBodyBlue overflow-hidden">
      <NavBar aboutData={aboutData} />
      <Element name="about-section">
        <About aboutData={aboutData} />
      </Element>
      <Element name="education-section">
        <Education educationData={educationData} />
      </Element>
      <Element name="projects-section">
        <Projects skillData={skillData} projectData={projectData} />
      </Element>
      <Element name="contact-section">
        <Experience experienceData={experienceData} />
      </Element>

      <Footer contactData={contactData} />
    </div>
  );
}
