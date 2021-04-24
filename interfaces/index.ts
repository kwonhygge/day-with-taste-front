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
  title: string;
  url: string;
  artist: string;
  image: string;
};

export type Result = {
  result: string;
  title: string;
  url: string;
  artist: string;
  image: string;
};

export type SongsResponseType = {
  data: Song[];
  success: boolean;
};

export type RandomMusicResponseType = {
  data: { randomMusic: string };
  success: boolean;
};

export type recommendationResponseType = {
  data: Song;
  success: boolean;
};
