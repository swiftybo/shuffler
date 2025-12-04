import randomizerIcon from "../../assets/randomize-icon.png"
import wildcardIcon from "../../assets/wildcard-icon.png"
import listIcon from "../../assets/list-icon.png"
import classes from "./ActionButtons.module.css"
import { useFilmContext } from "../../store/film-context"

export default function ActionButtons() {
    const {handleFilmVisibility, handleWildcardVisibility} = useFilmContext()
    
    return (
        <section >
            <button className={classes.actionBtn}>
                <img className={classes.actionBtn__icon} src={randomizerIcon} />
                Randomize
            </button>
            <button className={classes.actionBtn} onClick={handleWildcardVisibility}>
                <img className={classes.actionBtn__icon} src={wildcardIcon} />
                Wildcard
            </button>
            <button className={classes.actionBtn} onClick={handleFilmVisibility}>
                <img className={classes.actionBtn__icon} src={listIcon} />
                View List
            </button>
        </section>
    )
}