import Header from "@/components/Header";
import Hero from "@/components/Hero";

import Gallery from "@/components/Gallery";
import FAQ from "@/components/FAQ";
import DonationMethods from "@/components/DonationMethods";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <Hero />

      <Gallery />
      <FAQ />
      <DonationMethods />
      <Footer />
    </>
  );
}

