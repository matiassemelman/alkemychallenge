import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

import {CardsGrid, Card} from './styled'

const List = () => {
  const navigate = useNavigate();
  let token = localStorage.getItem("token");


  useEffect(() => {
    !token && navigate("/", { replace: true })
  });



  return (
    <CardsGrid>
    <Card/>
    <Card/>

      
    </CardsGrid>
  );
};

export default List;