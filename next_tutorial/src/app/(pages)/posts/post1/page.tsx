import React from 'react'
import Link from 'next/link';

export default function Post1() {
  return (
    <>
      <div>post1 page</div>
      <Link href="/home">back to home</Link>
    </>
  )
}