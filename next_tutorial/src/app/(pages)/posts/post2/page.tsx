import React from "react";
import Image from "next/image";
import Link from "next/link";

export default function Post2() {
  return (
    <>
      <div>post2 page</div>
      <Image
        src="/images/family.jpg" // Route of the image file
        height={144} // Desired size with correct aspect ratio
        width={144} // Desired size with correct aspect ratio
        alt="test image"
      />
      <Link href="/home">back to home</Link>
    </>
  );
}
