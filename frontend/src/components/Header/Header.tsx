import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

type Props = {}

export const Header = (props: Props) => {
  return (
    <div className="bg-main h-12 shadow-md fixed top-0 left-0 w-screen">
      <Link className='m-1 flex' href="/">
        <Image src="/logo.svg" alt="logo" width={36} height={36} />
      </Link>
    </div>
  )
}