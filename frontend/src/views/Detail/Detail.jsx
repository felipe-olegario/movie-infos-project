import { useParams } from "react-router-dom"

  export default function Detail() {
    const { movieId } = useParams()
    const posterBaseUrl = "https://image.tmdb.org/t/p/w500/b0Ej6fnXAP8fK75hlyi2jKqdhHz.jpg";
    return (
        <div className="flex bg-gray-900 p-4">
            <img src={posterBaseUrl} className="rounded"/>
            <ul role="list" className="divide-y divide-gray-100 flex flex-col items-center ml-5">
                <li className="gap-x-6 py-5">
                    <div className="flex min-w-0 gap-x-4">
                    <div className="min-w-0 flex-auto">
                        <p className="text-sm font-semibold leading-7 text-white">NAME MOVIE</p>
                        <p className="mt-1 truncate text-xs leading-6 text-gray-100">DIRECTOR</p>
                        <p className="mt-1 truncate text-xs leading-6 text-gray-100">DATA DE LANÇAMENTO</p>
                        <p className="mt-1 truncate text-xs leading-6 text-gray-100">NOTA TMDB</p>
                        <p className="mt-1 truncate text-xs leading-6 text-gray-100">DESCRIPTION</p>
                    </div>
                    </div>
                </li>
            </ul>
        </div>
    )
  }