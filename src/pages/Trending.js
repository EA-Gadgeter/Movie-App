import React from 'react';
import { useFetchTrending } from "../hooks/useFetchTrending";
import { MovieCard } from '../components/MovieCard';
import { TrendingFilterButtons } from "../components/TrendingFilterButtons";

export const Trending = () => {

  const { movies } = useFetchTrending();
  const [filter, setFilter] = React.useState("all");

  let filteredContent;

  if (filter === "all") {
    filteredContent = movies;
  } else {
    console.log(filter);
    filteredContent = movies.filter(movie => movie.media_type === filter);
  }

  return (
    <>
      <TrendingFilterButtons filter={filter} setFilter={setFilter} />
      <div className="container-fluid mx-auto row row-cols-1 row-cols-md-3 g-3">
        {filteredContent.map(movie =>
          <MovieCard key={movie.id} {...movie} />
        )}
      </div>
    </>
  )
}