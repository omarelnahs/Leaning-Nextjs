import Link from "next/link";

export default function ProductList() {
  const prodcutId = 100;
  return (
    <>
      <Link href="/">Home</Link>
      <h1>Products List</h1>
      <h2>
        <Link href="/products/1">product 1</Link>
      </h2>
      <h2>
        <Link href="/products/2">product 2</Link>
      </h2>
      <h2>
        <Link href="/products/3" replace>product 3</Link>
      </h2>
      <h2>
        <Link href={`/products/${prodcutId}`}>product {prodcutId}</Link>
      </h2>
    </>
  );
}
