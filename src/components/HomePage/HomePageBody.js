import { Box, Container, Grid, Stack } from "@mui/material";
import NewsCard from "./NewsCard";
import NewsCardMain from "./NewsCardMain";


export default function HomePageBody() {
  return (
    <Container maxWidth="xl" sx={{py: 2}}>
        <Grid container>
            <Grid item xs={12} md={6} lg={3} sx={{ pr: 2, order: { xs: 2, lg: 1} }}>
                <NewsCard></NewsCard>
            </Grid>

            <Grid item xs={12} md={12} lg={6} sx={{borderLeft: { xs: 0, lg: 1}, borderRight: { xs: 0, lg: 1}, borderColor: "gray", px: { xs: 0, lg: 2}, order: { xs: 1, md: 1 }}}>
                <NewsCardMain></NewsCardMain>
            </Grid>

            <Grid item xs={12} md={6} lg={3} sx={{pl: 2, order: { xs: 3}}}>
                <NewsCard></NewsCard>
            </Grid>
        </Grid>
    </Container>
  )
}
