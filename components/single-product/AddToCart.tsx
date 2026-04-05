import { Button } from "../ui/button";

function AddToCart({ productId }: { productId: string }) {
  return (
    <Button size="lg" className="capitalize mt-8">
      AddToCart
    </Button>
  );
}
export default AddToCart;
