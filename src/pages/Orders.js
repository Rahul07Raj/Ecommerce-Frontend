import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { AiOutlineEye } from 'react-icons/ai';
import { Box, Table, Thead, Tbody, Tr, Th, Td, IconButton, Text, HStack, Button } from '@chakra-ui/react';
import api from '../api/api';

const Orders = () => {
  const [orders, setOrders] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const pageSize = 10;

  const fetchOrders = async () => {
    try {
      const response = await api.get('/order/all');
      setOrders(response.data.orders);
    } catch (error) {
      console.error('Error fetching orders:', error);
    }
  };
  useEffect(() => {
    fetchOrders();
  }, []);

  // Pagination logic
  const indexOfLastItem = currentPage * pageSize;
  const indexOfFirstItem = indexOfLastItem - pageSize;
  const currentItems = orders.slice(indexOfFirstItem, indexOfLastItem);
  const totalPages = Math.ceil(orders.length / pageSize);

  const handleNext = () => {
    setCurrentPage(currentPage + 1);
  };

  const handlePrev = () => {
    setCurrentPage(currentPage - 1);
  };

  return (
    <Box p={{ base: '1rem', md: '0rem 15rem' }}>
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
            {currentItems.map(order => (
              <Tr key={order._id}>
                <Td>{order._id}</Td>
                <Td>{order.quantity}</Td>
                <Td>₹{order.discount}</Td>
                <Td>₹{order.total}</Td>
                <Td>{order.status}</Td>
                <Td>
                  <Link to={`/order/${order._id}`}>
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
        {orders.length > pageSize && (
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
