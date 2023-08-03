import React, { useEffect, useState } from "react";
import axios from 'axios'
import {
  SimpleGrid,
  Box,
  Card,
  Image,
  Stack,
  Heading,
  Text,
  Divider,
  Button,
  ButtonGroup,
  CardBody,
  CardFooter,
} from "@chakra-ui/react";

function getData(){
  return axios.get("https://newsapi.org/v2/everything?q=bitcoin&apiKey=92b256ea57174afdb6dac3356ce54565")
  
}
const News = () => {
  const [data, setData] = useState([]);
// useEffect(()=>{
//         getData()
//         .then((res)=>{
//             return res.json()
//         })
//         .then((res)=>{
//             setData(res.data)
//             console.log(data)
//         })
//     },[])

  const fetchData = async () => {
    axios.get("https://newsapi.org/v2/everything?q=bitcoin&apiKey=92b256ea57174afdb6dac3356ce54565")
      // "https://newsapi.org/v2/everything?q=tesla&from=2023-07-02&sortBy=publishedAt&apiKey=92b256ea57174afdb6dac3356ce54565"
  .then((res)=>{
    console.log(res.data)
    setData(res.data)
  })
  .catch((err)=>{
    console.log(err)
  })
  };
  // useEffect(() => {
  //   fetchData();
  // }, []);
  return (
    <Box border="1px" color="gray.400" w="100%">
     {/* {((el)=>{
      return( */}
      <>
 
      
          <SimpleGrid columns={[1, 2, 2]} spacing="40px">
            <Card maxW="sm">
              <CardBody>
                <Image
                  src="https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
                  alt="Green double couch with wooden legs"
                  borderRadius="lg"
                />
                <Stack mt="6" spacing="3">
                  <Heading size="md">Living room Sofa</Heading>
                  <Text>
                    This sofa is perfect for modern tropical spaces, baroque
                    inspired spaces, earthy toned spaces and for people who love
                    a chic design with a sprinkle of vintage design.
                  </Text>
                  <Text color="blue.600" fontSize="2xl">
                    $450
                  </Text>
                </Stack>
              </CardBody>
              <Divider />
              <CardFooter>
                <ButtonGroup spacing="2">
                  <Button variant="solid" colorScheme="blue">
                    Buy now
                  </Button>
                  <Button variant="ghost" colorScheme="blue">
                    Add to cart
                  </Button>
                </ButtonGroup>
              </CardFooter>
            </Card>
          </SimpleGrid>
          </>
          {/* )})} */}
        
    </Box>
  );
};

export default News;
