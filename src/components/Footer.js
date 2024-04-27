import {Box, Grid, Typography, Container, Button, Stack } from "@mui/material";
import Image from "next/image";
import FacebookIcon from '@mui/icons-material/Facebook';
import XIcon from '@mui/icons-material/X';
import InstagramIcon from '@mui/icons-material/Instagram';
import YouTubeIcon from '@mui/icons-material/YouTube';
import FeedIcon from '@mui/icons-material/Feed';
import LocationSearchingIcon from '@mui/icons-material/LocationSearching';

const footerMenu = ['নাগরিক সংবাদ', 'কিশোর আলো', 'বিজ্ঞানচিন্তা', 'প্রথম আলো ট্রাস্ট', 'বন্ধুসভা', 'চিরন্তন ১৯৭১', 'ইপেপার', 'প্রথমা', 'মোবাইল ভ্যাস'];

export const Footer = () => {
  return (
    <Container maxWidth="xl">
        <Box sx={{ borderTop: 1, borderBottom: 1, borderColor: 'grey.300' }}>
            <Image src="/images/prothomalologo.jpg" width={200} height={40} alt="Prothom Alo Logo" style={{marginTop: 25, marginBottom: 25}} />
            <Grid container style={{ marginBottom: 25}}>
                    {
                    footerMenu.map((footerMenu)=>(
                        <Grid item xs={4} md={2}>
                            <Button sx={{color: 'black'}}>{footerMenu}</Button>
                        </Grid>
                    ))
                }
            </Grid>
        </Box>

        <Box sx={{display: "flex", flexDirection: {xs: "column", md: "row"}, justifyContent: {xs: "center", md: "space-between"}}} style={{marginTop: 25, marginBottom: 25}}>
        <Box maxWidth={700} sx={{paddingBottom:{xs: 3, md: 0}}}>
                <Typography sx={{textAlign: "center", py:2}}>অনুসরণ করুন</Typography>
                <Stack direction="row" spacing={3} alignItems="flex-end" justifyContent="center" sx={{ fontSize: 40 }}>
                    <FacebookIcon sx={{ color: "#1877F2", fontSize: 30 }} />
                    <XIcon sx={{ color: "#1DA1F2", fontSize: 30 }} />
                    <InstagramIcon sx={{ color: "#5B51D8", fontSize: 30 }} />
                    <YouTubeIcon sx={{ color: "#FF0000", fontSize: 30 }} />
                    <FeedIcon sx={{ color: "#040487", fontSize: 30 }} />
                </Stack>
            </Box>

            <Box sx={{maxWidth:{xs: "1280", md: 700}, paddingTop:{xs: 3, md: 0}, borderTop: {xs: 2, md: 0}, borderColor: {xs: 'grey.300'}}}>
                <Typography sx={{textAlign: "center"}}>অনুসরণ করুন</Typography>
                <Stack direction="row" spacing={3} alignItems="center" justifyContent="center" sx={{ fontSize: 40 }}>
                    <Image src="/images/googleplay.png" width={160} height={50} alt="Prothom Alo Logo" style={{marginTop: 25, marginBottom: 25}} />
                    <Image src="/images/appstore.png" width={160} height={50} alt="Prothom Alo Logo" style={{marginTop: 25, marginBottom: 25}} />
                </Stack>
            </Box>
        </Box>

        <Box display="flex" flexWrap="wrap" gap={2} alignItems="center" justifyContent="center" sx={{ borderTop: 1, borderBottom: 1, borderColor: 'grey.300', py: 1 }}>
            <Typography>প্রথম আলো</Typography>
            <LocationSearchingIcon sx={{fontSize: 5 }}/>
            <Typography>বিজ্ঞাপন</Typography>
            <LocationSearchingIcon sx={{fontSize: 5 }} />
            <Typography>সার্কুলেশন</Typography>
            <LocationSearchingIcon sx={{fontSize: 5 }} />
            <Typography>শর্তাবলি ও নীতিমালা</Typography>
            <LocationSearchingIcon sx={{fontSize: 5 }} />
            <Typography>গোপনীয়তা নীতি</Typography>
            <LocationSearchingIcon sx={{fontSize: 5 }} />
            <Typography>যোগাযোগ</Typography>
        </Box>

        <Box sx={{ paddingTop: 2, paddingBottom: 3, textAlign: "center" }}>
            <Typography>স্বত্ব © ১৯৯৮-২০২৪ প্রথম আলো সম্পাদক ও প্রকাশক: মতিউর রহমান</Typography>
        </Box>

      </Container>
  )
}
