import ActionButtons from "../components/filmComponents/ActionButtons";
import RandomizerSection from "../components/filmComponents/RandomizerSection";
import FilmsViewerSection from "../components/filmComponents/FilmsViewerSection";
import WildcardSection from "../components/filmComponents/WildcardSection";
import CategoryHeader from "../components/generalComponents/CategoryHeader";
import { useFilmContext } from "../store/film-context";

export default function FilmPage() {
  const {filmsVisible, wildcardVisible, randomizerVisible, fetchedFilms} = useFilmContext()

  return (
    <main className="content">
      <CategoryHeader films={fetchedFilms}/>
      {/* <p>3 watched</p>
      <p>3 to watch</p> */}
      <ActionButtons />
      {randomizerVisible && <RandomizerSection />}
      {wildcardVisible && <WildcardSection />}
      {filmsVisible && <FilmsViewerSection />}
    </main>
  );
}
