const db = require("../database.js");
const { options } = require("../routes/foodroutes.js");

//// get list of food model :

exports.getfoodmodel = async () => {
  try {
    const food = await db.find();

    return food;
  } catch (err) {
    console.log(err);
  }
};

//// add new food to the list :

exports.addfoodmodel = async (img, name, description,category) => {
  try {
    if (img && name && description&&category) {
      const result = await db.insertMany({
        Image: img,
        Name: name,
        Description: description,
        category : category
      });
      return result;
    } else {
      console.log("please insert data");
    }
  } catch (err) {
    console.log(err);
  }
};

//// search by name  :

exports.searchfoodmodel = async (name) => {
  try {
    const result = await db.find({ Name: { $regex: name, $options: "i" } });  //// regular expressions
    return result;
  } catch (err) {
    console.log(err);
  }
};



//// update a specific information food :

exports.updatefoodmodel = async (image, name, description, id) => {
  try {
    if ((image, name, description)) {
      const result = await db.updateOne(
        { _id: id },
        { Image: image, Name: name, Description: description }
      );
      return result;
    } else {
      console.log("please insert data");
    }
  } catch (err) {
    console.log(err);
  }
};

//// delete a specific food by id :

exports.deletefoodmodel = async (id) => {
  try {
    const result = db.deleteOne({ _id: id });
    return result;
  } catch (err) {
    console.log(err);
  }
};



//// serach by category : 

exports.categoryfoodmodel = async (category)=>{
  try{
    const result = await db.find({category:category});
   
    return result

  } catch(err){
    console.log(err)
  }
}