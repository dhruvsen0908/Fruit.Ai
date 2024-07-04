const express = require("express");
const router = express.Router();
// const {home,register} = require("../controllers/auth-controller");
const authcontrollers = require("../controllers/auth-controller");
const validate = require("../middlewares/validate-middleware");
const { signupSchema,loginSchema } = require("../validators/auth-validators");
const authMiddleware = require("../middlewares/auth-Middleware")

router.route("/").get(authcontrollers.home);

router.route("/register").post(validate(signupSchema) ,authcontrollers.register);

router.route("/login").post(validate(loginSchema), authcontrollers.login);

router.route("/user").get(authMiddleware, authcontrollers.user);
module.exports = router;

























//Best Method to use routes  
//1
// router.get("/",(req,res) =>{
//     res.status(200).send('Welcome to Cart Using router');
// });
//2
// router.route("/").get((req,res) =>{
//     res.status(200).send('Welcome to Cart Using router');
// });
// using this method we can do http calls chaining get , post etc..