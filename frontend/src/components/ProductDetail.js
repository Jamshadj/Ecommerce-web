import { CardMedia, CardContent, Typography, Button, Grid, Container } from '@mui/material';

const ProductDetails = ({ product }) => {
   
  return (
    <Container maxWidth="lg" className="py-8">
      <Grid container spacing={4}>
        <Grid item xs={12} md={6}>
          <CardMedia
            component="img"
            alt={product.imageAlt}
            image={product.imageUrl}
            className="w-full h-auto object-cover"
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <CardContent>
            <Typography variant="h4" component="h1" gutterBottom>
              {product.name}
            </Typography>
            <Typography variant="h6" color="textSecondary" gutterBottom>
             ${product.price}
            </Typography>
            <Typography variant="body1" paragraph>
              {product.description}
            </Typography>
            <Typography variant="body2" color="textSecondary" paragraph>
              Category: {product.category}
            </Typography>
            <Button variant="contained" color="primary" size="large">
              Add to Cart
            </Button>
          </CardContent>
        </Grid>
      </Grid>
    </Container>
  );
};

export default ProductDetails;
