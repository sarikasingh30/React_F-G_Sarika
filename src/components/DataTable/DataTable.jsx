import {
  Box,
  Table,
  TableCaption,
  TableContainer,
  Tbody,
  Td,

  Th,
  Thead,
  Heading,
  Tr,
} from "@chakra-ui/react";
import "./DataTable.css"
import React, { useEffect, useState } from "react";

export const DataTable = () => {
  const [feedbacks, setFeedbacks] = useState([] );
  useEffect(() => {
    const items = JSON.parse(localStorage.getItem("fullData"));
    if (items) {
     setFeedbacks(items);
    }
  }, []);
  return (
    <Box width="100%" margin="auto"  marginTop="4%">
      {feedbacks.length>0?<TableContainer>
        <Table variant="striped" colorScheme="blue">
          <TableCaption>Here Are Some Feedbacks</TableCaption>
          <Thead className="fadeInBack">
            <Tr>
              <Th>Customer Name</Th>
              <Th>Email</Th>
              <Th>Phone Number</Th>
              <Th>Service Rating</Th>
              <Th>Beverage Rating</Th>
              <Th>Cleanliness Rating</Th>
              <Th>Overall Dining Rating</Th>
            </Tr>
          </Thead>
          <Tbody>
            {feedbacks?.map((el,index)=>{
              return<Tr key={el.email}>
              <Td textAlign="center">{el.name}</Td>
              <Td textAlign="center">{el.email}</Td>
              <Td textAlign="center">{el.phone}</Td>
              <Td textAlign="center">{el.a1}</Td>
              <Td textAlign="center">{el.a2}</Td>
              <Td textAlign="center">{el.a3}</Td>
              <Td textAlign="center">{el.a4}</Td>
            </Tr>
            })}
          </Tbody>
        </Table>
      </TableContainer>:<Heading as="h1" className="shake-heading">OOPs No Data!.......</Heading>}
    </Box>
  );
};
