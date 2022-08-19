import {AiFillStar} from 'react-icons/ai'

function MovieCard({medium_cover_image = "https://thumbs.dreamstime.com/b/movie-text-blue-grungy-vintage-stamp-movie-text-blue-grungy-vintage-rectangle-stamp-212480140.jpg", title_long, rating, year, onClick}) {

  return (
    <div onClick={onClick} className="max-w-44 bg-slate-700 mr-4 mb-3 p-2 rounded-md hover:-translate-y-1 transition-all duration-100 cursor-pointer">
        <img className="rounded-md" src={medium_cover_image} alt="Cover" />
      <div className="mt-1">
        <h1 className="text-white text-md truncate font-medium" title={title_long}>{title_long}</h1>

        <div className="flex pt-1 space-x-3 items-center">
        <div className="border border-orange-400 space-x-1 rounded-md text-orange-400 px-1  flex items-center w-fit">
          <AiFillStar size={15} className="" />

          <span className="text-sm">{rating}</span>
        </div>
        <span className="text-xs text-gray-400">
          {year}
        </span>
        </div>
      </div>
    </div>
  )
}

export default MovieCard