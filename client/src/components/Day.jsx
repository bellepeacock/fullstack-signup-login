import React from "react";
import { useState } from "react";


const Day = () => {

    const possibleSymptoms = [
        {
            name: "sneezing and coughing",
            selected: false
        },
        {
            name: "runny or blocked nose",
            selected: false
        },
        {
            name: "itchy, red or watery eyes",
            selected: false
        },
        {
            name: "itchy throat, mouth, nose, ears",
            selected: false
        },
        {
            name: "loss of smell",
            selected: false
        }, 
        {
            name: "pain around temple or forehead",
            selected: false
        },
        {
            name: "headache",
            selected: false
        },
        {
            name: "earache",
            selected: false
        }, 
        {
            name: "tiredness",
            selected: false
        }];

        let s = possibleSymptoms[0];

        const [userSymptoms, setUserSymptoms] = useState([]);

          const handleOnChange = (position) => {
            setUserSymptoms(s);
            possibleSymptoms.map((s) => {
                //  save the names that was checked, and if not checked the delete from the array, so userSymptoms array will just be the names
                (possibleSymptoms.selected === s.name) ? userSymptoms.push(s.name) : possibleSymptoms.pop(s.name)
            }); 
               console.log(userSymptoms);
              return localStorage.setItem("userSymptoms", JSON.stringify(setUserSymptoms));
          };

          

    // const addSymptom = () => {
    //     let newUserSymptoms = [...userSymptoms];

    //     newUserSymptoms.push(symptom);

    //     //change to a remote DB after local storage working!
    //     localStorage.setItem("userSymptoms", JSON.stringify(newUserSymptoms));
    // };
    console.log(userSymptoms);

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(event.target.symptoms.value);
        // addSymptom(setUserSymptoms);
        console.log(userSymptoms)
    };

    // console.log(userSymptoms.length === 0 ? true : false );
    // console.log(userSymptoms);


     return ( 
    //   <div className="App">
    //   <h3>Select Toppings</h3>
    //   <ul className="symptoms-list">
    //     {possibleSymptoms.map(({ name }, index) => {
    //       return (
    //         <li key={index}>
    //           <div className="symptoms-list-item">
    //             <div className="left-section">
    //               <input
    //                 type="checkbox"
    //                 id={`custom-checkbox-${index}`}
    //                 name={possibleSymptoms.name}
    //                 value={possibleSymptoms.name}
    //                 checked={checkedState[index]}
    //                 onChange={() => handleOnChange(index)}
    //               />
    //               <label htmlFor={`custom-checkbox-${index}`}>{possibleSymptoms.name}</label>
    //             </div>
    //           </div>
    //         </li>
    //       );
    //     })}
    //   </ul>
    // </div>

        <div>
            <form onSubmit={handleSubmit} >
            {possibleSymptoms.map((s) => (
                <ul>
                    <li key={s}>
                        <label className="container" >
                            <input type="checkbox" name="symptoms" checked={s.selected} onChange={() => handleOnChange(s.name)} />
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
