import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import Header from "./Header";
import Footer from "../Footer/Footer";

const List = () => {
  const navigate = useNavigate();
  let token = localStorage.getItem("token");


  useEffect(() => {
    !token && navigate("/", { replace: true })
  });



  return (
    <>
    <Header/>
    <h2>Movie List</h2>
    <Footer/>
      
    </>
  );
};

export default List;