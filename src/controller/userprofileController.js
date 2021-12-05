const setupDb = require('../../db/db-setup');
const User_Profile = require('../models/user_profile')

setupDb();

exports.create_user = async (req, res) => {
    try{
        const body = req.body;
        const userObject = await User_Profile.query().insert(body);
        res.status(200).send(userObject);
    }catch(err) {
        res.status(400).json(err);
    }
};

exports.get_user = async (req, res) => {
    try{
      const id = JSON.parse(req.params.id);
      console.log(id);
     const get_user = await User_Profile.query().findById(id);
     if(!get_user) {
       res.status(400).json({ status: 400, message: 'Not Found' } )
     }
     res.status(200).json(get_user);
    }catch(err) {
      res.status(400).send(err)
    }
}

exports.update_user = async (req, res) => {
  try{
    const id = JSON.parse(req.params.id);
    const body = req.body;
    const update_object = await User_Profile.query().patch(body).findById(id);
    if(update_object === 0) {
      res.status(400).json({ status: 400, message: 'went something wrong! try again.' } )
    }
    const get_update_user = await User_Profile.query().findById(id)
    res.status(200).json(get_update_user);
  }catch(err) {
    res.status(400).send(err)
  }
}

exports.delete_user = async (req, res) => {
  try{
    const id = JSON.parse(req.params.id);
    const delete_object = await User_Profile.query().deleteById(id);
    if(delete_object === 0) {
      res.status(400).json({ status: 400, message: 'went something wrong! try again.' } )
    }
    res.status(200).json({ message: 'deleted!' });
  }catch(err) {
    res.status(400).send(err)
  }
}