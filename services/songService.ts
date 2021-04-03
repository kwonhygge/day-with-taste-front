import axios from 'axios';
import { Song } from '../interfaces';

const BACK_API_URL = 'https://day-with-taste.herokuapp.com';

export default class SongService {
  public static async getSongs(keyword: string): Promise<Song[]> {
    const response = await axios.get<Song[]>(`${BACK_API_URL}/youtube`, {
      data: keyword,
    });
    console.log(keyword);
    console.log(response.data);
    return response.data;
  }

  public static async postResult(music: string, result: string): Promise<Song> {
    console.log(music);
    const response = await axios.post<Song>(`${BACK_API_URL}/result`, {
      data: { music: music, result: result },
    });

    console.log(response.data);
    return response.data;
  }
}
