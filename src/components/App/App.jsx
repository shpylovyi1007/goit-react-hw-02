import { useEffect, useState } from 'react'
import Feedback from '../Feedback/Feedback';
import Options from '../Options/Options';
import Description from '../Description/Description';
import Notification from '../Notification/Notification';
import css from "./App.module.css"
import clsx from 'clsx';


function App() {
  const [feedback, setFeedback] = useState(() => {
    const savedFeedback = localStorage.getItem('feedback');
    return savedFeedback ? JSON.parse(savedFeedback) : { good: 0, neutral: 0, bad: 0 };
  });

  useEffect(() => {
    localStorage.setItem('feedback', JSON.stringify(feedback));
  }, [feedback]);

useEffect(() => {
  localStorage.setItem('feedback', JSON.stringify(feedback));
}, [feedback]);

const handleClickReset = () => {
  setFeedback({
    good: 0,
    neutral: 0,
    bad: 0
  })
};

const handleClick = key => {
  setFeedback({
    ...feedback,
    [key]: feedback[key] + 1
  })
};

 const totalFeedback = () => {
 return feedback.good + feedback.neutral + feedback.bad;
};
  
const positiveFeedback = () => {
 return  Math.round((feedback.good / totalFeedback()) * 100);
};
const containerButton = clsx(css.container)
  return (
    <>
    <Description></Description>
    <div className={containerButton} >
      <Options onTrack={() => handleClick("good")}>Good</Options>
      <Options onTrack={() => handleClick("neutral")}>Neutral</Options>
      <Options onTrack={() => handleClick("bad")}>Bad</Options>
      {totalFeedback() >0 && <Options onTrack={handleClickReset}>Reset</Options>}
    </div>
    {totalFeedback() === 0 && <Notification/>}
     {totalFeedback() >= 1 && <Feedback value={feedback.good} >Good</Feedback>}
     {totalFeedback() >= 1 && <Feedback value={feedback.neutral}>Neutral</Feedback>}
     {totalFeedback() >= 1 && <Feedback value={feedback.bad}>Bad</Feedback>}
     {totalFeedback() >= 1 && <Feedback value={totalFeedback()}>Total</Feedback>}
     {totalFeedback() >= 1 && <Feedback value={`${positiveFeedback()}%`}>Positive</Feedback>}
    </>
  )
}

export default App
