import { Box, Typography, Button, Grid } from "@mui/material";
import { ProductCard } from "../components/ProductCard";
export default function ProductSection({ products }) {
  return (
    <Grid container spacing={4} justifyContent="center">
      {products.length > 0 ? (
        products.map((product) => (
          <Grid item xs={12} sm={6} md={4} key={product.id}>
            <ProductCard product={product} />
          </Grid>
        ))
      ) : (
        <Typography align="center">There is some problem.</Typography>
      )}
    </Grid>
  );
}
