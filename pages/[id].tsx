import axios from 'axios';
import { DetailSurahTypes } from '../@types/DetailSurah';

export default function IsiSurah({ surah }: { surah: DetailSurahTypes }) {
  return (
    <div className="container md:px-6 py-6 mx-auto">
      {surah?.name?.transliteration?.id}
      {surah?.verses?.map((item, idx) => (
        <div key={idx} className="mb-2">
          <p className="text-right">{item.text.arab}</p>
          <p>{item.translation.id}</p>
        </div>
      ))}
    </div>
  );
}

export async function getServerSideProps(req: any) {
  const getIsiSurah = (await axios(`${process.env.QURAN_API_URL}/surah/${req.params.id}`)) || [];
  const surah = getIsiSurah?.data?.data;

  return {
    props: { surah },
  };
}
