import React,{useState} from 'react'
import { Box, Button, Heading,Input ,Text} from '@chakra-ui/react'
import { Navigate, useNavigate } from "react-router-dom";

const Signup = () => {

  const [email,setEmai]=useState("")
  const [password,setPassword]=useState("")
  const [error,setError]=useState(false)
  const navigate=useNavigate()

  const payload={
    email,password
  }
  let userData=JSON.parse(localStorage.getItem("users")) || []
  const handleSubmit=(e)=>{
    e.preventDefault()
    if(!email){
      setError("Please fill the email")
      return;
    }
    if(!password){
      setError("Please fill the password")
      return;
    }
    
 userData.push(payload)
 alert("user added")
 setError(true)
 navigate("/login")
 localStorage.setItem('users',JSON.stringify(userData))
console.log(userData)
  }
  
  return (
   
    <Box w="40%"border='1px' borderColor='gray.400' m="auto" p="10" borderRadius="2xl">
      
      <Heading size="md" mb="10">Singup </Heading>
      <Input value={email} onChange={(e)=>setEmai(e.target.value)} type='email' required placeholder='Email' mb="5" />
      <Input value={password} onChange={(e)=>setPassword(e.target.value)} type='password' placeholder='Password' mb="5" />
      {error&&<Text color="red">{error}</Text>}
      <Button colorScheme='blue' w="60%" onClick={handleSubmit}>Signup</Button>

    </Box>
  )
}

export default Signup