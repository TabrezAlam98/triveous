import React, { useEffect, useState } from "react";
import axios from 'axios'
import { AiOutlineHeart } from 'react-icons/ai';
import {
  SimpleGrid,
  Box,
  Card,
  Image,
  Stack,
  Heading,
  Text,
  Button,
  CardBody,
  Flex,
  Spacer,
} from "@chakra-ui/react";


const News = () => {
  const [data, setData] = useState([]);


  const fetchData =  () => {
    axios.get("https://newsapi.org/v2/everything?q=bitcoin&apiKey=92b256ea57174afdb6dac3356ce54565")
      // "https://newsapi.org/v2/everything?q=tesla&from=2023-07-02&sortBy=publishedAt&apiKey=92b256ea57174afdb6dac3356ce54565"
  .then((res)=>{
    
    setData(res.data.articles)
    
  })
  .catch((err)=>{
    console.log(err)
  })
  };
  useEffect(() => {
    fetchData();
  }, []);

  return (
    <Box  w="100%">
    
      <>

      
          <SimpleGrid columns={[1, 2, 2]} w="100%" spacing="10px">
          {data.map((el)=>{
      return(
            <Card >
              <CardBody>
                <Image
                  src={el.urlToImage}
                  alt={el.author}
                  borderRadius="md"
                />
                <Flex>
                <Text color="blue.600" mt="3" textAlign="left">
                    {el.publishedAt}
                  </Text>
                  <Spacer/>
                  <Text cursor="pointer" color="red.500" mt="5">< AiOutlineHeart/></Text>
                </Flex>
                
                <Stack mt="6" spacing="3">
                  <Heading size="xs"  textAlign="left">{el.title}</Heading>
                  <Text  textAlign="left">
                    {el.description}
                  </Text>
                  
                </Stack>
                <Text color="blue.300" textAlign="left"  mt="2"><a href={el.url}><u>full article</u></a></Text>
              </CardBody>
              
               
               
            </Card>
            )})}
          </SimpleGrid>
          </>
          
        
    </Box>
  );
};

export default News;
