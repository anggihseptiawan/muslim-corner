import axios from 'axios';
import Head from 'next/head';

export default function Home({ surah }) {
  console.log(surah);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <Head>
        <title>Muslim Corner</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="flex flex-col items-center justify-center w-full flex-1 px-20 text-center">
        <h1 className="text-6xl font-bold">
          Welcome to{' '}
          <a className="text-blue-600" href="https://nextjs.org">
            Muslim Corner!
          </a>
        </h1>
      </main>
    </div>
  );
}

export async function getServerSideProps() {
  const getSurah = (await axios.get(`${process.env.QURAN_API_URL}/surah`)) || [];
  const surah = getSurah?.data?.data;

  return {
    props: { surah },
  };
}
