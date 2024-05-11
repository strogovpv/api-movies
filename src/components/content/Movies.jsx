import { Movie } from './Movie';

const Movies = ({ movies }) => {
  return movies.map((item) => <Movie className='movies' movie={item} />);
};

export { Movies };
