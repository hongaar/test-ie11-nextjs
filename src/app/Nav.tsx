import Link from "next/link";

export function Nav() {
    return <nav><Link href="/client">client</Link> <Link href="/server">server</Link></nav>
}