import axios from 'axios';

const BACK_API_URL = 'https://day-with-taste.herokuapp.com';

export default class CountService {
  public static async getCounts(): Promise<Object> {
    const response = await axios.get<Object>(`${BACK_API_URL}/visit`);
    console.log(response.data);
    return response.data;
  }
}
