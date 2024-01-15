import SubmitButton from "@/components/SubmitButton";
import { prisma } from "@/lib/db/prisma";
import { redirect } from "next/navigation";

export const metadata = {
  title: "Add product - Alimazon",
};

async function addProduct(formData: FormData) {
  "use server";
  const name = formData.get("name")?.toString();
  const image = formData.get("imageUrl")?.toString();
  const description = formData.get("description")?.toString();

  const price = Number(formData.get("price") || 0);

  if (!name || !description || !price || !image) {
    throw new Error("Missing required fields");
  }

  await prisma.product.create({
    data: {
      name,
      description,
      image,
      price,
    },
  });
  redirect("/");
}

const AddProductPage = () => {
  return (
    <div>
      <h1 className="mb-3 text-lg font-bold">AddProductPage</h1>
      <form action={addProduct}>
        <input
          required
          name="name"
          placeholder="Name"
          className="input-bordered input mb-2 w-full"
        />
        <input
          required
          name="imageUrl"
          placeholder="image Url"
          type="url"
          className="input-bordered input mb-2 w-full"
        />
        <input
          required
          name="price"
          type="number"
          placeholder="Price"
          className="textarea-bordered textarea mb-2 w-full"
        />
        <textarea
          required
          name="description"
          placeholder="description"
          className="textarea-bordered textarea mb-2 w-full"
        />
        <SubmitButton className="btn-block ">Add Product</SubmitButton>
      </form>
    </div>
  );
};

export default AddProductPage;
