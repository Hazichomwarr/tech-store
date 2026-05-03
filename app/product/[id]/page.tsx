import { productCatalog } from "@/lib/products";

export default async function ProductPage({
  params,
}: {
  params: Promise<{ id: number }>;
}) {
  const { id } = await params;
  const product = productCatalog.find((p) => p.id === id);

  if (!product) return <div>Not found</div>;

  return (
    <div className="bg-white min-h-screen px-6 py-10">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-start">
        {/* Image */}
        <div className="bg-gray-100 rounded-2xl h-87.5 flex items-center justify-center text-gray-400">
          Product Image
        </div>

        {/* Info */}
        <div>
          <h1 className="text-3xl font-bold mb-2">{product.name}</h1>

          <p className="text-blue-600 text-2xl font-semibold mb-4">
            {product.price}
          </p>

          <span className="inline-block bg-green-100 text-green-600 text-sm px-3 py-1 rounded-full mb-4">
            In Stock
          </span>

          <p className="text-gray-600 mb-6">{product.desc}</p>

          <ul className="text-sm text-gray-500 mb-6 space-y-2">
            <li>✔ Tested product</li>
            <li>✔ Quality guaranteed</li>
            <li>✔ Available in store</li>
          </ul>

          <div className="flex gap-4">
            <button className="bg-blue-500 text-white px-6 py-3 rounded-xl">
              Visit Store
            </button>

            <button className="border px-6 py-3 rounded-xl">
              Ask on WhatsApp
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
