import Link from "next/link";
import { Button } from "../ui/button";

function Hero() {
  return (
    <section className="grid grid-col-1 lg:grid-col-2 gap-24 items-center">
      <div>
        <h1 className="max-w-2xl text-4xl font-bold tracking-tight sm:text-6xl">
          we are changing the people shop
        </h1>
        <p className="mt-8 max-w-xl text-lg leading-8 text-muted-foreground">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident
          expedita id doloribus, placeat, quis quod molestiae autem voluptates,
          eligendi asperiores magnam mollitia quaerat quidem veniam labore
          recusandae nostrum fuga laudantium.
        </p>
        <Button asChild className="mt-10" size={`lg`}>
          <Link href="/products">Our Products</Link>
        </Button>
      </div>
    </section>
  );
}
export default Hero;
