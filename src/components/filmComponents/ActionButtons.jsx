import randomizerIcon from "../../assets/randomize-icon.png"
import wildcardIcon from "../../assets/wildcard-icon.png"
import listIcon from "../../assets/list-icon2.png"
import classes from "./ActionButtons.module.css"
import { useFilmContext } from "../../store/film-context"

export default function ActionButtons() {
    const {handleFilmVisibility, handleWildcardVisibility, handleRandomizerVisibility} = useFilmContext()
    
    return (
        <section className={classes.actionButtons}>
            <button style={{backgroundImage: "linear-gradient(to right, rgba(42, 151, 240, 1) , rgba(7, 117, 207, 1))", backgroundColor: "rgba(0, 73, 107, 1)", color: "white"}} className={classes.actionBtn} onClick={handleRandomizerVisibility}>
                <img className={classes.actionBtn__icon} src={randomizerIcon} />
                Randomize
            </button>
            <button style={{backgroundImage: "linear-gradient(to right, rgba(144, 42, 240, 1) , rgba(248, 90, 90, 1))", color: "white"}} className={classes.actionBtn} onClick={handleWildcardVisibility}>
                <img className={classes.actionBtn__icon} src={wildcardIcon} />
                Wildcard
            </button>
            <button style={{backgroundColor: "white", color: "rgba(180, 0, 0, 1)"}} className={classes.actionBtn} onClick={handleFilmVisibility}>
                <img className={classes.actionBtn__icon} src={listIcon} />
                View List
            </button>
        </section>
    )
}