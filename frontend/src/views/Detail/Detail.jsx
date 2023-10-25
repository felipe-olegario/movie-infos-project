import { useParams } from "react-router-dom"
import React, { useState, useEffect } from 'react';
import Navbar from "../../components/Navbar";
import ApiService from "../../service/service";

export default function Detail() {
    const [moviDetail, setMovieDetail] = useState([])
    const { movieId } = useParams()

    useEffect(() => {
        const fetchData = async (movieId) => {
            const result = await ApiService.getDetail(movieId);
            setMovieDetail(result);
        };
        fetchData(movieId);
    }, []);
    const posterBaseUrl = "https://image.tmdb.org/t/p/w500";
    return (
        <>
            <Navbar />
            <div className="flex bg-gray-900 p-4">
                <img src={posterBaseUrl + moviDetail.poster_path} className="rounded" />
                <ul role="list" className="divide-y divide-gray-100 flex flex-col items-center ml-5">
                    <li className="gap-x-6 py-5">
                        <div className="flex min-w-0 gap-x-4">
                            <div className="min-w-0 flex-auto text-gray-100">
                                <h1 className="text-5xl mb-5 text-amber-400">{moviDetail.title}</h1>
                                <p className="mt-1 text-gray-100"><span className="text-amber-400 text-xl">DATA DE LANÇAMENTO:</span> {moviDetail.release_date}</p>
                                <p className="mt-1 text-gray-100"><span className="text-amber-400 text-xl">NOTA TMDB:</span> {moviDetail.vote_average}</p>
                                <div class="max-w-2xl mx-auto mt-1">
                                    <p class="text-lg leading-relaxed break-words">
                                        <span className="text-amber-400 text-xl">DESCRIPTION:</span> {moviDetail.overview}
                                    </p>
                                </div>
                            </div>
                        </div>
                    </li>
                </ul>
            </div>
        </>
    )
}