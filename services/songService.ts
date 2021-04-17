import axios from 'axios';
import { Song, Songs } from '../interfaces';

const BACK_API_URL = 'https://day-with-taste.herokuapp.com';

export default class SongService {
  public static async getSongs(keyword: string): Promise<Songs> {
    const response = await axios.get<Songs>(`${BACK_API_URL}/youtube`, {
      params: { keyword },
    });

    return response.data;
  }

  public static async postResult(music: string, result: string): Promise<Song> {
    const response = await axios.post<Song>(`${BACK_API_URL}/result`, {
      music,
      result,
    });

    return response.data;
  }
}
