import React from "react";
import { useState } from "react";
import "../css/app.css";
import "../css/checklist.css"


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

        // const [checkedState, setCheckedState] = useState(
        //     new Array(possibleSymptoms.length).fill(false)
        // );

        const [checkedState, setCheckedState] = useState(false);

        const [userSymptoms, setUserSymptoms] = useState([]);

        //loop over the checkedState array using the array map method. 
        //If the value of the passed position parameter matches with the current index, then we reverse its value. Then, if the value is true it will be converted to false using !item and if the value is false, then it will be converted to true.
        const handleOnChange = (s, value, position) => {
                let symptoms = [ ...userSymptoms];
  
                if (symptoms.includes(value)) {
                  symptoms = symptoms.filter( (s) => s !== value)
                } else {
                  symptoms.push(value);
                }
                setUserSymptoms(symptoms);

                console.log(symptoms);
                console.log(userSymptoms);
        };

        // function working but not updating immediately for symptoms, not updating userSymptoms ^^


     return ( 
        <div className="App home">
        <h3>Select symptoms</h3>
        <form>
        <ul className="symptoms-list checklist">
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
                      onClick={() => handleOnChange(index, name)}
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