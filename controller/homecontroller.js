const homemodel = require("../model/homemodel.js");

/// get list of food controller :
exports.getfoodcontroller = (req, res) => {
  homemodel.getfoodmodel().then((list) => {
    res.send(list);
  });
};

//// add new food to the list :

exports.addfoodcontroller = (req, res) => {
  homemodel
    .addfoodmodel(
      req.body.img,
      req.body.name,
      req.body.description,
      req.body.category
    )
    .then((result) => {
      res.send(result);
    });
};

//// search by name  :

exports.searchfoodcontroller = (req, res) => {
  homemodel.searchfoodmodel(req.params.name).then((result) => {
    res.send(result);
  });
};

//// search by id :

exports.searchbyidcontroller = (req, res) => {
  homemodel.searchbyidmodel(req.params.id).then((result) => {
    res.send(result);
  });
};

//// update a specific information food :

exports.updatefoodcontroller = (req, res) => {
  homemodel
    .updatefoodmodel(
      req.body.img,
      req.body.name,
      req.body.description,
      req.params.id
    )
    .then((result) => {
      res.send(result);
    });
};

//// delete a specific food by id :
exports.deletefoodcontroller = (req, res) => {
  homemodel.deletefoodmodel(req.params.id).then((result) => {
    res.send(result);
  });
};

//// serach by category :

exports.categoryfoodcontroller = (req, res) => {
  homemodel
    .categoryfoodmodel(req.params.category)
    .then((result) => {
      res.send(result);
    })
    .catch((err) => {
      console.log("error :", err);
    });
};
