import KeyFeatures from "@/components/KeyFeatures";
import Banner from "@/components/Banner";
import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>DD enterprise</title>
        <link rel="icon" href="/books8.png" />
      </Head>

      <Banner />
      <KeyFeatures />
    </>
  );
}
