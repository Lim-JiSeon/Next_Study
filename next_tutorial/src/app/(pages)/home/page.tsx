import React from "react";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <div>home page</div>
      <div>
        <Link href="/posts/post1">test page 1</Link>
      </div>
      <div>
        <Link href="/posts/post2">test page 2</Link>
      </div>
    </>
  );
}
