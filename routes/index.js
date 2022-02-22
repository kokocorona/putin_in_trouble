const express= require("express");
const router = express.Router();

router.get("/", (req,res) => {
  res.json({msg:"Welcome to Putin app 2022"});
})

module.exports = router;