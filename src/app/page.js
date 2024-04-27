import { Footer } from "@/components/Footer";
import { Logobar } from "@/components/Logobar";
import { Typography } from "@mui/material";

export default function Home() {
  return (
    <main>
      <Logobar></Logobar>
        <Typography sx={{my: 20}}>
          lorem 10
        </Typography>
      <Footer></Footer>
    </main>
  );
}
