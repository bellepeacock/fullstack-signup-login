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

        let s = possibleSymptoms[0];

        // tell the DOM what to toggle between when doing so between checked and unchecked

        const [checkedState, setCheckedState] = useState(
            new Array(possibleSymptoms.length).fill(false)
        );

        const handleOnChange = (position) => {
        const updatedCheckedState = checkedState.map((item, index) =>
            index === position ? !item : item
        );
        
        
        console.log(possibleSymptoms)

        setCheckedState(updatedCheckedState);
        };


    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(event.target.symptoms.value);
        // addSymptom(setUserSymptoms);
        // console.log(userSymptoms)
    };



     return ( 


        <div>
            <form onSubmit={handleSubmit} >
            {possibleSymptoms.map((s) => (
                <ul>
                    <li key={s}>
                        <label className="container" >
                            <input type="checkbox" name="symptoms" checked={s.selected} onChange={() => handleOnChange(s.name, s.selected)} />
                            <textarea value={s.name} />
                            {/* <img className="checkmark" alt="labrador0.1" src="https://cdn.pixabay.com/photo/2016/02/19/15/46/labrador-retriever-1210559_1280.jpg" />  */}
                        </label>
                    </li>
                </ul>
            ))}
             <button>Submit</button>
            </form>
        </div>
)
};

export default Day;
