import {
  Box,
  FormControl,
  FormLabel,
  Text,
  Input,
  Stack,
  RadioGroup,
  Radio,
  Button,
  useToast,
} from "@chakra-ui/react";
import "./Aromaticbar.css"
import React from "react";
import { Content } from "./Content";
export const Aromaticbar = ({data,setData}) => {
  const toast = useToast();


  function handleChange(e) {
    setData({ ...data, [e.target.name]: e.target.value });
  }


  const handleRadioButton = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  // getting data from local storage
  let fullData=JSON.parse(localStorage.getItem("fullData"))||[]

  const handleSubmit = (e) => {
    e.preventDefault();
    let isValid=true
    for (const [key, value] of Object.entries(data)) {
      if (key === "email") {
        if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)){
          isValid=false
          toast({
            title: "Error...",
            description: "Enter Correct Email Address",
            status: "error",
            duration: 9000,
            isClosable: true,
          });
        }
      } else if (key === "phone") {
        if (
          !/^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/i.test(
            value
          )
        ){
        isValid=false
          toast({
            title: "Error...",
            description: "Enter Correct Phone Number",
            status: "error",
            duration: 9000,
            isClosable: true,
          });
        }
      }
    }
    if(isValid){
      toast({
        title: "Success...",
        description: "Thank you for completing the information",
        status: "success",
        duration: 9000,
        isClosable: true,
      });
    fullData=[...fullData,data]
    // console.log(fullData)
    localStorage.setItem(`fullData`, JSON.stringify(fullData))
    }
    setData({...data,name: "",
    email: "",
    phone: "",
    review: ""})
  }
  return (
    <Box width="60%" margin="auto">
      <Text fontSize="xl" className="color-cycle-text">
        {" "}
        We are committed to providing you with the best dining experience
        possible, so we welcome your comments. Please fill out this
        questionaire. <br />
        <span>Thank you.</span>
      </Text>
      <form onSubmit={handleSubmit}>
        <FormControl isRequired>
          <FormLabel>Customer Name</FormLabel>
          <Input
            placeholder="Customer Name"
            name="name"
            value={data.name}
            onChange={handleChange}
          />
        </FormControl>
        <FormControl isRequired>
          <FormLabel>Email</FormLabel>
          <Input
            placeholder="Email"
            name="email"
            value={data.email}
            onChange={handleChange}
          />
        </FormControl>
        <FormControl isRequired>
          <FormLabel>Phone Number</FormLabel>
          <Input
            placeholder="Mobile"
            type="number"
            name="phone"
            value={data.phone}
            onChange={handleChange}
          />
        </FormControl>
        <FormControl>
          <FormLabel>Add detailed review</FormLabel>
          <Input
            placeholder="Write here"
            name="review"
            value={data.review}
            onChange={handleChange}
          />
        </FormControl>
        {Content.inputs.map((ele) => {
          return (
            <FormControl isRequired key={ele?.name}>
              <FormLabel>{ele?.label}</FormLabel>
              <RadioGroup colorScheme="green" defaultValue="">
                <Stack spacing={5} direction="row">
                  <Radio
                    type="radio"
                    name={ele?.name}
                    value={Content?.options[0]}
                    onChange={handleRadioButton}
                  >
                    {Content?.options[0]}
                  </Radio>
                  <Radio
                    type="radio"
                    name={ele?.name}
                    value={Content?.options[1]}
                    onChange={handleRadioButton}
                  >
                    {Content?.options[1]}
                  </Radio>
                  <Radio
                    type="radio"
                    name={ele?.name}
                    value={Content?.options[2]}
                    onChange={handleRadioButton}
                  >
                    {Content?.options[2]}
                  </Radio>
                  <Radio
                    type="radio"
                    name={ele?.name}
                    value={Content?.options[3]}
                    onChange={handleRadioButton}
                  >
                    {Content?.options[3]}
                  </Radio>
                </Stack>
              </RadioGroup>
            </FormControl>
          );
        })}
        <Button colorScheme="blue" type="submit">
          Submit
        </Button>
      </form>
    </Box>
  );
};
