"use client";

import React from "react";
import Script from "next/script";
import Link from "next/link";
import Image from "next/image";
import Layout from "@/components/Layout";
import "@/styles/global.css";

type paramsPropsType = {
  params: {
    number: number;
  };
};

export default function Post({ params }: paramsPropsType) {
  return (
    <>
      <Script
        src="https://connect.facebook.net/en_US/sdk.js"
        strategy="lazyOnload"
        onLoad={() =>
          console.log(`script loaded correctly, window.FB has been populated`)
        }
      />
      <Layout>
        <div>post{params.number} page</div>
        <Image
          src="/images/family.jpg" // Route of the image file
          height={144} // Desired size with correct aspect ratio
          width={144} // Desired size with correct aspect ratio
          alt="test image"
        />
        <Link href="/home">back to home</Link>
      </Layout>
    </>
  );
}
