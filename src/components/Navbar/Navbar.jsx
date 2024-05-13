import khanaApp from "../../assets/khanaApp.png"
import {
    Box,
    Flex,
    useColorModeValue,
    Image,
    Heading,
  } from '@chakra-ui/react';
 
  
  export function Navbar() {
  
    return (
      <Box>
        <Flex
          bg={useColorModeValue('white', 'gray.800')}
          color={useColorModeValue('gray.600', 'white')}
          minH={'60px'}
          py={{ base: 2 }}
          px={{ base: 4 }}
          borderBottom={1}
          borderStyle={'solid'}
          align={'center'}>
          
          <Flex flex={{ base: 1 }}>
            <Image boxSize='50px' src={khanaApp}/>
            <Heading as='h2' size='xl'>KHAANA KHAJANA</Heading>
            <Heading as='h6' size='md'>Dil Se...</Heading>
          </Flex>
  
          
        </Flex>
  
        
      </Box>
    );
  }
  
  