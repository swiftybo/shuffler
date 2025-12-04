import ActionButtons from "../components/filmComponents/ActionButtons";
import FilmsViewerSection from "../components/filmComponents/FilmsViewerSection";
import WildcardSection from "../components/filmComponents/WildcardSection";
import CategoryHeader from "../components/generalComponents/CategoryHeader";
import { useFilmContext } from "../store/film-context";

export default function FilmPage() {
  const {filmsVisible, wildcardVisible} = useFilmContext()

  return (
    <main className="content">
      <CategoryHeader />
      <p>3 watched</p>
      <p>3 to watch</p>
      <ActionButtons />
      {wildcardVisible && <WildcardSection />}
      {filmsVisible && <FilmsViewerSection />}
    </main>
  );
}
