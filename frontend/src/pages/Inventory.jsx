import React from "react";
import {
  Box,
  Heading,
  Text,
  Button,
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
} from "@chakra-ui/react";

export const Inventory = () => {
  // Dummy data for illustration purposes
  const inventoryData = [
    {
      id: 1,
      make: "Honda",
      model: "City",
      year: 2015,
      price: "$10,000",
    },
    {
      id: 2,
      make: "Toyota",
      model: "Corolla",
      year: 2018,
      price: "$12,500",
    },
    // Add more data as needed
  ];

  return (
    <Box p={4}>
      <Heading size="lg">Inventory</Heading>
      <Text mt={4} mb={2}>
        Your Second-Hand Car Inventory:
      </Text>
      <Table variant="striped" colorScheme="gray">
        <Thead>
          <Tr>
            <Th>ID</Th>
            <Th>Make</Th>
            <Th>Model</Th>
            <Th>Year</Th>
            <Th>Price</Th>
            <Th>Action</Th>
          </Tr>
        </Thead>
        <Tbody>
          {inventoryData.map((car) => (
            <Tr key={car.id}>
              <Td>{car.id}</Td>
              <Td>{car.make}</Td>
              <Td>{car.model}</Td>
              <Td>{car.year}</Td>
              <Td>{car.price}</Td>
              <Td>
                <Button size="sm" colorScheme="blue" mr={2}>
                  Edit
                </Button>
                <Button size="sm" colorScheme="red">
                  Delete
                </Button>
              </Td>
            </Tr>
          ))}
        </Tbody>
      </Table>
    </Box>
  );
};
