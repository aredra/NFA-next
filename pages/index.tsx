import type { NextPage } from "next";
import Head from "next/head";
import { useEffect, useState } from "react";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>NFA Board</title>
        <meta name="description" content="NFA statictis" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <section>
        <h2 className="text-3xl mb-8">소방청 구급활동현황 게시판</h2>
        <p className="text-xl mb-4">
          자료출처 :{" "}
          <a
            href="https://www.data.go.kr/data/15086458/fileData.do"
            target="_blank"
            rel="noreferrer"
          >
            https://www.data.go.kr/data/15086458/fileData.do
          </a>
        </p>
      </section>
    </>
  );
};

export default Home;
