import Layout from "@/components/Layout";
import ProductDetails from "@/components/ProductDetail";
import axiosInstance from "@/utils/axiosInstance";

const ProductPage = ({ product }) => {
  return (
    <>
      <Layout>
        <ProductDetails product={product} />;
      </Layout>
    </>
  );
};

export async function getServerSideProps(context) {
  const { id } = context.params;
  try {
    const response = await axiosInstance.get(`/products/${id}`);
    const product = response.data;
    return {
      props: {
        product,
      },
    };
  } catch (error) {
    console.error("Error fetching product:", error);
    return {
      props: {
        product: {},
      },
    };
  }
}

export default ProductPage;
