export type User = {
  id: number;
  name: string;
};

export type Question = {
  id: number;
  question: string;
  answerA: string;
  answerB: string;
};

export type Song = {
  music: string;
  title: string;
  url: string;
  image: string;
};

export type Result = {
  result: string;
  image: string;
  title: string;
  music: string;
};

export type SongsResponseType = {
  data: Song[];
  success: boolean;
};

export type RandomMusicResponseType = {
  data: {
    randomMusic: string;
    image: string;
    title: string;
  };
  success: boolean;
};
