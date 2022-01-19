export interface VersesTypes {
  audio: {
    primary: String;
    secondary: String[];
  };
  meta: {
    hizbQuarter: Number;
    juz: Number;
    manzil: Number;
    page: String;
    ruku: String;
    sajda: {
      obligatory: Boolean;
      recommended: Boolean;
    };
  };
  number: {
    inQuran: Number;
    inSurah: Number;
  };
  tafsir: {
    id: {
      long: String;
      short: String;
    };
  };
  text: {
    arab: String;
    transliteration: {
      en: String;
    };
  };
  translation: {
    en: String;
    id: String;
  };
}
