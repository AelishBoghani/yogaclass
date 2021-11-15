const express = require("express");
const router = express.Router();
const Form = require("../models/formModel");



router.post("/addform", async (req, res) => {
  const form = req.body.form;
  try {
    const newform = new Form({
      firstname: form.firstname,
      lastname: form.lastname,
      email: form.email,
      city: form.city,
      zip: form.zip,
      age:form.age,
      timings: form.timings,
    });
    await newform.save();
    res.send("Your Registration is done Successfully");
  } catch (error) {
    return res.status(400).json({ message: error + error });
  }
});

module.exports = router;
