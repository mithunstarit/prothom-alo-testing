import { Footer } from "@/components/Common/Footer";
import AdsBanner from "@/components/HomePage/AdsBanner";
import HomePageBody from "@/components/HomePage/HomePageBody";
import { Logobar } from "@/components/Common/Logobar";

export default function Home() {
  return (
    <main>
      <Logobar></Logobar>
        <AdsBanner></AdsBanner>
        <HomePageBody></HomePageBody>
      <Footer></Footer>
    </main>
  );
}