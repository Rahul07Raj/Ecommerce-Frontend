import { useEffect, useState } from "react";
import ProductCard from "../components/ProductCard";
import toast from "react-hot-toast";
import {Link} from 'react-router-dom';

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
} from "@chakra-ui/react";
import api from "../api/api";

const Search = () => {
  // const {
  //   data: categoriesResponse,
  //   isLoading: loadingCategories,
  //   isError,
  //   error,
  // } = useCategoriesQuery('');

  const [search, setSearch] = useState("");
  const [sort, setSort] = useState("");
  const [maxPrice, setMaxPrice] = useState(100000);
  const [category, setCategory] = useState("");
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [allProducts, setAllProducts] = useState([]);
  const [categoryList, setCategoryList] = useState([]);

  const getProducts = async () => {
    try {
      const response = await api.get("/product/all", {
        params: {
          search,
          maxPrice,
          category,
          sort,
          page,
        },
      });
      setAllProducts(response.data.products);
      setTotalPages(response.data.totalPage);
    } catch (err) {
      console.error("Error fetching products:", err);
    }
  };

  useEffect(() => {
    getProducts();
  }, [search, sort, maxPrice, category, page]);

  const handleSearch = async () => {
    try {
      const response = await api.get("/product/all", {
        params: {
          search,
          category, // Assuming category is also a state variable
          maxPrice, // Assuming price is also a state variable
        },
      });
      setAllProducts(response.data.products);
      setTotalPages(response.data.totalPage);
    } catch (err) {
      console.error("Error fetching products:", err);
    }
  };

  const handleCategory = async()=>{
    try{
     const response =  await api.get("/product/categories");
     console.log("re",response)
     setCategoryList(response.data.categories);
    }catch(err){
      console.log("err",err);
    }
  }

  useEffect(()=>{
   handleCategory();
  },[])

  useEffect(() => {
    handleSearch();
  }, [search]);

  const handleSortChange = (e) => {
    setSort(e.target.value);
  };
  const handleCategoryChange = (e) => {
    setCategory(e.target.value);
  };
  const handlePriceChange = (e) => {
    setMaxPrice(e.target.value);
  };

  const isPrevPage = page > 1;
  const isNextPage = page < totalPages;

  // const isPrevPage = page > 1;
  // const isNextPage = page < 4;
  return (
    <Container maxW="90vw">
      <Stack direction="row" spacing={8}>
        <Box flex="1" shadow="lg" rounded="md" p={7} h={"80vh"}>
          <FormLabel fontSize={"1.5rem"} fontWeight={400}>
            FILTERS
          </FormLabel>
          <Stack spacing={4}>
            <FormControl>
              <FormLabel>Sort</FormLabel>
              <Select value={sort} onChange={handleSortChange}>
                <option value="">None</option>
                <option value="asc">Price (Low to High)</option>
                <option value="dsc">Price (High to Low)</option>
              </Select>
            </FormControl>

            <FormControl>
              <FormLabel>Max Price: {maxPrice || ""}</FormLabel>
              <Slider
                aria-label="max-price"
                value={maxPrice}
                min={100}
                max={100000}
                // onChange={handlePriceChange}
              >
                <SliderTrack>
                  <SliderFilledTrack />
                </SliderTrack>
                <SliderThumb />
              </Slider>
            </FormControl>

            <FormControl>
              <FormLabel>Category</FormLabel>
              <Select
                value={category}
                onChange={handleCategoryChange}
              >
            <option value="">ALL</option>
               {
                categoryList&& categoryList.map((data)=>
                   <option key={data} value={data}>{data}</option>
                )
               }
                {/* ))} */}
              </Select>
            </FormControl>
          </Stack>
        </Box>
        <Box flex="4">
          <h1 style={{ fontWeight: "300", fontSize: "2rem" }}>PRODUCTS</h1>
          <Stack spacing={4} p={4}>
            <FormControl>
              <Input
                type="text"
                placeholder="Search by name..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
              />
            </FormControl>

            <Box
              display={"flex"}
              flexWrap={"wrap"}
              gap={"2rem"}
              // justifyContent={"center"}
              // alignContent={"center"}
            >
              {allProducts &&
                allProducts.map((data) => (
                  <Link to={`/product/${data._id}`}>
                  <ProductCard
                    //  display: 'flex', flexWrap: 'wrap',gap: '20px',justifyContent:"center",alignContent:"center"
                    key={data._id}
                    name={data.name}
                    price={data.price}
                    photo={`http://localhost:4000/${data.photo}`}
                  />
                    </Link>
                ))}
            </Box>

            {/* {searchedData && searchedData.totalPage > 1 && ( */}
            <Stack direction="row" justify="center" align="center" spacing={4}>
              <Button
                isDisabled={!isPrevPage}
                onClick={() => setPage((prev) => prev - 1)}
              >
                Prev
              </Button>
              <span>
                {page} of {totalPages}
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
