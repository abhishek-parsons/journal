import Head from "next/head";
import { useEffect, useState } from "react";
import { prompts } from "../utils/prompts";
import moment from "moment/moment";
import "../styles/Home.module.css";

export default function Home() {
  const [promptList, setPromptList] = useState([]);
  useEffect(() => setPromptList(prompts), []);
  return (
    <>
      <Head>
        <title>Journalling Prompts</title>
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
      <main className="main container mx-auto max-w-lg h-full">
        <p className="text-sm font-sans mt-10">
          {moment().format("dddd, MMMM Do, YYYY")}
        </p>
        <p className="text-md font-sans">
          {promptList[Math.floor(Math.random() * prompts.length)]}
        </p>
        <textarea
          id="message"
          rows="25"
          class="mt-5 block p-2.5 w-full h-full text-sm text-gray-900 bg-gray-100 rounded-lg  focus:ring-blue-500 focus:border-blue-500"
          placeholder="Write your thoughts here..."
        ></textarea>
        <button
          onclick={() => {
            window.print();
          }}
          type="button"
          class="text-white mt-5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5  mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800 float-right"
        >
          Save
        </button>
      </main>
    </>
  );
}
