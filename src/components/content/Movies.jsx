import { Movie } from './Movie';

const Movies = (props) => {
  const { movies=[] } = props;
  return (
    <div className='movies'>
      {movies.length ? movies.map((movieItem) => (
        <Movie movie={movieItem} key={movieItem.imdbID} />
      )) : <h4>Nothing found</h4>}
    </div>
  );
};

export { Movies };
