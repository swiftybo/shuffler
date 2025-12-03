import ActionButtons from "../components/filmComponents/ActionButtons";
import AvailableFilms from "../components/filmComponents/AvailableFilms";
import CategoryHeader from "../components/generalComponents/categoryHeader";

export default function FilmPage() {
  return (
    <main className="content">
      <CategoryHeader />
      <p>3 watched</p>
      <p>3 to watch</p>
      <ActionButtons />
      <AvailableFilms />
    </main>
  );
}
