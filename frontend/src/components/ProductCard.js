import {
  Card,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
import Link from "next/link";

const ProductCard = ({ product }) => {
  return (
    <Card className="group relative">
      <Link href={`/products/${product._id}`} passHref>
        <CardMedia
          component="img"
          alt={product.imageAlt}
          image={product.imageUrl}
          className="h-48 w-48 object-cover object-center ml-auto mr-auto m-4 cursor-pointer"
          sx={{
            borderRadius: 1,
            height: { xs: 200, sm: 300, md: 400 },
            transition: 'opacity 0.3s',
            '&:hover': {
              opacity: 0.75,
            },
          }}
        />
      </Link>
      <CardContent>
        <Typography variant="h6" component="div">
          <Link href={`/products/${product._id}`} passHref>
            <span className="text-gray-700 hover:underline">{product.name}</span>
          </Link>
        </Typography>
        <Typography variant="body2" color="textSecondary">
          {product.color}
        </Typography>
        <Typography variant="body1" component="div">
          ${product.price}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default ProductCard;
