import React, { useState } from "react";
import { Box, Button, Heading, Input,Text } from "@chakra-ui/react";
import { Navigate, useNavigate } from "react-router-dom";

const Signup = () => {
  const [email, setEmai] = useState("");
  const [password, setPassword] = useState("");
  const [error,setError]=useState(false)
  const navigate=useNavigate()

  let userData = JSON.parse(localStorage.getItem("users"));
  const handleLogin = (e) => {
    e.preventDefault();
    console.log(userData);
setError(true)
    if(!email){
      setError("Please fill the email")
      return;
    }
    if(!password){
      setError("Please fill the password")
      return;
    }
    for (let i = 0; i < userData.length; i++) {
      if (userData[i].email != email) {
        setError("wrong email")
        break;
      } else if (userData[i].password != password) {
        setError("wrong password")
        break;
      } else if (
        userData[i].email == email &&
        userData[i].password == password
      ) {
       alert("Logged in successfuly")
       navigate("/")
      } 
    }
  };

  return (
    <Box
      w="40%"
      border="1px"
      borderColor="gray.400"
      m="auto"
      p="10"
      borderRadius="2xl"
    >
      <Heading size="md" mb="10">
        Login{" "}
      </Heading>
      <Input
        value={email}
        onChange={(e) => setEmai(e.target.value)}
        type="email"
        required
        placeholder="Email"
        mb="5"
      />
      <Input
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        type="password"
        placeholder="Password"
        mb="5"
      />
      {error &&<Text>{error}</Text>}
      <Button colorScheme="blue" w="60%" onClick={handleLogin}>
        Login
      </Button>
    </Box>
  );
};

export default Signup;
