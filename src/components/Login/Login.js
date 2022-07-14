import { Header, Form, Label, Input, Button } from "./styled";

const submitHandler = (e) => {
  e.preventDefault();
  const email = e.target.email.value
  const password = e.target.password.value
  
  const emailRegex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/

  if (email === "" || password === "") {
    
    console.log('Fields cannot be empty')
  }

  if (email !== "" && !emailRegex.test(email)) {
    console.log('Invalid email format')
    
  }
  if (email !== "challenge@alkemy.org" && password !== "react") {
    console.log('Wrong credentials')
  }
  console.log('Logged in')




}

export const Login = () => {
  return (
    <>
      <Header>Log In</Header>
      <Form onSubmit={submitHandler}>
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
        <Button type="submit">Ingresar</Button>
        <Button type="reset">Reset</Button>
      </Form>
    </>
  );
};
