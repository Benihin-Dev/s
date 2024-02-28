import React, { useState } from "react";
import axios from "axios";
import { useUserInfoCollections } from "../UserInfoProvider";
import LinkProvideSection from "./LoadingComponent";

let profile = "";

async function postImage({ image, description }) {
  const formData = new FormData();
  formData.append("image", image);
  formData.append("description", description);

  const result = await axios.post(
    "https://snapfolio-server.onrender.com/uploadprofilepic/",
    formData,
    {
      headers: { "Content-Type": "multipart/form-data" },
    }
  );
  profile = `https://snapfolioprofilepics.s3.amazonaws.com/${result.data.imagePath}`;
  // console.log(profile);
  return result.data;
}

export default function Form_ProfilePic() {
  const { currentForm, setCurrentForm, userData, setUserData } =
    useUserInfoCollections();
  const [loading, setLoading] = useState(false);

  const [file, setFile] = useState();
  const [description, setDescription] = useState("");
  const [images, setImages] = useState([]);

  const submit = async (event) => {
    event.preventDefault();
    setLoading(true);
    const result = await postImage({ image: file, description });
    setImages([result.image, ...images]);
    await setUserData((prevData) => ({
      ...prevData,
      about: {
        ...prevData.about,
        profile: profile,
      },
    }));
    // console.log(userData);
    setLoading(false);
    setCurrentForm("educationSection");
  };

  const fileSelected = (event) => {
    const file = event.target.files[0];
    setFile(file);
  };

  return (
    <>
      {loading === false ? (
        <form onSubmit={submit} className=" w-full">
          <div className="border mt-20 sm:mt-10 p-5 mb-4 border-[#dec9ff5f] shadow-[#eeeeee57] shadow rounded relative">
            <h1 className=" absolute top-[-12px] text-sm bg-white text-gray-300">
              Profile Picture
            </h1>

            <div className="  mb-3">
              <label
                htmlFor="description"
                className="block text-sm  text-gray-500"
              >
                Insert your Profile Picture
              </label>
              <div className=" h-40 border border-gray-300 rounded shadow-sm focus:ring-indigo-500 focus:border-indigo-500 hover:border-indigo-400 justify-end flex items-end">
                <input
                  name="profile"
                  type="file"
                  accept="image/*"
                  className=" block resize-none w-full px-3 py-1  focus:outline-none  sm:text-sm"
                  placeholder="Please remove background of you Picture"
                  autoComplete="name"
                  onChange={fileSelected}
                />
              </div>
              <input
                className=" hidden"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                type="text"
              ></input>
            </div>
            <div className="w-full flex justify-end">
              <button className="py-1 mt-2 w-full border border-indigo-400 text-white hover:bg-indigo-700 bg-indigo-500 rounded px-8 ">
                Next
              </button>
            </div>
          </div>
        </form>
      ) : (
        <LinkProvideSection />
      )}
    </>
  );
}
