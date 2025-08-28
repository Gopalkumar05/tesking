
import Head from "next/head";
import Hero from "@/components/landing/Hero";
import Stats from "@/components/landing/Stats";
import Services from "@/components/landing/Services";
import Testimonials from "@/components/landing/Testimonials";
import Offer from "@/components/landing/Offer";


export default function Home() {
  return (
    <>
      <Head>
        <title>Astro Destiny - Unlock Your Cosmic Destiny</title>
        <meta
          name="description"
          content="Book sessions with expert astrologers and discover your true path."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Hero />
        <Stats />
        <Services />

        <Testimonials />

        <Offer />
      </main>
    </>
  );
}
