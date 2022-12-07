import Head from 'next/head'
import Link from 'next/link'
import { FiChevronDown } from 'react-icons/fi'

export default function Home() {

  const title = "Subfile | Free, unlimited and secure file storage."
  const description = "This is the homepage for the application Subfile.Subfile is a free, unlimited and secure file storage application powered by Filecoin and Estuary."

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
      </Head>

      <section className='flex flex-col w-full min-h-screen items-center justify-center gap-10 text-center '>
        <div>
          <h1 className='text-5xl md:text-8xl font-bold'>Subfile</h1>
          <h4 className='md:text-xl'>Free, unlimited and secure file storage.</h4>
        </div>
        <Link href="/download">
          <button type="button" className='md:text-xl border w-60 md:w-80 p-4 font-semibold'>Download For Free</button>
        </Link>
        <div className='flex flex-col items-center'>
          <h3>Read More</h3>
          <FiChevronDown />
        </div>
      </section>
      <section className='flex flex-col w-full min-h-[50vh] items-center justify-center gap-10'>
        Nothing here yet!
      </section>
    </main>
  )
}
