import type { NextPage } from "next";
import Head from "next/head";

import HomePage from "pages/HomePage";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Guilherme Kuniyoshi</title>
        <meta name="description" content="Frontend Engineer" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <HomePage />
    </>
  );
};

export default Home;
