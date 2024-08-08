import type { Metadata } from "next";

type Props = {
  params: {
    productId: string;
  };
};

export const generateMetadata = async ({params} : Props) :Promise <Metadata> =>{
  const title = await new Promise (resolve =>{
    setTimeout(()=>{
      resolve(`iphone ${params.productId}`)
    }, 1000)
  })
  return {
    title:`Product ${title}`,
  }
}

export default function ProductDetails({ params }: Props) {
  return <h1>Product about Details {params.productId}</h1>;
}
