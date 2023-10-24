import React from "react";
import { Link } from "react-router-dom";
const CardMovies = () => {
  return (
    <>
    <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80">
        <Link to="/detail/123">
            <img src="https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-01.jpg" alt="Front of men&#039;s Basic Tee in black." className="h-full w-full object-cover object-center lg:h-full lg:w-full"/>
        </Link>
    </div>
    <div className="mt-1 flex justify-between">
        <div>
            <h3 className="text-sm text-gray-500">
                <span>
                Basic Tee
                </span>
            </h3>
        </div>
    </div>
    </>
  );
};

export default CardMovies;
