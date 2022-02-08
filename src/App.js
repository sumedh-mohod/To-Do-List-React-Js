import React,{ useState } from "react";
import { CourseInput } from "./components/CourseGoals/CourseInput/CourseInput";
import CourseGoalList from "./components/CourseGoals/CourseGoalList/CourseGoalList";

import "./App.css";

const App = () => {
  const [course, setCourse] = useState([{text: 'do all', id:'g1'},
  {text: 'do alllllllll', id:'g2'}]);
  const addGoalHandler = enteredText  => {
    setCourse(prevGoals=>{
     const updatedGoals = [...prevGoals];
     updatedGoals.unshift({ text: enteredText, id: Math.random().toString() });
     return updatedGoals;
     
    })
    
  };

  const deleteItemHandler = goalId => {
    setCourse(prevGoals => {
      const updatedGoals = prevGoals.filter(goal => goal.id !== goalId);
      return updatedGoals;
    });
  };

  let content = (
    <p style={{ textAlign: 'center' }}>No goals found. Maybe add one?</p>
  );
  if (course.length > 0) {
    content = (
      <CourseGoalList items={course} onDelete={deleteItemHandler} />
    );
  }
  return  (
    <div className="App">
      <section id="goal-form">
        <CourseInput onAddGoals={addGoalHandler} />
      </section>
      <section id="goals">
  {content}
      </section>
    </div>
  );
}

export default App;
