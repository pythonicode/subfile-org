import Head from "next/head";
import { ReactNode } from "react";
import Header from "./Header";
import Footer from "./Footer";

type LayoutProps = {
    children: ReactNode;
    title?: string;
    description?: string;
    published?: string;
};

export default function Layout({
    children,
    title,
    description,
    published,
}: LayoutProps) {

    const metadata = {
        title: title
            ? title
            : "Subfile | Free, unlimited and secure file storage.",
        description: description ? description : "This page has no description.",
    };

    return (
        <>
            <Head>
                <title>{metadata.title}</title>
                <meta name="robots" content="follow, index" />
                <meta
                    content={description ? description : "This page has no description."}
                    name="description"
                />
                <meta property="og:type" content="website" />
                <meta property="og:site_name" content="Anthony Riley" />
                <meta property="og:description" content={metadata.description} />
                <meta property="og:title" content={metadata.title} />
                <meta property="og:image" content="/images/thumbnail.jpg" />
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:site" content="@leeerob" />
                <meta name="twitter:title" content={metadata.title} />
                <meta name="twitter:description" content={metadata.description} />
                <meta name="twitter:image" content="/images/thumbnail.jpg" />
                {published && (
                    <meta property="article:published_time" content={published} />
                )}
            </Head>
            <Header />
            <main id="skip" className="relative max-w-3xl mx-auto w-full my-8 p-8">
                {children}
            </main>
            <Footer />
        </>
    );
}
