import Head from 'next/head'

export default function Home() {

    const title = "Subfile | Download Now."
    const description = "Download the latest version of Subfile for free. See what's new in the latest version of Subfile."

    return (
        <main>
            <Head>
                <title>{title}</title>
                <meta
                    content={description}
                    name="description"
                />
                <meta property="og:type" content="website" />
                <meta property="og:site_name" content="Anthony Riley" />
                <meta property="og:description" content={description} />
                <meta property="og:title" content={title} />
                <meta property="og:image" content="/images/thumbnail.jpg" />
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:site" content="@leeerob" />
                <meta name="twitter:title" content={title} />
                <meta name="twitter:description" content={description} />
                <meta name="twitter:image" content="/images/thumbnail.jpg" />
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
                <link href="https://fonts.googleapis.com/css2?family=Manrope:ital,wght@0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap" rel="stylesheet" />
            </Head>
            <div className='flex items-center justify-center w-screen h-screen'>
                <h1 className='text-xl text-center'>Download Not Available to Public, Stay Tuned!</h1>
            </div>
        </main>
    )
}
