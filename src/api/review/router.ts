
import { ReviewAPI } from "core/api/controllers";
import { IReview } from "models/api/review";
import { ReviewResponse } from "models/review";

export class ReviewRouter extends ReviewAPI implements IReview {
  static init(): IReview {
    return new ReviewRouter();
  }
  public async sendReview(review: string): Promise<any> {
    try {
      const res = await this.post<ReviewResponse>("/posts/", { post: review });
      return res.data;
    } catch (err) {
      throw new Error(err?.response?.data?.message || "An error occured");
    }
  }
}
