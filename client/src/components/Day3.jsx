// import React from "react";
// import { useState } from "react";

// const Day = () => {

//     // create a state to control the form by seeing if checked/unchecked
//     // add checked as an attribute

//  let selectedSymptoms = document.querySelectorAll('input[name="userSymptoms[]"]:checked');
  
//   const [checkedState, setCheckedState] = useState(
//     new Array(selectedSymptoms.length).fill(false)
//   );

//   const handleOnChange = (position) => {
//         const updatedCheckedState = checkedState.map((item, index) =>
//         index === position ? !item : item
//         );
        
//         setCheckedState(updatedCheckedState);
//     };

//     function submitSymptoms(e) {
//         e.preventDefault();
//         console.log("test");
//         // let selectedSymptoms = document.querySelectorAll('input[name="userSymptoms[]"]:checked');
//         for (let symptom of selectedSymptoms) {
//             document.body.append(symptom.value + ', ');
//         };

//      return ( 
//         <div>
//             <form id="test" onsubmit={submitSymptoms}>  
//                         {/* <input type="checkbox" name="{userSymptoms[]}" value="sneezing and coughing" checked={checkedState} */}
//                                 {/* onChange={(setCheckedState) => handleOnChange()} /> */}
//                         <span>sneezing and coughing</span>
//                         {/* <input type="checkbox" name="userSymptoms[]" value="runny or blocked nose" checked={checkedState} */}
//                                 {/* onChange={(setCheckedState) => handleOnChange()}/> */}
//                         <span>runny or blocked nose</span>
//                         <button type="submit">save symptoms</button>
//                 </form>
//             {/* 
//             <input type="checkbox" name="userSymptoms[]" value="itchy, red or watery eyese" checked={checkedState}
//                     onChange={(setCheckedState) => handleOnChange()} />
//             <span>itchy, red or watery eyes</span>
//             <input type="checkbox" name="userSymptoms[]" value="itchy throat, mouth, nose, ears" checked={checkedState}
//                     onChange={(setCheckedState) => handleOnChange()} />
//             <span>itchy throat, mouth, nose, ears</span>
//             <input type="checkbox" name="userSymptoms[]" value="loss of smell" checked={checkedState}
//                     onChange={(setCheckedState) => handleOnChange()} />
//             <span>loss of smell</span>
//             <input type="checkbox" name="userSymptoms[]" value="pain around temple or forehead" checked={checkedState}
//                     onChange={(setCheckedState) => handleOnChange()} />
//             <span>pain around temple or forehead</span>
//             <input type="checkbox" name="userSymptoms[]" value="headache" checked={checkedState}
//                     onChange={(setCheckedState) => handleOnChange()} />
//             <span>headache</span>
//             <input type="checkbox" name="userSymptoms[]" value="earache" checked={checkedState}
//                     onChange={(setCheckedState) => handleOnChange()} />
//             <span>earache</span>
//             <input type="checkbox" name="userSymptoms[]" value="tiredness" checked={checkedState}
//                     onChange={(setCheckedState) => handleOnChange()} />
//             <span>tiredness</span> */}
//         </div>

// )       
// };
// };


// export default Day;
