const router = require('express').Router();
const Personal = require('../models/personalModel');
const { Redirect } = require('react-router-dom');

//homepage of personal
router.route('/').get((req, res) => {
  Personal.find() //.find is mongoose library
    .then((data) => res.json(data))//returns a promise of a JSON object after recieving 
    .catch((err) => res.status(400).json('Error at personal route: ' + err));
});

//add personal events
router.route('/add').post((req, res) => {
  const newEvent = new Personal({
    eventName: req.body.eventName,
    date: Date.parse(req.body.date),
  });

  newEvent
    .save() //.save calls mongoose library
    .then((data) => res.json(data)) //pass down the id
    .catch(() => res.status(400).json('Error at personal route add: ' + err));
});

//update personal events
router.route('/update/:id').put((req, res) => {
  Personal.findByIdAndUpdate(req.params.id, {
    eventName: req.body.eventName,
    date: Date.parse(req.body.date),
  })
    .then(() => res.json('New personal event updated!'))
    .catch((err) =>
      res.status(400).json('Error at personal route update: ' + err)
    );
});

//delete personal events
router.route('/delete/:id').delete((req, res) => {
  Personal.findByIdAndDelete(req.params.id)
    .then(() => res.json('Personal event deleted!'))
    .catch((err) =>
      res.status(400).json('Error at personal route delete: ' + err)
    );
});

module.exports = router;