import Link from "next/link";
import { useState } from "react";
import { Slide } from "react-awesome-reveal";
import { FiX } from "react-icons/fi";
import { MdMenu } from "react-icons/md";

export default function MobileMenu() {
    const [opened, setOpened] = useState(false);

    return (
        <>
            <button
                type="button"
                className="md:hidden"
                onClick={() => setOpened(!opened)}
            >
                {opened ? <FiX size="32px" /> : <MdMenu size="32px" />}
            </button>
            <div
                className={`absolute flex flex-col gap-4 w-[90vw] h-fit top-12 left-0 ${opened
                        ? "bg-white dark:bg-dark text-dark dark:text-light "
                        : "bg-transparent text-transparent border-transparent"
                    } z-10 p-8 transition-all duration-500 border-b`}
            >
                {opened && (
                    <Slide triggerOnce>
                        <Link href="/">
                            <a className="text-3xl font-bold">Home</a>
                        </Link>
                        <Link href="/posts">
                            <a className="text-3xl font-bold">Posts</a>
                        </Link>
                        <Link href="/dashboard">
                            <a className="text-3xl font-bold">Dashboard</a>
                        </Link>
                    </Slide>
                )}
            </div>
        </>
    );
}
