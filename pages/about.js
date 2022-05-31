import Link from "next/link";

export default function About() {
    return (
        <div>
            <Link href="/">home</Link>
            <Link href="/about">about</Link>
            <h1>About</h1>
        </div>
    )
}