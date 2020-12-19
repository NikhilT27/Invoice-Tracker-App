var express = require("express");
var router = express.Router();
const jwt = require("jsonwebtoken");
const User = require("../models/User");
const {
  validateRegisterInput,
  validateLoginInput,
} = require("../util/validators");

const generateToken = (user) => {
  console.log(user);
  return jwt.sign(
    {
      id: user.id,
      email: user.email,
    },
    process.env.SECRET_KEY,
    { expiresIn: "1h" }
  );
};

/* GET users listing. */
router.get("/", function (req, res, next) {
  res.send("respond with a resource");
});

router.post("/login", async function (req, res, next) {
  let { email, password } = req.body;

  try {
    const { valid, errors } = validateLoginInput(email, password);
    if (!valid) {
      res.send({ errors });
    }

    const user = await User.findOne({ email });
    if (user) {
      const token = generateToken(user);
      res.send({ ...user._doc, id: user._id, token });
    } else {
      res.send({ errors: { user: "User does't Exist" } });
    }
  } catch (error) {
    console.log(error);
  }
});

router.post("/post", function (req, res, next) {
  let id = req.body.id;
  res.send(`post ${id}`);
});

module.exports = router;
