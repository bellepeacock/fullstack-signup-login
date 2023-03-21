import React from "react";
import { useState } from "react";


const Day = () => {

    const possibleSymptoms = [
        {
            name: "sneezing and coughing",
            // selected: false
        },
        {
            name: "runny or blocked nose",
            // selected: false
        },
        {
            name: "itchy, red or watery eyes",
            // selected: false
        },
        {
            name: "itchy throat, mouth, nose, ears",
            // selected: false
        },
        {
            name: "loss of smell",
            // selected: false
        }, 
        {
            name: "pain around temple or forehead",
            // selected: false
        },
        {
            name: "headache",
            // selected: false
        },
        {
            name: "earache",
            // selected: false
        }, 
        {
            name: "tiredness",
            // selected: false
        }];

        // let s = possibleSymptoms[0];

        // tell the DOM what to toggle between when doing so between checked and unchecked
        const [checkedState, setCheckedState] = useState(
            new Array(possibleSymptoms.length).fill(false)
        );

        const [userSymptoms, setUserSymptoms] = useState([ ...possibleSymptoms]);

        //loop over the checkedState array using the array map method. 
        //If the value of the passed position parameter matches with the current index, then we reverse its value. Then, if the value is true it will be converted to false using !item and if the value is false, then it will be converted to true.
        const handleOnChange = (position) => {
        const updatedCheckedState = checkedState.map((s, index) =>
            index === position ? !s : s
        )
        setCheckedState(updatedCheckedState);
        //and if the symptom is checked, then add it to userSymptoms array
        const updatedUserSymptoms = possibleSymptoms.map((s, index) =>
            index !== position ? !s : userSymptoms.pop(s)
        )

        setUserSymptoms(updatedUserSymptoms);
        };

        console.log(userSymptoms)  


        // const (handleSubmit) => {
        //     const updatedUserSymptons = 
        // 
     return ( 
        <div className="App">
        <h3>Select symptoms</h3>
        <form>
        <ul className="symptoms-list">
          {possibleSymptoms.map(({ name }, index) => {
            return (
              <li key={index}>
                <div className="possible-symptoms-list">
                    <input
                      type="checkbox"
                      id={`custom-checkbox-${index}`}
                      name={name}
                      value={name}
                      checked={checkedState[index]}
                      onChange={() => handleOnChange(index)}
                    />
                    <label htmlFor={`custom-checkbox-${index}`}>{name}</label>
                </div>
              </li>
            );
          })}
        </ul>
        <input type="submit" value="Submit" />
        </form>
      </div>
)
};

export default Day;
