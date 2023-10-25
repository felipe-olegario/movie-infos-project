import React, { useState, useEffect } from 'react';
import CardMovies from "../../components/CardMovies";
import ApiService from "../../service/service";
import Navbar from '../../components/Navbar';
import {
  useQuery,
  useQueryClient,
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query'

const Home = () => {
  const queryClient = new QueryClient()
  const [page, setPage] = React.useState(1)
  const [searchTerm, setSearchTerm] = React.useState('')

  const { isLoading, error, data, isPreviousData } = useQuery({
    queryKey: ['repoData'],
    queryFn: () =>
      ApiService.listMovies(page),
  })

  React.useEffect(() => {
    const { scrollTop, scrollHeight, clientHeight } = document.documentElement;

    const handleScroll = (page) => {
      console.log('scrollTop', scrollTop);
      console.log('scrollHeight', scrollHeight);
      debugger
      if (scrollTop + clientHeight >= scrollHeight - 1) {
        setPage((prevPage) => prevPage + 1);
        queryClient.prefetchQuery({
          queryKey: ['projects', page + 1],
          queryFn: () => ApiService.listMovies(page),
        })
      }
    }
      window.addEventListener('scroll', handleScroll);

      return () => {
        window.removeEventListener('scroll', handleScroll);
      };
  }, [data, isPreviousData, page, queryClient])

  return (
    <>
      {isLoading ? (<p>Loading...</p>) : <>
        <Navbar setSearchTerm={setSearchTerm} searchTerm={searchTerm} />
        <div className="bg-gray-900 min-h-screen flex px-10">
          <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
            {data.map((movie) => (
              <CardMovies key={movie.id} movie={movie} />
            ))}
          </div>
        </div>
      </>}
    </>
  )
};

export default Home;
