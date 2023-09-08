import React from "react";
import { useState, useEffect } from "react";
// import { Link, useNavigate } from 'react-router-dom';
import "../css/app.css";
// import "../css/checklist.css";
// import "../../"



const Day = () => {
      
    // list of all the symptoms
    const possibleSymptoms = [
        { id: 0, name: "sneezing and coughing", checked: false },
        { id: 1, name: "runny or blocked nose", checked: false },
        { id: 2, name: "itchy, red or watery eyes", checked: false },
        { id: 3, name: "itchy throat, mouth, nose, ears", checked: false },
        { id: 4, name: "loss of smell", checked: false },
        { id: 5, name: "pain around temple or forehead", checked: false },
        { id: 6, name: "headache", checked: false },
        { id: 7, name: "earache", checked: false },
        { id: 8, name: "tiredness", checked: false }
    ];
    
    // state to keep track of user selected symptoms on the selected day 
    // initialised to possible symptoms with nothing checked
    const [userSymptoms, setUserSymptoms] = useState(possibleSymptoms);
  

    // to see changes in state after they have taken effect
    // state changes in react are done async, so they might not be available immediately for actions like console.log
    useEffect(() => {
        console.log("User Symptoms: ", userSymptoms);
    });

          
    // handler to update user symptoms when logged in user checks / unchecks a symptom
    const handleToggleUserSymptoms = (symptomName, isChecked) => {
        setUserSymptoms( userSymptoms.map( s => {
            if (s.name === symptomName) {
                // update the state with the current status (checked or unchecked)
                return { ...s, checked: isChecked};
            } else {
                // no changes
                return s;
            }
        }));
    };

     // handler to save user symptoms to DB when the user clicks on Save
    const saveSymptom = () => {


    }
        
        // const submitSymptom = await new Symptom 

     }
            


    return (
        <div className="App home">
            <h3>Select symptoms</h3>
            <form>
                <ListSymptoms 
                    items={userSymptoms}
                    onToggle={handleToggleUserSymptoms}/>
                <input type="button" value="Save" onClick={() => {saveSymptom()}}/>
            </form>
        </div>
    );

    function ListSymptoms({ items, onToggle }) {
        return (
            <ul>
                {items.map(item => (
                        <li key={item.id}>
                            <div className="possible-symptoms-list">
                                <input
                                    type="checkbox"
                                    id={`custom-checkbox-${item.id}`}
                                    name={item.name}
                                    value={item.name}
                                    checked={item.checked}
                                    onChange={e => onToggle(item.name, e.target.checked)}    
                                    />
                                <label htmlFor={`custom-checkbox-${item.id}`}>{item.name}</label>
                            </div>
                        </li>
                    ))}
            </ul>
        )
    };
}

export default Day;