import FavoriteToggleButton from "@/components/products/FavoriteToggleButton";
import AddToCart from "@/components/single-product/AddToCart";
import BreadCrumbs from "@/components/single-product/BreadCrumbs";
import ProductRating from "@/components/single-product/ProductRating";
import { fetchSingleProduct } from "@/utils/actions";
import { formatCurrency } from "@/utils/format";
import Image from "next/image";

async function SingleProductPage({ params }: { params: { id: string } }) {
  const { id } = await params;
  const product = await fetchSingleProduct({ id });

  const { name, company, image, description, price } = product;
  const dollarsAmount = formatCurrency(price);
  return (
    <section>
      <BreadCrumbs name={name} />
      <div className="mt-8 grid gap-y-8 lg:grid-cols-2 lg:gap-x-16">
        {/* IMAGE FIRST COL */}
        <div className="relative h-full">
          <Image
            src={image}
            alt={name}
            fill
            sizes="(max-width:768px) 100vw,(max-width:1200px) 50vw,33vw"
            priority
            className="object-cover w-full rounded-md"
          />
        </div>
        {/* PRODUCT INFO SECONED COL  */}
        <div>
          <div className="flex gap-x-8 items-center">
            <h1 className="text-3xl capitalize font-bold">{name}</h1>
            <FavoriteToggleButton productId={id} />
          </div>
          <ProductRating productId={id} />
          <h4 className="mt-2 text-xl">{company} </h4>
          <p className="bg-muted rounded-md inline-block mt-3 text-md p-2">
            {dollarsAmount}
          </p>
          <p className="mt-6 leading-8 text-muted-foreground ">{description}</p>
          <AddToCart productId={id} />
        </div>
      </div>
    </section>
  );
}
export default SingleProductPage;
