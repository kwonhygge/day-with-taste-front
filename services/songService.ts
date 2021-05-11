import axios from 'axios';
import {
  RandomMusicResponseType,
  Result,
  SongsResponseType,
} from '../interfaces';

const BACK_API_URL = 'https://day-with-taste.herokuapp.com';

export default class SongService {
  public static async getSongs(keyword: string): Promise<SongsResponseType> {
    const response = await axios.get<SongsResponseType>(
      `${BACK_API_URL}/search`,
      {
        params: { keyword },
      }
    );
    return response.data;
  }

  public static async postResult(
    result: Result
  ): Promise<RandomMusicResponseType> {
    const response = await axios.post<RandomMusicResponseType>(
      `${BACK_API_URL}/submit`,
      result
    );
    return response.data;
  }
}
