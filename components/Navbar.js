import Link from "next/link";
import { BsFillGridFill, BsXLg } from "react-icons/bs";
import { useState } from "react";


export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false)
    return ( 
    <>
        <nav className="flex justify-between py-4 px-6 text-4xl border-b">
            <Link href="/">
                DS
            </Link>
            <button onClick={() => setIsOpen(!isOpen)}>
                <BsFillGridFill/>
            </button>
        </nav>
        <div className={`fixed top-0 right-0 border-l-2 w-2/3 h-screen flex flex-col bg-zinc-900 ease-in-out duration-500 ${isOpen ? "w-2/3" : "w-0"}`}>
            <div className="h-1/4 flex justify-end items-start py-5 px-7">
                <button onClick={() => setIsOpen(!isOpen)} className="text-3xl">
                    <BsXLg/>
                </button>
            </div>
            <ul className="text-center">
                <li className="mt-10">
                    <Link href="/">Home</Link>
                </li>
                <li className="mt-10">
                    <Link href="/">About</Link>
                </li>
                <li className="mt-10">
                    <Link href="/">Contact</Link>
                </li>
                <li className="mt-10">
                    <Link href="/">Blog</Link>
                </li>
            </ul>
        </div>
    </>
    )
}
