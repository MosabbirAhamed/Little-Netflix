
import React, { useEffect, useState } from 'react'
import MovieCard from './MovieCard'
import Carousel from "react-multi-carousel";
import Spinner  from 'react-spinkit';
import "react-multi-carousel/lib/styles.css";
import {AiOutlineClose} from 'react-icons/ai'



function MovieList({ title, filter, carousel = false, speed = 1000 }) {

  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 1200 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 1200, min: 992 },
      items: 4
    },
    tablet: {
      breakpoint: { max: 992, min: 768 },
      items: 3
    },
    mobile: {
      breakpoint: { max: 768, min: 0 },
      items: 2
    }
  };


  const [movies, setMovies] = useState([]);
  const [details, setDetails] = useState(null);
  const [loding, setLoding] = useState(false);



  const getMovies = async () => {
    setLoding(true);
    const response = await fetch(`https://yts.mx/api/v2/list_movies.json?${filter}`).then(res => res.json());
  
    setTimeout(() => {
      setMovies(response.data.movies);

      setLoding(false);
    }, 2000);
  }

  useEffect(() => {
    getMovies();
  }, []);



  return (
    <div className="my-8">
      <h1 className="text-gray-100 mb-5 text-2xl font-medium">{title}</h1>
      {loding &&(
        <div className="flex py-5 justify-center">
      <Spinner name="line-scale" color="rgb(59 204 255)"/>
      </div>
      )}
      {movies.length > 0 && (
      <>

      {carousel ? (
        <Carousel
          autoPlay={true}
          infinite={true}
          autoPlaySpeed={speed}
          removeArrowOnDeviceType={["tablet", "mobile"]}
          keyBoardControl={true}
          responsive={responsive}>
          {movies?.map(movie => (
            <MovieCard onClick={() => setDetails(movie)}  key={movie?.id} {...movie} />
          ))}
        </Carousel>
      ) : (
        <div className="my-5 flex flex-wrap items-start ">
          {movies?.map(movie => (
            <MovieCard onClick={() => setDetails(movie)} movie={movie} key={movie?.id} {...movie} />
          ))}
        </div>
      )};


    </>
      )}



      {details && (
        <div className="fixed bg-black bg-opacity-90 w-screen h-screen top-0 left-0 z-[99999999] ">
          <span className="text-[#6DD5FA] text-3xl absolute top-10 sm:right-[15%] right-10 " onClick={() => setDetails(null)}><AiOutlineClose size="35"/></span>
          <div className="flex flex-col space-y-3 items-center max-w-5xl mx-auto pt-24 px-6">
          <div className="w-[45%]"><img className="w-[100%] max-h-[420px] border border-white rounded-xl" src={details?.large_cover_image} alt="" /></div>
          <h1 className="text-center text-3xl font-bold text-[#6DD5FA]">{details?.title}</h1>
          
          <div className="flex items-center space-x-5">
            <span className="text-gray-400 block">{details?.year}</span>
            <span className="text-white block">{details?.language.toUpperCase()}</span>
          </div>
          <a className='text-white bg-red-600 px-2 py-1 text-lg rounded-lg'target="_blank" rel="noopener" href={details?.url}>Download</a>
          </div>
        </div>
      )};




    </div>
  )
};

export default MovieList