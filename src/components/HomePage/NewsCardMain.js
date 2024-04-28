import { Box, Grid, Stack, Typography } from "@mui/material";
import CircleIcon from '@mui/icons-material/Circle';
import Image from "next/image";


export default function NewsCardMain() {
  return (
    <>
        <Box>
            <Grid container sx={{justifyContent: "space-between"}}>
                <Grid item xs={6}>
                  <Image src="/images/newsthumb.webp" width={340} height={230} alt="Prothom Alo Logo" style={{maxWidth: '100%', height: "auto"}}/>
                  <Typography sx={{color: "gray", py: 1, fontSize: 12}}>
                  রাজধানীর বিমানবন্দর সড়কের পাশে চীন থেকে আনা বনসাই লাগানো হয়েছে। গত বুধবার বিকেলেছবি: খালেদ সরকার
                  </Typography>
                </Grid>
                <Grid item xs={6} flexGrow={1}>
                    <Typography direction="row" sx={{fontSize: 20}}>
                        ‘গরমের মধ্যে দাঁড়িয়ে আছি, কোনো যানবাহন নেই’
                    </Typography>
                    <Typography sx={{color: "gray", py: 1}}>
                        চট্টগ্রাম নগর থেকে বিভিন্ন উপজেলা, কক্সবাজার জেলা, রাঙামাটি, বান্দরবান ও খাগড়াছড়ি জেলার উদ্দেশে কোনো বাস ছেড়ে যাচ্ছে না।
                  </Typography>
                  <Typography sx={{color: "gray", py: 1}}>
                        ১ ঘণ্টা আগে
                  </Typography>
                </Grid>
            </Grid>
            <hr/>
            <Grid container>
                <Grid item xs={12} md={6} container sx={{justifyContent: "space-between"}}>
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

                <Grid item xs={12} md={6} container sx={{justifyContent: "space-between", pl: { xs: 0, lg: 2}, borderLeft: { xs: 0, lg: 1}, borderColor: "gray"}}>
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
            </Grid>
            <hr/>
        </Box>
    </>
  )
}
