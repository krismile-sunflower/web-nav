'use client'

import Link from "next/link"

const links = [
  {
    title: '对象转换为 TypeScript 中的接口对象',
    href: '/tools/object-to-interface',
  },
]

export default function HotPage() {

  return <div className=" m-5 flex gap-5">
    {links.map((link) => (
      <div className="cursor-pointer border p-3">
        <Link href={link.href}>{link.title}</Link>
      </div>
    ))}
  </div>
}

