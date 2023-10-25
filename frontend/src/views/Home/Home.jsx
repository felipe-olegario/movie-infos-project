import React, { useState, useEffect } from 'react';
import CardMovies from "../../components/CardMovies";
import ApiService from "../../service/service";
import Navbar from "../../components/Navbar";


const Home = () => {
  const [movies, setMovies] = useState([]);
  const [page, setPage] = useState(1);
  const [searchTerm, setSearchTerm] = React.useState('')

  useEffect(() => {
    const fetchData = async (currentPage) => {
      const result = await ApiService.listMovies(currentPage);
      setMovies((prevMovies) => [...prevMovies, ...result]);
    };
    fetchData(page);
  }, [page]);

  useEffect(() => {
    const handleScroll = () => {
      const { scrollTop, scrollHeight, clientHeight } = document.documentElement;

      if (scrollTop + clientHeight >= scrollHeight - 1 && scrollTop !== 0 && scrollHeight !== 0) {
        setPage((prevPage) => prevPage + 1);
        console.log('Usuário chegou ao final da página.');
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <>
      <Navbar setSearchTerm={setSearchTerm} searchTerm={searchTerm} />
      <div className="bg-gray-900 min-h-screen flex px-10">
        <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
          {movies.map((movie) => (
            <CardMovies key={movie.id} movie={movie} />
          ))}
        </div>
      </div>
    </>
  );
};

export default Home;
