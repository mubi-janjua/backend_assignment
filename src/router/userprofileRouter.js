// Import express
const express = require('express')
// Import Product Controller

const { create_user, get_user } = require("../controller/userprofileController")
// Init express router
const user_router = express.Router();

// Route create a new product
user_router.post('/user', create_user);
user_router.get('/user/get/:id', get_user)
// router.get('/api/get/:id', get_profile)
// router.put('/api/update/profile/:id', update_profile)
// router.delete('/api/delete/profile/:id', delete_profile)

// export router
module.exports = user_router