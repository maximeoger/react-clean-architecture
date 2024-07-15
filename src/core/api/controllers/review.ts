import axios from "axios";
import { API } from "..";

export const reviewInstance = axios.create({
  baseURL: process.env.SERVER_URL_REVIEWS,
  timeout: 4000,
});

export class ReviewAPI extends API {
  public constructor() {
    super(reviewInstance);
  }
}
