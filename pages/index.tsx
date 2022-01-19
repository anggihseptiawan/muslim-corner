import axios from 'axios';
import Head from 'next/head';
import Link from 'next/link';
import { DetailSurahTypes } from '../@types/DetailSurah';
import { Navbar } from './components/Navbar';

export default function Home({ surah }: { surah: Partial<DetailSurahTypes[]> }) {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <Head>
        <title>Muslim Corner</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navbar />
      <main className="flex flex-col items-center justify-center w-full flex-1 px-4 md:px-20 text-center">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-2 md:gap-4 py-6">
          {surah?.map((item: any, index: number) => (
            <Link href={`/${item.number}`} key={index}>
              <div
                className="flex flex-col justify-between h-28 cursor-pointer text-white rounded-md px-4 py-2"
                style={{ background: 'radial-gradient(50% 50% at 50% 50%, #01A8B3 0%, #0193B3 100%)' }}
              >
                <div className="flex justify-between items-center">
                  <p className="text-md md:text-xl font-bold">{item.name.transliteration.id}</p>
                  <p className="text-xs">{item.revelation.id}</p>
                </div>
                <div className="flex justify-between items-center">
                  <p className="text-xl md:text-4xl font-bold mb-0">{item.number}</p>
                  <p className="text-2xl md:text-4xl mb-0">{item.name.short}</p>
                </div>
              </div>
            </Link>
          ))}
        </div>
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
