import { useState } from 'react';
import ProductCard from '../components/ProductCard';
import toast from 'react-hot-toast';

import {
  Box,
  Button,
  Container,
  FormControl,
  FormLabel,
  Input,
  Select,
  Slider,
  SliderTrack,
  SliderFilledTrack,
  SliderThumb,
  Stack,
} from '@chakra-ui/react';

const Search = () => {
  // const {
  //   data: categoriesResponse,
  //   isLoading: loadingCategories,
  //   isError,
  //   error,
  // } = useCategoriesQuery('');

  
  const [search, setSearch] = useState('');
  const [sort, setSort] = useState('');
  const [maxPrice, setMaxPrice] = useState(100000);
  const [category, setCategory] = useState('');
  const [page, setPage] = useState(1);
  
  const isPrevPage = page>1;
  const isNextPage = page<4;
  return (
    <Container maxW="90vw">
      <Stack direction="row" spacing={8}>
        <Box flex="1" shadow="lg" rounded="md" p={7} h={"80vh"}>
        <FormLabel fontSize={"1.5rem"} fontWeight={400}>FILTERS</FormLabel>
          <Stack spacing={4} >
            <FormControl>
              <FormLabel>Sort</FormLabel>
              <Select value={sort} onChange={(e) => setSort(e.target.value)}>
                <option value="">None</option>
                <option value="asc">Price (Low to High)</option>
                <option value="dsc">Price (High to Low)</option>
              </Select>
            </FormControl>

            <FormControl>
              <FormLabel>Max Price: {maxPrice || ''}</FormLabel>
              <Slider
                aria-label="max-price"
                value={maxPrice}
                min={100}
                max={100000}
                onChange={(value) => setMaxPrice(value)}
              >
                <SliderTrack>
                  <SliderFilledTrack />
                </SliderTrack>
                <SliderThumb />
              </Slider>
            </FormControl>

            <FormControl>
              <FormLabel>Category</FormLabel>
              <Select value={category} onChange={(e) => setCategory(e.target.value)}>
                <option value="">ALL</option>
                {/* {!loadingCategories && */}
                  {/* categoriesResponse?.categories.map((i) => ( */}
                    <option>
                      {/* {i.toUpperCase()} */}
                      camera
                    </option>
                    <option>
                      {/* {i.toUpperCase()} */}
                      Laptop
                    </option>
                    <option>
                      {/* {i.toUpperCase()} */}
                      Guitar
                    </option>
                  {/* ))} */}
              </Select>
            </FormControl>
          </Stack>
        </Box>
        <Box flex="3">
        <h1 style={{fontWeight:"300",fontSize:"2rem"}}>PRODUCTS</h1>
          <Stack spacing={4} p={4}>
            <FormControl>
              <Input
                type="text"
                placeholder="Search by name..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
              />
            </FormControl>
            <ProductCard
              name="Sofa"
              price ="300" 
              photo="https://m.media-amazon.com/images/I/51ltGkq0m5L._SX679_.jpg"
            />
            {/* {searchedData && searchedData.totalPage > 1 && ( */}
              <Stack direction="row" justify="center" align="center" spacing={4}>
                <Button
                  isDisabled={!isPrevPage}
                  onClick={() => setPage((prev) => prev - 1)}
                >
                  Prev
                </Button>
                <span>
                  {page} of {4}
                </span>
                <Button
                  isDisabled={!isNextPage}
                  onClick={() => setPage((prev) => prev + 1)}
                >
                  Next
                </Button>
              </Stack>
            {/* )} */}
          </Stack>
        </Box>
      </Stack>
    </Container>
  );
};

export default Search;
