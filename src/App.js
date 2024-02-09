import "./App.css";
// import NavBar from "./components/NavBar";
// import About from "./components/About";
// import Education from "./components/Education";
// import Projects from "./components/Projects";
// import Experience from "./components/Experience";
// import Footer from "./components/Footer";
import Form from "./components/SimpleForm";
import Table from "./components/Table";
import { useEffect, useState } from "react";
import axios from "axios";

function App() {
  const [data1, setData1] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  const initialState = {
    id: "",
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
  };
  const [formData, setFormData] = useState(initialState);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://linkhub-datatransfer-service.onrender.com/userData"
        );

        const result = response.data;

        setData1(result);
      } catch (error) {
        console.error("Error fetching data:", error);
        setError(error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) {
    return (
      <div className="flex h-screen justify-center items-center">
        <p className="h-5 border rounded-full w-5 sm:w-6 sm:h-6 loading"></p>
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

  return (
    <div className="font-kanit overflow-hidden w-full items-center justify-center">
      <div className="flex gap-5 p-10">
        {" "}
        <Form
          data1={data1}
          setData1={setData1}
          formData={formData}
          setFormData={setFormData}
          initialState={initialState}
        />
        <Table
          data1={data1}
          setData1={setData1}
          formData={formData}
          setFormData={setFormData}
        />
      </div>
    </div>
  );
}

export default App;
