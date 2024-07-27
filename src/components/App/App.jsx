import { useEffect, useState } from 'react'
import Feedback from '../Feedback/Feedback';
import Options from '../Options/Options';
import Description from '../Description/Description';
import Notification from '../Notification/Notification';

function App() {
  const [feedback, setFeedback] = useState(() => {
    const savedFeedback = localStorage.getItem('feedback');
    return savedFeedback ? JSON.parse(savedFeedback) : { good: 0, neutral: 0, bad: 0 };
  });

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
  return (
      <>
        <Description></Description>
        <Options 
        onTrack={handleClick} 
        feedback={feedback} 
        totalFeedback={totalFeedback()} 
        onReset={handleClickReset} 
      />
        {totalFeedback() === 0 ? <Notification /> : (
        <Feedback 
          feedback={feedback} 
          totalFeedback={totalFeedback()} 
          positiveFeedback={positiveFeedback()} 
        />
      )}
     
      </>
  )
}

export default App;
