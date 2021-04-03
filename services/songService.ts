import axios from 'axios';
import { Song } from '../interfaces';

const BACK_API_URL = 'https://day-with-taste.herokuapp.com';

export default class SongService {
  public static async getSongs(keyword: string): Promise<Song[]> {
    const response = await axios.post<Song[]>(`${BACK_API_URL}/youtube`, {
      data: keyword,
    });

    return response.data;
  }

  public static async getResult(music: string, result: string): Promise<Song> {
    const response = await axios.post<Song>(`${BACK_API_URL}/result`, {
      data: { music, result },
    });

    return response.data;
  }
}
