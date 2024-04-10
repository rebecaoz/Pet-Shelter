const Pet  = require('../models/pet.model');

module.exports.findAllPets = (req, res) => {
    Pet.find()
        .then(allPets => res.json({pets: allPets}))
        .catch(err => res.json({message: "Something went wrong", error:err}));
}
    // The method below is new
module.exports.createPet = (req, res) => {
    Pet.create(req.body)
    .then(newlyCreatedPet => res.json({ pet: newlyCreatedPet }))
    .catch(err => res.json({ message: "Something went wrong", error: err }));
}

module.exports.updateExistingPet = (req, res) => {
    Pet.findOneAndUpdate({ _id: req.params.id }, req.body, { new: true })
      .then(updatedPet => res.json({ joke: updatedPet }))
      .catch(err => res.json({ message: "Something went wrong", error: err }));
};

module.exports.deleteAnExistingPet = (req, res) => {
    Pet.deleteOne({ _id: req.params.id })
      .then(result => res.json({ result: result }))
      .catch(err => res.json({ message: "Something went wrong", error: err }));
};

module.exports.findOnePet = (req, res) => {
    Pet.findOne({ _id: req.params.id })
        .then(result => res.json({ result: result }))
        .catch(err => res.json({message: "Something went wrong", error:err}));
}

