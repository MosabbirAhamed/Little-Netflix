
import './App.css';
import Nav from './components/Nav/Nav';
import Hero from './components/Hero/Hero';
import MovieList from './components/MovieList/MovieList';

function App() {
  return (
    <div>
      <div className="max-w-5xl mx-auto px-6">
        <Nav />
        <Hero />
        <MovieList
          title="Top Rated Movies 🔥"
          filter="sort_by=rating"
          carousel={true}
          speed={2500}
        />

        <MovieList
          title="Action 🔫"
          filter="genre=action"
          carousel={true}
          speed={1500}
        />
        <MovieList
          title="Drama 🎭"
          filter="genre=drama"
          carousel={true}
          speed={2500}
        />
        <MovieList
          title="Thriller 🔪"
          filter="genre=thriller"
          carousel={true}
          speed={1500}
        />
        <MovieList
          title="Romance 💘"
          filter="genre=romance"
          carousel={true}
          speed={2500}
        />
        <MovieList
          title="Horror 🤯"
          filter="genre=horror"
          carousel={true}
          speed={1500}
        />

        <MovieList
          title="Animation 🎭"
          filter="genre=animation"
          carousel={true}
          speed={2500}
        />
        <MovieList
          title="comedy 🤣"
          filter="genre=comedy"
          carousel={true}
          speed={1500}
        />
        <MovieList
          title="Adventure 🏃"
          filter="genre=adventure"
          carousel={true}
          speed={2500}
        />
        <MovieList
          title="Family 🤗"
          filter="genre=family"
          carousel={true}
          speed={2500}
        />
        <MovieList
          title="Sci-Fi 🧠"
          filter="genre=sci-fi"
          carousel={true}
          speed={2500}
        />
      </div>
      <div className="text-white text-center text-lg py-5">Build with 💖 by <a className="text-orange-500 font-semibold" href="https://mosabbirahamed.github.io/Portfolio-/"> Mosabbir Ahamed</a></div>
    </div>
  );
}

export default App;
