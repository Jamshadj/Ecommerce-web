import dynamic from 'next/dynamic';
import { Grid } from '@mui/material';
import Layout from '../components/Layout';
import CategoryList from '@/components/CategoryList';
import axiosInstance from '../utils/axiosInstance.js';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';

// Dynamically import ProductCard
const ProductCard = dynamic(() => import('../components/ProductCard'), {
  ssr: false, // This will disable server-side rendering for this component
});

const Home = ({ initialProducts }) => {
  const router = useRouter();
  const { query } = router;
  const [products, setProducts] = useState(initialProducts);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axiosInstance.get('/products', {
          params: query,
        });
        setProducts(response.data);
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    };

    fetchProducts();
  }, [query]); // Refetch products whenever query changes

  return (
    <Layout>
      <CategoryList />
      <Grid container spacing={3}>
        {products?.map(product => (
          <Grid item key={product._id} xs={12} sm={6} md={4} lg={3}>
            <ProductCard product={product} />
          </Grid>
        ))}
      </Grid>
    </Layout>
  );
};

// Fetch initial data based on query parameters
export async function getServerSideProps(context) {
  const { query } = context;

  try {
    const response = await axiosInstance.get('/products', {
      params: query,
    });

    return {
      props: {
        initialProducts: response.data,
      },
    };
  } catch (error) {
    console.error('Error fetching products:', error);
    return {
      props: {
        initialProducts: [],
      },
    };
  }
}

export default Home;
