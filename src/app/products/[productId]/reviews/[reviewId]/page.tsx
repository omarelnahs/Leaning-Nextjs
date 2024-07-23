import React from "react";

export default function ReviewsDetails({
  params,
}: {
  params: { 
    productId: string;
    reviewId: string 
};
}) {
  return (
    <>
      <h1>Review {params.reviewId} for Product {params.productId}</h1>
    </>
  );
}
