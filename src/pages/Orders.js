import React from 'react';
import { Link } from 'react-router-dom';
import { AiOutlineEye } from 'react-icons/ai';
import { Box, Table, Thead, Tbody, Tr, Th, Td, IconButton, Text, HStack, Button } from '@chakra-ui/react';

const Orders = () => {
  const arr = [1555555555555555555, 2, 3, 4, 5, 6, 7, 8, 9,10];

  // Pagination logic
  const pageSize = 10; // Number of items per page
  const [currentPage, setCurrentPage] = React.useState(1);
  const indexOfLastItem = currentPage * pageSize;
  const indexOfFirstItem = indexOfLastItem - pageSize;
  const currentItems = arr.slice(indexOfFirstItem, indexOfLastItem);

  const totalPages = Math.ceil(arr.length / pageSize);

  const handleNext = () => {
    setCurrentPage(currentPage + 1);
  };

  const handlePrev = () => {
    setCurrentPage(currentPage - 1);
  };

  return (
    <Box p={{ base: "1rem", md: "0rem 15rem" }}>
      <Box textAlign="center" mb="1rem">
        <Text fontSize="xl" fontWeight="500" mb="1rem" letterSpacing={1}>MY ORDERS</Text>
      </Box>
      <Box className='tableClass' display="flex" justifyContent="center" alignItems="center" flexDirection="column">
        <Table variant="striped" colorScheme="gray" size="sm" maxWidth="100%">
          <Thead>
            <Tr>
              <Th>Id</Th>
              <Th>Quantity</Th>
              <Th>Discount</Th>
              <Th>Amount</Th>
              <Th>Status</Th>
              <Th>Action</Th>
            </Tr>
          </Thead>
          <Tbody>
            {currentItems.map((i, index) => (
              <Tr key={index}>
                <Td>{i}</Td>
                <Td>50</Td>
                <Td>2</Td>
                <Td>₹2000</Td>
                <Td>Processing</Td>
                <Td>
                  <Link to={`/order/${i}`}>
                    <IconButton
                      aria-label="View Order"
                      icon={<AiOutlineEye />}
                      size="sm"
                      colorScheme="blue"
                    />
                  </Link>
                </Td>
              </Tr>
            ))}
          </Tbody>
        </Table>
        {/* Pagination - Display if more than 8 items */}
        {arr.length > pageSize && (
          <HStack mt="2">
            <Button onClick={handlePrev} disabled={currentPage === 1} colorScheme="blue" size="sm">
              Prev
            </Button>
            <Text>{currentPage} of {totalPages}</Text>
            <Button onClick={handleNext} disabled={currentPage === totalPages} colorScheme="blue" size="sm">
              Next
            </Button>
          </HStack>
        )}
      </Box>
    </Box>
  );
};

export default Orders;
