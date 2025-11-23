import Image from "next/image";

interface Product {
  id: number;
  name: string;
  category: string;
  image: string;
  price: string;
}

export default function ProductCard({ product }: { product: Product }) {
  return (
    <div className="group relative bg-neutral-900 rounded-lg overflow-hidden border border-neutral-800 hover:border-red-600/50 transition-all duration-500">
      <div className="relative h-64 w-full overflow-hidden">
        <Image
          src={product.image}
          alt={product.name}
          fill
          className="object-cover transition-transform duration-700 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors duration-500" />
      </div>

      <div className="p-6">
        <div className="flex justify-between items-start mb-2">
          <div>
            <span className="text-xs text-red-500 uppercase tracking-wider font-bold">
              {product.category}
            </span>
            <h3 className="text-xl font-bold text-white mt-1">
              {product.name}
            </h3>
          </div>
          <span className="text-neutral-400 font-mono text-sm">
            {product.price}
          </span>
        </div>

        <button className="w-full mt-4 py-3 border border-neutral-700 text-neutral-300 hover:bg-red-600 hover:border-red-600 hover:text-white transition-all duration-300 uppercase text-sm font-bold tracking-wider">
          View Details
        </button>
      </div>
    </div>
  );
}
