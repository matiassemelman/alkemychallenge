// Components

import {
  Header,
  Form,
  Label,
  Input,
  Button,
  LoginPageContainer,
} from "./styled";

// Libraries
import axios from "axios";
import Swal from "sweetalert2";
import "animate.css";

// Hooks
import { useNavigate } from "react-router-dom";

export const Login = () => {
  const navigate = useNavigate();

  const submitHandler = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;

    const emailRegex =
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    if (email === "" || password === "") {
      Swal.fire({
        icon: "error",
        timer: 2000,
        timerProgressBar: true,
        title: "Fields cannot be empty",
        showClass: {
          popup: "animate__animated animate__fadeInDown",
        },
        hideClass: {
          popup: "animate__animated animate__fadeOutDown",
        },
      });
    }

    if (email !== "" && !emailRegex.test(email)) {
      Swal.fire({
        icon: "error",
        timer: 2000,
        timerProgressBar: true,
        title: "Invalid email format",
        showClass: {
          popup: "animate__animated animate__fadeInDown",
        },
        hideClass: {
          popup: "animate__animated animate__fadeOutDown",
        },
      });
    }
    if (email !== "challenge@alkemy.org" && password !== "react") {
      console.log("Wrong credentials");
    }
    axios
      .post("http://challenge-react.alkemy.org", { email, password })
      .then((res) => {
        const token = res.data.token;
        localStorage.setItem("token", token);
        Swal.fire({
          icon: "success",
          timer: 2000,
          timerProgressBar: true,
          title: "Logged in",
          showClass: {
            popup: "animate__animated animate__fadeInDown",
          },
          hideClass: {
            popup: "animate__animated animate__fadeOutDown",
          },
        });
        navigate("/list", { replace: true });
      });
  };

  // RENDER ====================================================
  return (
    <LoginPageContainer>
      <Form onSubmit={submitHandler}>
      <Header>Log In</Header>

        <Label htmlFor="email">
          Email
          <br />
          <Input type="email" name="email" id="email" />
        </Label>
        <br />
        <Label htmlFor="password">
          Password
          <br />
          <Input type="password" name="password" id="password" />
        </Label>
        <br />
        <Button type="submit" green>Ingresar</Button>
        <Button type="reset" blue>Reset</Button>

      </Form>
    </LoginPageContainer>
  );
};
