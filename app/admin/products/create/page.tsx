import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { faker } from "@faker-js/faker";
import { Label } from "@/components/ui/label";

const createProductAction = async (formData: FormData) => {
  "use server";
  const name = formData.get("name");
  console.log(name);
};

function CreateProductPage() {
  const name = faker.commerce.productName();
  const company = faker.company.name();
  const description = faker.lorem.paragraph({ min: 10, max: 12 });
  return (
    <section>
      <h1 className="text-2xl font-semibold mb-4">Create Product</h1>
      <div className="border p-8 rounded-md">
        <form action={createProductAction}>
          <div className="mb-2 space-y-1.5">
            <Label htmlFor="name">Product Name</Label>
            <Input type="text" name="name" id="name" />
          </div>
          <Button type="submit" size="lg">
            Submit
          </Button>
        </form>
      </div>
    </section>
  );
}
export default CreateProductPage;
