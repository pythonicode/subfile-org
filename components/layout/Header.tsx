import Link from "next/link";
import { useEffect, useState } from "react";
import MobileMenu from "../core/MobileMenu";

type NavItemProps = {
    href: string;
    text: string;
};

function NavItem({ href, text }: NavItemProps) {
    return (
        <Link href={href}>
            <div
                className="text-neutral-500 transition-all duration-300 px-4 py-1 rounded hover:text-white  hover:bg-neutral-800 hidden md:inline-block text-lg cursor-pointer font-semibold"
                title={text}
            >
                {text}
            </div>
        </Link>
    );
}

export default function Header() {
    const [mounted, setMounted] = useState(false);

    useEffect(() => setMounted(true), []);

    return (
        <header className="flex flex-row justify-between items-center max-w-3xl mx-auto w-full px-4 py-8">
            <nav className="relative flex flex-row gap-2">
                <MobileMenu />
                <NavItem href="/" text="Home" />
                <NavItem href="/posts" text="Posts" />
                <NavItem href="/dashboard" text="Dashboard" />
            </nav>
        </header>
    );
}
