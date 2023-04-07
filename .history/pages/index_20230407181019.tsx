import KeyFeatures from "@/components/KeyFeatures";
import Banner from "@/components/Banner";
import Head from "next/head";
import AboutUs from "@/components/AboutUs";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import NewCollection from "@/components/NewCollection";
import Products from "@/components/Products";

export default function Home() {
  return (
    <>
      <Head>
        <title>DD enterprise</title>
        <link
          rel="icon"
          href="https://t3.ftcdn.net/jpg/03/01/07/88/360_F_301078890_Fe1yAqmRfoLE9a9nCoQYDLZCYNsNiyIn.jpg"
        />
      </Head>

      <Banner />

      <NewCollection />
      <section id="features">
        <KeyFeatures />
      </section>

      <section id="products">
        <Products />
      </section>

      <section id="about">
        <AboutUs />
      </section>

      <section id="contact">
        <Contact />
      </section>
      <Footer />
    </>
  );
}
