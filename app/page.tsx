import HeroSec from "@/components/Hero/HeroSec";
import NavBar from "@/components/NavBar";
import ThemeChange from "@/components/ThemeChange";
import PricingSec from "@/components/pricingSec/PricingSec";
import WhyUs from "@/components/whyUsSec/WhyUs";
import Image from "next/image";

export default function Home() {
  return (
    <div className="h-[] bg-base-200/40">
      <div className="bg-base-100 max-md:min-h-screen ">
        <NavBar />
        <HeroSec />
      </div>
      <WhyUs/>
      <PricingSec/>
      <ThemeChange />
    </div>
  );
}
