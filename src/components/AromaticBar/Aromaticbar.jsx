import {
  Box,
  FormControl,
  FormLabel,
  Text,
  Input,
  Stack,
  Checkbox,
  CheckboxGroup,
  Button,
} from "@chakra-ui/react";
import React, { useState } from "react";

export const Aromaticbar = () => {
    const [data,setData]=useState({
        name:"",
        email:"",
        phone:"",
        a1:"",
        a2:"",
        a3:"",
        a4:""
    })
  return (
    <Box width="80%" margin="auto">
      <Text fontSize="2xl">
        {" "}
        We are committed to providing you with the best dining experience
        possible, so we welcome your comments. Please fill out this
        questionaire. <br />
        <span>Thank you.</span>
      </Text>
      <form>
        <FormControl isRequired>
          <FormLabel>Customer Name</FormLabel>
          <Input placeholder="Customer Name" value={data.name} />
        </FormControl>
        <FormControl isRequired>
          <FormLabel>Email</FormLabel>
          <Input placeholder="Email" value={data.email}/>
        </FormControl>
        <FormControl isRequired>
          <FormLabel>Phone</FormLabel>
          <Input placeholder="Phone" value={data.phone} />
        </FormControl>
        <FormControl isRequired>
          <FormLabel>
            {" "}
            Please rate the quality of the service you received from your host
          </FormLabel>
          <CheckboxGroup
            colorScheme="green"
            value={data.a1}
          >
            <Stack spacing={5} direction="row">
              <Checkbox>Excellent</Checkbox>
              <Checkbox>Good</Checkbox>
              <Checkbox>Fair</Checkbox>
              <Checkbox>Bad</Checkbox>
            </Stack>
          </CheckboxGroup>
        </FormControl>
        <FormControl isRequired>
          <FormLabel>
            {" "}
            Please rate the quality of your beverage.
          </FormLabel>
          <CheckboxGroup
            colorScheme="green"
            value={data.a2}
          >
            <Stack spacing={5} direction="row">
              <Checkbox >Excellent</Checkbox>
              <Checkbox >Good</Checkbox>
              <Checkbox >Fair</Checkbox>
              <Checkbox >Bad</Checkbox>
            </Stack>
          </CheckboxGroup>
        </FormControl>
        <FormControl isRequired>
          <FormLabel>
            {" "}
            Was our restaurant clean?
          </FormLabel>
          <CheckboxGroup
            colorScheme="green"
            value={data.a3}
          >
            <Stack spacing={5} direction="row">
              <Checkbox >Excellent</Checkbox>
              <Checkbox >Good</Checkbox>
              <Checkbox >Fair</Checkbox>
              <Checkbox >Bad</Checkbox>
            </Stack>
          </CheckboxGroup>
        </FormControl>
        <FormControl isRequired>
          <FormLabel>
            {" "}
            Please rate your overall dining experience.
          </FormLabel>
          <CheckboxGroup
            colorScheme="green"
            value={data.a4}
          >
            <Stack spacing={5} direction="row">
              <Checkbox >Excellent</Checkbox>
              <Checkbox >Good</Checkbox>
              <Checkbox >Fair</Checkbox>
              <Checkbox >Bad</Checkbox>
            </Stack>
          </CheckboxGroup>
        </FormControl>
       <Button colorScheme="blue">Submit</Button>


        

      </form>
    </Box>
  );
};
