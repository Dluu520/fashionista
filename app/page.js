import Image from "next/image";
import Hero from "./components/sections/Hero";
import Promotion from "./components/sections/Promotion";
import Head from "next/head";
import Slider from "./components/sections/ImageSlider/Slider";
import { SliderData } from "./components/sections/ImageSlider/SliderData";
import Featured from "./components/sections/Featured";
import OnSale from "./components/sections/OnSale";
import NewProducts from "./components/sections/NewProducts";
import Footer from "./components/sections/Footer";
export default function Home() {
  return (
    <>
      <Head>
        <title>Fashionista Next App</title>
      </Head>
      <Hero
        title={"New Arrivals"}
        message={"Signature pieces to look your best everyday."}
        button={"View More"}
      />
      <Promotion sale={"25% Percent off on second item!"} />
      <Slider slides={SliderData} />
      {/* <Featured /> */}
      <OnSale />
      <NewProducts />
      <Footer />
    </>
  );
}
