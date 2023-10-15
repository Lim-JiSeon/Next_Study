"use client";

import React from "react";
import Head from "next/head";
import Script from "next/script";
import Link from "next/link";
import Layout from "@/components/Layout";
import "@/styles/global.css";

export default function Post1() {
  return (
    <>
      <Head>
        <title>First Post</title>
      </Head>
      <Script
        src="https://connect.facebook.net/en_US/sdk.js"
        strategy="lazyOnload"
        onLoad={() =>
          console.log(`script loaded correctly, window.FB has been populated`)
        }
      />
      <Layout>
        <div>post1 page</div>
        <Link href="/home">back to home</Link>
      </Layout>
    </>
  );
}
