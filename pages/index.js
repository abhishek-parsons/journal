import Head from "next/head";
import { useEffect, useState } from "react";
import { prompts } from "../utils/prompts";
import "../styles/Home.module.css";

export default function Home() {
  const [promptList, setPromptList] = useState([]);
  useEffect(() => setPromptList(prompts), []);
  return (
    <>
      <Head>
        <title>Vani&apos;s Journalling Prompts</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/normalize/8.0.1/normalize.min.css"
          integrity="sha512-NhSC1YmyruXifcj/KFRWoC561YpHpc5Jtzgvbuzx5VozKpWvQ+4nXhPdFgmx8xqexRcpAglTj9sIBWINXa8x5w=="
          crossorigin="anonymous"
          referrerpolicy="no-referrer"
        />
        <link rel="stylesheet" href="https://use.typekit.net/nnh8reu.css" />
      </Head>
      <main className="main">
        {promptList[Math.floor(Math.random() * prompts.length)]}
      </main>
    </>
  );
}
