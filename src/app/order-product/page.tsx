"use client";
import { useRouter } from "next/navigation";

export default function OrderProduct() {
  const router = useRouter();

  const handleClick = () => {
    console.log("Placing Your Order");
    // router.push("/")
    router.back();
  };

  return (
    <>
      <h1>OrderProduct</h1>
      <button onClick={handleClick}>Place order</button>
    </>
  );
}
