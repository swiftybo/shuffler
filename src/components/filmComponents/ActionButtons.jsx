import randomizerIcon from "../../assets/randomize-icon.png"
import wildcardIcon from "../../assets/wildcard-icon.png"
import listIcon from "../../assets/list-icon.png"
import classes from "./ActionButtons.module.css"

export default function ActionButtons() {
    return (
        <section >
            <button className={classes.actionBtn}>
                <img className={classes.actionBtn__icon} src={randomizerIcon} />
                Randomize
            </button>
            <button className={classes.actionBtn}>
                <img className={classes.actionBtn__icon} src={wildcardIcon} />
                Wildcard
            </button>
            <button className={classes.actionBtn}>
                <img className={classes.actionBtn__icon} src={listIcon} />
                View List
            </button>
        </section>
    )
}