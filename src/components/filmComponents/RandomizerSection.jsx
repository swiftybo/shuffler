export default function RandomizerSection({allFilms}) {
    function pickRandomMovie() {
        console.log(Math.floor(Math.random() * allFilms.length))
    }

    pickRandomMovie()
    
    return (
        <div>Randomizer Section</div>
    )
}