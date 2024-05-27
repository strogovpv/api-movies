import { Movie } from './Movie';

const Movies = (props) => {
  const { movies } = props;
  return (
    <div className='movies'>
      {movies.map((movieItem) => (
        <Movie movie={movieItem} key={movieItem.imdbID} />
      ))}
    </div>
  );
};

export { Movies };
