import Link from "next/link";
import { ReactNode } from "react";

type ExternalLinkProps = {
    href: string;
    children: ReactNode;
};

const ExternalLink = ({ href, children }: ExternalLinkProps) => (
    <a
        className="text-neutral-500 hover:text-neutral-600 transition"
        target="_blank"
        rel="noopener noreferrer"
        href={href}
    >
        {children}
    </a>
);

export default function Footer() {
    return (
        <footer className="flex flex-col justify-center items-start max-w-3xl mx-auto w-full mb-8 p-8">
            <hr className="w-full border-1 border-neutral-200 dark:border-neutral-800 mb-8" />
            <div className="w-full max-w-2xl grid gap-4 pb-16 grid-cols-3">
                <div className="flex flex-col space-y-4">

                </div>
                <div className="flex flex-col space-y-4">

                </div>
                <div className="flex flex-col space-y-4">

                </div>
            </div>
        </footer>
    );
}
