import { Box, Grid, Stack, Typography } from '@mui/material'
import CircleIcon from '@mui/icons-material/Circle';
import Image from "next/image";

export default function NewsCard() {
  return (
    <>
         <Box>
            <Grid container sx={{justifyContent: "space-between"}}>
                <Grid item xs={8} flexGrow={1}>
                  <Stack>
                    <Typography direction="row" alignItems="centers" sx={{fontSize: 20}}>
                        <Typography component="span" sx={{fontSize: 20, color: "red"}}>পরিবহন ধর্মঘট</Typography> <CircleIcon sx={{fontSize: 10, color: 'gray' }}/> ‘গরমের মধ্যে দাঁড়িয়ে আছি, কোনো যানবাহন নেই’
                    </Typography>
                  </Stack>
                </Grid>
                <Grid item xs={4}>
                  <Image src="/images/cardimage.webp" width={100} height={80} alt="Prothom Alo Logo" style={{maxWidth: '100%', height: "auto"}}/>
                </Grid>
                <Typography sx={{color: "gray", py: 1}}>
                    চট্টগ্রাম নগর থেকে বিভিন্ন উপজেলা, কক্সবাজার জেলা, রাঙামাটি, বান্দরবান ও খাগড়াছড়ি জেলার উদ্দেশে কোনো বাস ছেড়ে যাচ্ছে না।
                  </Typography>
                <Typography sx={{color: "gray", py: 1}}>
                ১ ঘণ্টা আগে
                  </Typography>
            </Grid>
        </Box>
        <hr />
        <Box>
            <Grid container sx={{justifyContent: "space-between"}}>
                <Grid item xs={8} flexGrow={1}>
                  <Stack>
                    <Typography direction="row" sx={{fontSize: 20}}>
                        পরিবহন ধর্মঘট <CircleIcon sx={{fontSize: 10, color: 'gray' }}/> ‘গরমের মধ্যে দাঁড়িয়ে আছি, কোনো যানবাহন নেই’
                    </Typography>
                  </Stack>
                </Grid>
                <Grid item xs={4}>
                  <Image src="/images/cardimage.webp" width={100} height={80} alt="Prothom Alo Logo" style={{maxWidth: '100%', height: "auto"}}/>
                </Grid>
                <Typography sx={{color: "gray", py: 1}}>
                    চট্টগ্রাম নগর থেকে বিভিন্ন উপজেলা, কক্সবাজার জেলা, রাঙামাটি, বান্দরবান ও খাগড়াছড়ি জেলার উদ্দেশে কোনো বাস ছেড়ে যাচ্ছে না।
                  </Typography>
                <Typography sx={{color: "gray", py: 1}}>
                ১ ঘণ্টা আগে
                  </Typography>
            </Grid>
        </Box>
        <hr />
        <Box>
            <Grid container sx={{justifyContent: "space-between"}}>
                <Grid item xs={8} flexGrow={1}>
                  <Stack>
                    <Typography direction="row" sx={{fontSize: 20}}>
                        পরিবহন ধর্মঘট <CircleIcon sx={{fontSize: 10, color: 'gray' }}/> ‘গরমের মধ্যে দাঁড়িয়ে আছি, কোনো যানবাহন নেই’
                    </Typography>
                  </Stack>
                </Grid>
                <Grid item xs={4}>
                  <Image src="/images/cardimage.webp" width={100} height={80} alt="Prothom Alo Logo" style={{maxWidth: '100%', height: "auto"}}/>
                </Grid>
                <Typography sx={{color: "gray", py: 1}}>
                    চট্টগ্রাম নগর থেকে বিভিন্ন উপজেলা, কক্সবাজার জেলা, রাঙামাটি, বান্দরবান ও খাগড়াছড়ি জেলার উদ্দেশে কোনো বাস ছেড়ে যাচ্ছে না।
                  </Typography>
                <Typography sx={{color: "gray", py: 1}}>
                ১ ঘণ্টা আগে
                  </Typography>
            </Grid>
        </Box>
    </>
  )
}
