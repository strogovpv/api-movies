import { Movies } from "../content/Movies";
function Main({movies}) {
  return (
    <main className="container content movies">
      {movies.length ? (<Movies movies={movies}/>) : (<div>...is loading</div>)}
    </main>
  );
}

export { Main };
