import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import {CardsGrid} from './styled'
import Cards from "./cards/Cards";

const List = () => {
  const navigate = useNavigate();
  let token = localStorage.getItem("token");


  useEffect(() => {
    !token && navigate("/", { replace: true })
  });



  return (
    <CardsGrid>

      <Cards title="Hello"/>
      <Cards title="Hello"/>
      <Cards title="Hello"/>
      <Cards title="Hello"/>
      <Cards title="Hello"/>
      <Cards title="Hello"/>
    </CardsGrid>
  );
};

export default List;