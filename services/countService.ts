import axios from 'axios';

const BACK_API_URL = 'https://day-with-taste.herokuapp.com';

export default class CountService {
  public static async getCounts(): Promise<number> {
    const response = await axios.get<number>(`${BACK_API_URL}/visit`);
    return response.data;
  }
}
