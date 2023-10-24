import React, { useState, useEffect } from 'react';
import CardMovies from "../../components/CardMovies";
import ApiService from "../../service/service";

const Home = () => {
    const [movies, setMovies] = useState([]);
    const [page, setPage] = useState(1);

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
      <div className="bg-gray-900 min-h-screen flex px-10">
        <CardMovies movies={movies}/>
      </div>
    </>
  );
};

export default Home;
