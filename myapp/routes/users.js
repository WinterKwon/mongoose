var express = require('express');
var router = express.Router();

const Users = require('../models/users');

// /* GET users listing. */
// router.get('/', function(req, res, next) {
//   res.send('respond with a resource');
// });

/*routing & saving data to mongoDB*/
router.post('/make-user', async (req,res)=>{
  const newUser = new Users({
    username : req.body.username,
    password  : req.body.password});
    
  console.log(newUser);

  await newUser.save((err, user)=>{
    if(err){
      res.sendStatus(500);
    } else {
      console.log(user);
      res.sendStatus(200);
    }
  });
});

router.delete('/delete-all', (req,res)=>{
  Users.deleteMany({}, (err)=>{
    if(err){
      res.sendStatus(500);
    } else {
      res.sendStatus(200);
    }
  })
});

module.exports = router;
