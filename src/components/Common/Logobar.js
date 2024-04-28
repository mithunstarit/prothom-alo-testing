import {Box, Grid, Typography, Container, Button, Stack } from "@mui/material";
import Image from "next/image";
import SearchIcon from '@mui/icons-material/Search';
import NewspaperIcon from '@mui/icons-material/Newspaper';
import LanguageIcon from '@mui/icons-material/Language';
import PersonIcon from '@mui/icons-material/Person';
import DehazeIcon from '@mui/icons-material/Dehaze';
import PlayCircleOutlineIcon from '@mui/icons-material/PlayCircleOutline';
import LocalSeeIcon from '@mui/icons-material/LocalSee';

const pages = ['সর্বশেষ', 'রাজনীতি', 'বাংলাদেশ', 'অপরাধ', 'বিশ্ব', 'বাণিজ্য', 'মতামত', 'খেলা', 'বিনোদন', 'চাকরি', 'জীবনযাপন'];

export const Logobar = () => {
  return (
    <>
        <Container maxWidth="xl" style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginTop: 20, marginBottom: 20 }}>
          <Box sx={{flexGrow: 1}}>
            <Image src="/images/prothom.png" width={275} height={50} alt="Prothom Alo Logo" />
          </Box>

          <Box sx={{ display: { xs: 'none', sm: 'none', md: 'block' }}}>
            <Grid container maxWidth={840} justifyContent="space-between" className="text-base">
              <Grid item xs={4}>
                <Box style={{ display: "flex", gap: 6, alignItems: "center", paddingLeft: 16 }}>
                  <Image src="/images/banana.webp" width={70} height={70} alt="News Thumb Picture" style={{maxWidth: '100%', height: "auto"}}/>
                  <Typography Wrap>চলমান 'হারতে' হারতে হারতে পারে ইসরায়েল </Typography>
                </Box>
              </Grid>

              <Grid item xs={4} sx={{ borderLeft: 1, borderRight: 1, borderColor: 'grey.500' }}>
                <Box style={{ display: "flex", gap: 6, alignItems: "center", paddingLeft: 16 }}>
                  <Image src="/images/banana.webp" width={70} height={70} alt="News Thumb Picture" style={{maxWidth: '100%', height: "auto"}}/>
                  <Typography Wrap>চলমান 'হারতে' হারতে হারতে পারে ইসরায়েল </Typography>
                </Box>
              </Grid>

              <Grid item xs={4}>
                <Box style={{ display: "flex", gap: 6, alignItems: "center", paddingLeft: 16 }}>
                  <Image src="/images/banana.webp" width={70} height={70} alt="News Thumb Picture" style={{maxWidth: '100%', height: "auto"}}/>
                  <Typography Wrap>চলমান 'হারতে' হারতে হারতে পারে ইসরায়েল </Typography>
                </Box>
              </Grid>
            </Grid>
          </Box>

          <Box direction="row" sx={{ display: {xs: 'block', sm: 'block', md: 'none' }}}>
            <Box sx={{ display: 'flex'}}>
              <Button variant="text" sx={{ borderRight: 1, borderColor: 'grey.500', py: 0}}><SearchIcon /></Button>
              <Button sx={{ display: "flex", gap: 1, color: 'black', color: 'black'}}>
                <PersonIcon/>
                <Typography>Login</Typography>
              </Button>
            </Box>
          </Box>
        </Container>

      <Box sx={{position:'sticky', top: 0, zIndex: 999, bgcolor: 'white', borderTop: 1, borderBottom: 3, borderColor: 'grey.500' }}>
        <Container maxWidth="xl">
          <Box sx={{ display: "flex", justifyContent: 'space-between' }}>
            <Stack edge="start" direction="row" spacing={.5} overflow="auto" sx={{flexGrow: 1}}>
              {
                pages.map((menu)=>(
                  <Button sx={{color: 'black'}}>{menu}</Button>
                ))
              }
            </Stack>
            <Stack direction="row" zIndex={999}>
                
              <Box sx={{display: { xs: 'none', sm: 'none', md: 'block' }}}>
                <Button sx={{ display: "flex", gap: 1, color: 'black', borderLeft: 1, borderRight: 1, borderColor: 'grey.500', px: 2, py: 3}}>
                  <SearchIcon />
                  <Typography>খুঁজুন</Typography>
                </Button>
              </Box>

              <Box sx={{display: {xs: 'none', sm: 'none', md: 'block' }}}>
                <Button sx={{ textWrap: "nowrap", display: "flex", gap: 1, color: 'black', color: 'black', borderColor: 'grey.500', px: 2, py: 3}}>
                  <NewspaperIcon />
                  <Typography>ই-পেপার</Typography>
                </Button>
              </Box>
                
              <Button sx={{ display: "flex", gap: 1, color: 'black', color: 'black', borderLeft: 1,  borderRight: 1, borderColor: 'grey.500', backgroundColor: "rgb(251, 233, 231)", px: 2, py: 3, boxShadow : { sm: '10 5 5 0', md: '0' }}}>
                <LanguageIcon/>
                <Typography>Eng</Typography>
              </Button>

              <Box sx={{display: {xs: 'none', sm: 'none', md: 'block' }}}>
                <Button sx={{ display: "flex", gap: 1, color: 'black', color: 'black', borderRight: 1, borderColor: 'grey.500', px: 2, py: 3}}>
                  <PersonIcon/>
                  <Typography>Login</Typography>
                </Button>
              </Box>
                
              <Button sx={{ display: "flex", gap: 1, color: 'black', color: 'black', borderRight: 1, borderColor: 'grey.500', px: 2, py: 3}}>
                <DehazeIcon/>
              </Button>
            </Stack>
          </Box>
        </Container>
      </Box>

      <Box>
        <Container maxWidth="xl" sx={{display: { xs: 'block', sm: 'block', md: 'none', backgroundColor: 'rgb(247, 247, 247)' }}}>
           <Grid sx={{display:"flex", justifyContent:"space-between", alignItems:"center", py: 1}}>
            <Grid item xs={4} sx={{flexGrow: 1}}>
              <Button sx={{ display: "flex", gap: 1, color: 'black'}}>
                <PlayCircleOutlineIcon sx={{color: 'red'}}/>
                <Typography>ভিডিও</Typography>
              </Button>
            </Grid>

            <Grid item xs={4} sx={{borderLeft: 1, borderRight: 1, borderColor: 'grey.500', flexGrow: 1}}>
              <Button sx={{ display: "flex", gap: 1, color: 'black'}}>
                <PlayCircleOutlineIcon sx={{color: 'red'}}/>
                <Typography>ভিডিও</Typography>
              </Button>
            </Grid>

            <Grid item xs={4} sx={{flexGrow: 1}}>
              <Button sx={{ display: "flex", gap: 1, color: 'black'}}>
                <LocalSeeIcon sx={{color: 'red'}}/>
                <Typography>ছবি </Typography>
              </Button>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </>
  );
};
