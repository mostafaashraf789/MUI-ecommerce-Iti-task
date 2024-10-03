import {
  Grid,
  Card,
  CardContent,
  CardMedia,
  Typography,
  Box,
} from "@mui/material";

// Import all images from assets
import imgOne from "../../assets/Img1.jpg";
import imgTwo from "../../assets/Img2.jpg";
import imgThree from "../../assets/Img3.jpg";
import imgFour from "../../assets/Img4.jpg";
import imgFive from "../../assets/Img5.jpg";
import imgSix from "../../assets/Img6.jpg";
import imgSeven from "../../assets/Img7.jpg";
import imgEight from "../../assets/Img8.jpg";
import imgNine from "../../assets/Img9.jpg";
import imgTen from "../../assets/Img10.jpg";
import imgEleven from "../../assets/Img11.jpg";
import imgTwelve from "../../assets/Img12.jpg";
import imgThirteen from "../../assets/Img13.jpg";
import imgFourteen from "../../assets/Img14.jpg";
import imgFifteen from "../../assets/Img15.jpg";
import imgSixteen from "../../assets/Img16.jpg";

const products = [
  { id: 1, name: "Product One", img: imgOne },
  { id: 2, name: "Product Two", img: imgTwo },
  { id: 3, name: "Product Three", img: imgThree },
  { id: 4, name: "Product Four", img: imgFour },
  { id: 5, name: "Product Five", img: imgFive },
  { id: 6, name: "Product Six", img: imgSix },
  { id: 7, name: "Product Seven", img: imgSeven },
  { id: 8, name: "Product Eight", img: imgEight },
  { id: 9, name: "Product Nine", img: imgNine },
  { id: 10, name: "Product Ten", img: imgTen },
  { id: 11, name: "Product Eleven", img: imgEleven },
  { id: 12, name: "Product Twelve", img: imgTwelve },
  { id: 13, name: "Product Thirteen", img: imgThirteen },
  { id: 14, name: "Product Fourteen", img: imgFourteen },
  { id: 15, name: "Product Fifteen", img: imgFifteen },
  { id: 16, name: "Product Sixteen", img: imgSixteen },
];

const ShopProducts = () => {
  return (
    <Box sx={{ padding: "16px" }}>
      <Typography variant="h4" fontWeight="bold" gutterBottom>
        SHOP BY CATEGORY
      </Typography>

      <Grid container spacing={2}>
        {products.map((product) => (
          <Grid item xs={6} sm={4} md={3} key={product.id}>
            <Card sx={{ backgroundColor: "#f5f5f5", textAlign: "center" }}>
              <CardMedia
                component="img"
                image={product.img}
                alt={product.name}
                sx={{
                  height: "200px",
                  width: "auto",
                  maxWidth: "100%",
                  margin: "0 auto",
                }}
              />
              <CardContent>
                <Typography variant="h6" component="div">
                  {product.name}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default ShopProducts;
