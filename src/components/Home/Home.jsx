import React ,{useEffect , useState} from 'react'
import axios from "axios"
import { Link } from 'react-router-dom';
import { BiPlay } from "react-icons/bi";
import { AiOutlinePlus } from "react-icons/ai";

const apiKey = "7e5122f42b3d47b2f9c1deaf4e1d2214";
const url = "https://api.themoviedb.org/3";
const imgUrl = "https://image.tmdb.org/t/p/original";


const upcoming = "upcoming";
const nowPlaying = "now_playing";
const popular = "popular";
const topRated = "top_rated"; 

const Home = () => {

const [upcomingmovie, setupcomingmovie] = useState([])
const [nowplayingmovie, setnowplayingmovie] = useState([])
const [popularmovie, setpopularmovie] = useState([])
const [TopRatedmovie, setTopRatedmovie] = useState([])
const [genre, setGenre] = useState([]);


  useEffect(() => {

  const fetchupcoming = async() => {
   const {data : {results}  } = await axios.get(`${url}/movie/${upcoming}?api_key=${apiKey}`); 
   setupcomingmovie(results)
  };
  const fetchnowplaying = async() => {
   const {data : {results}  } = await axios.get(`${url}/movie/${nowPlaying}?api_key=${apiKey}`); 
   setnowplayingmovie(results)
  };
  const fetchpopular= async() => {
   const {data : {results}  } = await axios.get(`${url}/movie/${popular}?api_key=${apiKey}`); 
   setpopularmovie(results)
  };
  const fetchTopRated  = async() => {
   const {data : {results}  } = await axios.get(`${url}/movie/${topRated}?api_key=${apiKey}`); 
   setTopRatedmovie(results)
  };
  const getAllGenre = async () => {
    const {
        data: { genres },
    } = await axios.get(`${url}/genre/movie/list?api_key=${apiKey}`);
    setGenre(genres);
    console.log(genres);
};




  

getAllGenre();
fetchupcoming();
fetchnowplaying();
fetchpopular();
fetchTopRated();
  
  }, [])




  const Card = ({img}) => (

    
 <img className="card" src={img} alt="cover"  />
  
  )
  const Row = ({title, arr = [
    
  ]}) => (

 <div className="row"> 
  <h2>{title}</h2>

  <div>
  {
    arr.map( (item , index) => (
      <Card key={index} img={`${imgUrl}/${item.poster_path} `} />

    ))
  }
  </div>
 </div>
  )

  return (
    <>  

    
    
      <section className="home">



      <div
                className="banner"
                style={{
                    backgroundImage: popularmovie[0]
                        ? `url(${`${imgUrl}/${popularmovie[0].poster_path}`})`
                        : "rgb(16, 16, 16)",
                }}
            >
        

       { popularmovie[0] && 
        (
          <h1>{ popularmovie[0].original_title }</h1>
        )}
        { popularmovie[0] && 
        (
        <p>{popularmovie[0].overview}</p>
        )}
      <div className="flex">
        <button className="btn"> <BiPlay /> Play  </button>
        <button className="btn">My List <AiOutlinePlus /> </button>
      </div>

      </div> 










    <Row title={"upcoming Movies"} arr={upcomingmovie}/>
    <Row title={"Now playing Movies"} arr={nowplayingmovie}/>
    <Row title={"Most Popular "} arr={popularmovie}/>
    <Row title={"Top Rated Movies"} arr={TopRatedmovie}/>
    

    
    <div className="genreBox">
                {genre.map((item) => (
                    <Link key={item.id} to={`/genre/${item.id}`}>
                        {item.name}
                    </Link>
                ))}
            </div>

    </section>
    </>

  )
}

export default Home



