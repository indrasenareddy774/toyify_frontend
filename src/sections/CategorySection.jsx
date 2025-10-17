import { Grid, Typography } from "@mui/material";
import { CategoryCard } from "../components/CategoryCard";

export default function CategorySection({ categories }) {
  return categories && categories.length > 0 ? (
    <Grid container spacing={4} justifyContent="center">
      {categories.map((category) => (
        <Grid item xs={12} sm={6} md={4} key={category.id}>
          <CategoryCard category={category} />
        </Grid>
      ))}
    </Grid>
  ) : (
    <Typography align="center">There is some problem.</Typography>
  );
}
