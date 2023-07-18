import React from 'react';
import { Box, Flex, Heading, Button } from '@chakra-ui/react';
import { Link } from 'react-router-dom';

export const Home = () => {
  return (
    <Box>
      <Flex p={"4"}  bg="yellow.500"  justifyContent="space-between" alignItems="center">
        <Heading size="lg">buycars.com</Heading>
        <Flex>
          <Button as={Link} to="/login" colorScheme="blue" mr={2}>
            Login
          </Button>
          <Button as={Link} to="/signup" colorScheme="blue" variant="outline">
            Sign Up
          </Button>
        </Flex>
      </Flex>
      <Box mt={8}>
        <Heading size="xl">Welcome to buycars.com</Heading>
        <Box mt={4}>
          <p>Find the perfect second-hand car for you.</p>
          <section>
            <h2>About Us</h2>
            <p>
              buycars.com is a marketplace for second-hand cars. Our platform connects dealers selling second-hand cars with buyers looking for their perfect vehicle. With a wide range of models and specifications available, you can find the ideal car that fits your needs and budget.
            </p>
            <p>
              Whether you're a dealer looking to sell your inventory or a buyer searching for a reliable used car, buycars.com provides a seamless and convenient experience. Sign up today to start exploring our extensive inventory and make your next car purchase hassle-free.
            </p>
          </section>
        </Box>
      </Box>
    </Box>
  );
};
