import { Flex,Tab, TabList, TabPanel, TabPanels, Tabs } from "@chakra-ui/react";
import React from "react";
import { Aromaticbar } from "../AromaticBar/Aromaticbar";
import { DataTable } from "../DataTable/DataTable";

export const MainSection = () => {
  return (
    <Flex width="100%" justifyContent="center" margin="auto" marginTop="5%">
      <Tabs variant="unstyled" width="100%" >
        <TabList>
          <Tab _selected={{ color: "white", bg: "blue.500" }} width="50%">AROMATIC BAR</Tab>
          <Tab _selected={{ color: "white", bg: "green.400" }} width="50%">DATA TABLE</Tab>
        </TabList>
        <TabPanels>
          <TabPanel>
            <Aromaticbar/>
          </TabPanel>
          <TabPanel>
            <DataTable/>
          </TabPanel>
        </TabPanels>
      </Tabs>
    </Flex>
  );
};
