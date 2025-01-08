import React, { useState, useCallback } from "react";
import { FaChevronLeft, FaChevronRight, FaStar} from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import ContentWrapper from "../../../components/contentWrapper/ContentWrapper";
import CircleRating from "../../../components/circleRating/CircleRating";
import Genres from "../../../components/genres/Genres";
import useFetch from "../../../hooks/useFetch";
import "./style.scss";

const HeroBanner = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isHovering, setIsHovering] = useState(false);

  const navigate = useNavigate();

  const { data, loading, error } = useFetch("/movie/upcoming");
  const movies = data?.results?.slice(0, 5) || [];

  const nextSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev + 1) % movies.length);
  }, [movies]);

  const prevSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev - 1 + movies.length) % movies.length);
  }, [movies]);


  React.useEffect(() => {
    let interval;
    if (!isHovering && movies.length > 0) {
      interval = setInterval(nextSlide, 5000);
    }
    return () => clearInterval(interval);
  }, [isHovering, movies, nextSlide]);

  if (loading) return <div className="heroBanner loading">Loading...</div>;
  if (error) return <div className="heroBanner error">{error.message}</div>;
  if (movies.length === 0) return <div className="heroBanner noData">No movies available.</div>;

  return (
    <div
      className="heroBanner"
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
    >
        <ContentWrapper>
      {movies.map((movie, index) => (
        <div
          key={movie.id}
          className={`slide ${index === currentSlide ? "active" : ""}`}
          style={{
            backgroundImage: `url(https://image.tmdb.org/t/p/original${movie.backdrop_path})`,
          }}
        >
          <div className="overlay"></div>
          <div className="content">
            <h1
              className="title"
              onClick={() => navigate(`/movie/${movie.id}`)}
            >
              {movie.title}
            </h1>
            <div className="info">
                <CircleRating rating={movie.vote_average.toFixed(1)}/>
                <Genres data={movie.genre_ids.slice(0, 2)}/>
            </div>
            <p className="overview">{movie.overview}</p>
          </div>
        </div>
      ))}
      <button className="sliderButton prev" onClick={prevSlide}>
        <FaChevronLeft size={24} />
      </button>
      <button className="sliderButton next" onClick={nextSlide}>
        <FaChevronRight size={24} />
      </button>
      <div className="dots">
        {movies.map((_, index) => (
          <span
            key={index}
            className={`dot ${index === currentSlide ? "activeDot" : ""}`}
            onClick={() => setCurrentSlide(index)}
          ></span>
        ))}
      </div>
      </ContentWrapper>
    </div>
  );
};

export default HeroBanner;
