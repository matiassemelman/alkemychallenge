import { useNavigate } from "react-router-dom";
import { useEffect } from "react";


const List = () => {
  const navigate = useNavigate();
  let token = localStorage.getItem("token");


  useEffect(() => {
    !token && navigate("/", { replace: true })
  });



  return (
    <>
    <h2>Movie List</h2>
      
    </>
  );
};

export default List;