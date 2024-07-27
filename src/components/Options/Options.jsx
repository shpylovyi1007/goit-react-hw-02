import css from "./Options.module.css"
import clsx from 'clsx';

const Options = ({onTrack, feedback, totalFeedback, onReset} ) => {
   
    const containerButton = clsx(css.container)
    return <div className={containerButton} >
    <button onClick={() =>onTrack("good")}>Good: {feedback.good}</button>
    <button onClick={() =>onTrack("neutral")}>Neutral: {feedback.neutral}</button>
    <button onClick={() =>onTrack("bad")}>Bad: {feedback.bad}</button>
    {totalFeedback > 0 && (
        <button onClick={onReset}>
          Reset
        </button>
      )}
    </div>
}

export default Options;