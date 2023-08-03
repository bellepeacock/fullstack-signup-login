const router = require("express").Router();
import Symptoms from "../models/Symptoms.model";
import User from "../models/User";

console.log(req.body.userSymptoms);

// add event listener for the submit button?

router.post('/:id/day', (req, res, next) => {
    const symptomsDetails = {
        symptoms: req.body.userSymptoms
    }

try {
    console.log('trying to save symptoms')
    const savedSymptoms = await Symptoms.create(symptomsDetails);
  
    const foundUser = await User.findByIdAndUpdate(req.body.userId, { $push: { "symptoms": savedSymptoms._id }}, {new: true})
    console.log(`SYMPTOM SAVED: ${savedSymptoms} AND MATCHED TO USER: ${foundUser}`)
    res.json(savedSymptoms)
    
  } catch (err) {
    console.log(err)
  }
  
});

module.exports = router;



// router.get('/posts', (req, res, next) => {
//     Post.find()
//       .then(dbPosts => {
//         console.log('Posts from the DB: ', dbPosts);
//       })
//       .catch(err => {
//         console.log(`Err while getting the posts from the DB: ${err}`);
//         next(err);
//       });
//   });