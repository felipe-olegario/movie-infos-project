import React from "react";
import CardMovies from "../../components/CardMovies";

const Home = () => {
  return (
    <>
      <div className="bg-gray-900 min-h-screen flex px-10">
        <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
          <div className="group relative">
            <CardMovies/>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
