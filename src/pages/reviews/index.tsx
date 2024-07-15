import React, { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useSearchReviews } from "api/search/usecases/useSearchReviews";
import DataContainer from "components/data-container";
import { useSendReview } from "api/review";

export default function Reviews() {
  const { movie } = useParams()
  const navigate = useNavigate();
  const [review, setReview] = useState("");
  
  const { loading, reviews, error } = useSearchReviews(movie);
  const { onSendReview, isSending } = useSendReview();
  
  return (
    <div>
       <button onClick={() => navigate(-1)}>&#x2190;</button>
      <h1>Reviews</h1>
      <DataContainer
        loading={loading}
        error={error}
        noData={reviews?.length === 0}
      >
        {reviews.map((review, i) => (
          <div key={i}>
            <h3>{review.author}</h3>
            <p>{review.content}</p>
          </div>
        ))}
      </DataContainer>
      <h2>Write a review</h2>
            <div>
              <textarea onChange={(e) => setReview(e.target.value)} />
              <button onClick={()=> onSendReview(review)} disabled={isSending}>
                {isSending ? "sending..." : "send review"}
              </button>
            </div>
    </div>
  );
}
