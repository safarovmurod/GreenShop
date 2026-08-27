import { useParams } from "react-router";
import ProductDetails from "../components/Shop/ProductDetails";
import RelatedProducts from "../components/Shop/RelatedProducts";

export default function Shop() {
  const { id } = useParams();

  // key -> ҳангоми иваз шудани маҳсулот state-и дохилӣ нав мешавад
  return (
    <>
      <ProductDetails key={id} />
      <RelatedProducts currentId={Number(id)} />
    </>
  );
}
