import { Flex,Tab, TabList, TabPanel, TabPanels, Tabs } from "@chakra-ui/react";
import React,{useState,useEffect} from "react";
import { Aromaticbar } from "../AromaticBar/Aromaticbar";
import { DataTable } from "../DataTable/DataTable";

export const MainSection = () => {
  const [data, setData] = useState({
    name: "",
    email: "",
    phone: "",
    a1: "",
    a2: "",
    a3: "",
    a4: "",
    review: ""
  });
  const [feedbackData, setFeedbackData] = useState(JSON.parse(localStorage.getItem("fullData"))||[])
  useEffect(() => {
    let getData=()=>{
      let items = JSON.parse(localStorage.getItem("fullData"));
     if (items) {
      setFeedbackData(items);
     }
   }
    getData()
  },[setData,data]);

  return (
    <Flex width="100%" justifyContent="center" margin="auto" >
      <Tabs variant="unstyled" width="100%" >
        <TabList>
          <Tab _selected={{ color: "white", bg: "blue.500",fontWeight:"bold" }} width="50%">AROMATIC BAR</Tab>
          <Tab _selected={{ color: "white", bg: "blue.500", fontWeight:"bold" }} width="50%">DATA TABLE</Tab>
        </TabList>
        <TabPanels>
          <TabPanel>
            <Aromaticbar data={data} setData={setData} feedbackData={feedbackData} setFeedbackData={setFeedbackData}/>
          </TabPanel>
          <TabPanel>
            <DataTable feedbacks={feedbackData}/>
          </TabPanel>
        </TabPanels>
      </Tabs>
    </Flex>
  );
};
