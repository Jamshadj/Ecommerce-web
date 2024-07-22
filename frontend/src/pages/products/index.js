import { Typography, Grid } from '@mui/material';
import Layout from '../../components/Layout';
import ProductCard from '../../components/ProductCard';
import { useEffect, useState } from 'react';
import axiosInstance from '../../utils/axiosInstance';

const Products = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axiosInstance.get('/products');
        setProducts(response.data);
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    };

    fetchProducts();
  }, []);

  return (
    <Layout>
      <Typography variant="h4" gutterBottom>
        All Products
      </Typography>
      <Grid container spacing={3}>
        {products.map(product => (
          <Grid item key={product._id} xs={12} sm={6} md={4}>
            <ProductCard product={product} />
          </Grid>
        ))}
      </Grid>
    </Layout>
  );
};

export default Products;
