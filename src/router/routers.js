// Import express
const express = require('express')
// Import Product Controller

const { create, get_profiles, get_profile, update_profile, delete_profile } = require("../controller/tenantprofileController")
const { create_user, get_user, update_user, delete_user } = require("../controller/userprofileController")

// Init express router
const router = express.Router();

// Route create a new product
router.post('/api/create', create);
router.get('/api/get/:id', get_profile)
router.put('/api/update/profile/:id', update_profile)
router.delete('/api/delete/profile/:id', delete_profile)


//Router for user_profile
router.post('/user', create_user);
router.get('/user/get/:id', get_user)
router.put('/user/update/:id', update_user)
router.delete('/user/delete/:id', delete_user)

// export router
module.exports = router