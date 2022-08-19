
import { AiOutlinePlayCircle } from 'react-icons/ai'
import "react-multi-carousel/lib/styles.css";
import Carousel from "react-multi-carousel";

function Hero() {

  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 1200 },
      items: 1
    },
    desktop: {
      breakpoint: { max: 1200, min: 992 },
      items: 1
    },
    tablet: {
      breakpoint: { max: 992, min: 768 },
      items: 1
    },
    mobile: {
      breakpoint: { max: 768, min: 0 },
      items: 1
    }
  };


  // const [movies, setMovies] = useState([]);



  // const getMovies = async () => {
  //   const response = await fetch(`https://yts.mx/api/v2/list_movies.json?`).then(res => res.json());
  //   const man = response.data.movies
  //   setMovies(man[0]);
  // }

  // useEffect(() => {
  //   getMovies();
  // }, []);




  return (
    <>
      <Carousel
       responsive={responsive}
       autoPlay={true}
       infinite={true}
          removeArrowOnDeviceType={["tablet", "mobile" , "desktop" , "superLargeDesktop"]}

      >
      <div className="overflow-hidden relative max-h-[300px] rounded-xl">
        <img src="https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/DC9F38D287C3AE6BB492AA40C20CB826F9D297915B824F2C0F4D8CA8BC640C73/scale?width=2880&aspectRatio=1.78&format=jpeg" loading="lazy" alt="Hero" />
        <div className="absolute sm:top-16 sm:left-16 top-8 left-8">
          <h1 className="text-2xl sm:text-4xl font-bold text-white pb-4">Baymax!  2.0</h1>
          <button className="bg-red-500 flex items-center sm:p-2 p-1 rounded-lg font-bold text-white"> <AiOutlinePlayCircle size={20} /><span className="block  pl-2">Watch Now</span></button>
        </div>
      </div>

      <div className="overflow-hidden relative max-h-[300px] rounded-xl">
        <img src="https://cdn.mos.cms.futurecdn.net/NJXQ8h3mUd9mhsh2m8xpba.jpg" loading="lazy" alt="Hero" />
        <div className="absolute sm:top-16 sm:left-16 top-8 left-8">
          <h1 className="text-2xl sm:text-4xl font-bold text-white pb-4">Doctor Strange </h1>
          <button className="bg-red-500 flex items-center sm:p-2 p-1 rounded-lg font-bold text-white"> <AiOutlinePlayCircle size={20} /><span className="block  pl-2">Watch Now</span></button>
        </div>
      </div>

      <div className="overflow-hidden relative max-h-[300px] rounded-xl">
        <img src="https://www.lyricshindi.live/wp-content/uploads/2022/01/maxresdefault-4.jpg" loading="lazy" alt="Hero" />
        <div className="absolute sm:top-16 sm:left-16 top-8 left-8">
          <h1 className="text-2xl sm:text-4xl font-bold text-[#ffe74a] pb-4">Jai Bhim</h1>
          <button className="bg-red-500 flex items-center sm:p-2 p-1 rounded-lg font-bold text-white"> <AiOutlinePlayCircle size={20} /><span className="block  pl-2">Watch Now</span></button>
        </div>
      </div>

      <div className="overflow-hidden relative max-h-[300px] rounded-xl">
        <img src="https://jbt-en-images.s3.ap-south-1.amazonaws.com/wp-content/uploads/2021/11/10170529/don-release-dat.jpg" loading="lazy" alt="Hero" />
        <div className="absolute sm:top-16 sm:left-16 top-8 left-8">
          <h1 className="text-2xl sm:text-4xl font-bold text-[#ff3313] pb-4">Don</h1>
          <button className="bg-red-500 flex items-center sm:p-2 p-1 rounded-lg font-bold text-white"> <AiOutlinePlayCircle size={20} /><span className="block  pl-2">Watch Now</span></button>
        </div>
      </div>
      </Carousel>;
    </>

  )
}

export default Hero