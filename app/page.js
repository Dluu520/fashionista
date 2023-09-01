import Image from "next/image";
import Hero from "./components/Hero";
import Promotion from "./components/Promotion";
import Head from "next/head";
import Slider from "./components/ImageSlider/Slider";
import { SliderData } from "./components/ImageSlider/SliderData";

export default function Home() {
  return (
    <>
      <Head>
        <title>Fashionista Next App</title>
      </Head>
      <Hero
        title={"Fashionista"}
        message={"Signature pieces to look your best everyday."}
        button={"View More"}
      />
      <Promotion sale={"25% Percent off on second item!"} />
      <Slider slides={SliderData} />
    </>
  );
}
