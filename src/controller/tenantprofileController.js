const setupDb = require('../../db/db-setup');
const Tenant_Profile = require('../models/tenant_profile');
const User_Profile = require('../models/user_profile');

setupDb();

exports.create = async (req, res) => {
    try{
        const body = req.body;
        const tenant =await Tenant_Profile.query().insert(body);
        res.status(200).send(tenant);
    }catch(err) {
        res.status(400).json(err);
    }
};

exports.get_profile = async (req, res) => {
    try{
      const id = JSON.parse(req.params.id);
     const get_profile = await Tenant_Profile.query().findById(id)
     const user_profiles = await User_Profile.query().where('tenant_id', id)
     if(!get_profile) {
       res.status(400).json({ status: 400, message: 'Not Found' } )
     }
     res.status(200).json({ get_profile, user_profiles });
    }catch(err) {
      res.status(400).send(err)
    }
}

 exports.update_profile = async (req, res) => {
    try{
      const id = JSON.parse(req.params.id);
      const body = req.body;
      const update_object = await Tenant_Profile.query().patch({
        tenant_name: body.tenant_name,
        address: body.address,
        city: body.city,
        state: body.state,
        country: body.country,
        zip_code: body.zip_code,
        phone: body.phone,
        web_url: body.web_url
      }).findById(id);
      if(update_object === 0) {
        res.status(400).json({ status: 400, message: 'went something wrong! try again.' } )
      }
      const get_update_profile = await Tenant_Profile.query().findById(id)
      res.status(200).json(get_update_profile);
    }catch(err) {
      res.status(400).send(err)
    }
}

exports.delete_profile = async (req, res) => {
    try{
      const id = JSON.parse(req.params.id);
      const find_Userprofile = await User_Profile.query().where('tenant_id', id)
      if(find_Userprofile.length){
        const userIds = find_Userprofile.map((data)=> data.id);
        console.log(userIds)
        await User_Profile.query().delete().where('id', userIds);
      }
      const delete_object = await Tenant_Profile.query().deleteById(id);
      if(delete_object === 0) {
        res.status(400).json({ status: 400, message: 'went something wrong! try again.' } )
      }
      res.status(200).json({ message: 'deleted!' });
    }catch(err) {
      res.status(400).send(err)
    }
}
