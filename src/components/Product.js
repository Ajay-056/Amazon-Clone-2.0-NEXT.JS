import Image from "next/image";
import { useState } from "react";
import { StarIcon } from "@heroicons/react/solid";

const MAX_RATING = 5;
const MIN_RATING = 1;

function Product({ id, title, price, description, category, image }) {
  const [rating] = useState(
    Math.floor(Math.random() * (MAX_RATING - MIN_RATING + 1)) + MIN_RATING
  );

  const [hasPrime] = useState(Math.random() < 0.5);

  return (
    <div className="relative flex flex-col m-5 bg-white z-30 p-10">
      <p className="absolute  top-3 right-3 text-xs italic font-semibold p-1 rounded-sm bg-green-400">
        {category}
      </p>

      <Image
        src={image}
        height={200}
        width={200}
        style={{ objectFit: "contain", alignSelf: "center", marginTop: "1rem" }}
      />

      <h4 className="my-3">{title}</h4>
      <div className="flex">
        {Array(rating)
          .fill()
          .map((_, i) => (
            <StarIcon className="h-4 text-yellow-500" />
          ))}
      </div>

      <div className="text-xs my-2 line-clamp-2">{description}</div>

      <div className="mb-5">${price}</div>
      {hasPrime && (
        <div className="flex items-center space-x-2 -mt-5">
          <img
            className="w-12"
            src="https://img.icons8.com/color/48/amazon-prime.png"
            alt="Prime Logo"
          />
          <p className="text-xs text-gray-500">FREE Next-Day Delivery</p>
        </div>
      )}

      <button class="mt-auto button">Add to Basket</button>
    </div>
  );
}

export default Product;
