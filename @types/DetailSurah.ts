import { VersesTypes } from './Verses';

export interface DetailSurahTypes {
  name: {
    long: String;
    short: String;
    translation: {
      en: String;
      id: String;
    };
    transliteration: {
      en: String;
      id: String;
    };
  };
  number: Number;
  numberOfVerses: Number;
  revelation: {
    arab: String;
    en: String;
    id: String;
  };
  sequence: Number;
  tafsir: {
    id: String;
  };
  verses: VersesTypes[];
}
