// You can include shared interfaces/types in a separate file
// and then use them in any component by importing them. For
// example, to import the interface below do:
//
// import { User } from 'path/to/interfaces';

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
  id: number;
  title: string;
  url: string;
  video_id: string;
  thumbnails: Object;
};

export type Songs = {
  item: Song[];
  nextPage: string;
};
