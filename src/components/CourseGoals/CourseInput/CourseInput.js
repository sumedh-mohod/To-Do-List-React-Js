import React, { useState } from 'react';
import Button from '../UI/Button/Button';
import "./CourseInput.css";

  export const CourseInput = props => {
    const [enteredValue, setEnteredValue] = useState(" ");

    const goalInputChangeHandeler = e => {
        setEnteredValue(e.target.value);

    }

    const formSubmitHandler = (e) => {
        e.preventDefault();
        // console.log(enteredValue);
        props.onAddGoals(enteredValue);

    }


    return (<div>
        <form onSubmit={formSubmitHandler}>
            <div className='form-control'>
                <label>Course goal</label>
                <input type="text" onChange={goalInputChangeHandeler} />

            </div>
            <Button type="submit">Add goals</Button>
        </form>
    </div>
    );
};
