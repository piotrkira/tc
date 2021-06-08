const express = require("express");
const router = express.Router();
const Admin = require('../models/Admin');
const User = require('../models/User');
const Redis = require("ioredis");

const redis = new Redis({
  host: process.env.REDIS_HOST,
  port: process.env.REDIS_PORT
});

router.post("/login-admin", async (req, res) => {
  try {
    const { login, password } = req.body;
		redis.get(`${login}:${password}`, (err, res) => {
			if (err) {
				console.log(err)
			} else {
			res.send(true);
			return;
			}
		})

    if (await Admin.exists({login: login, password: password})) {
      res.send(true);
    } else {
      res.send(false);
    }
  } catch (error) {
    return res.send({ error });
  }
});

router.post("/login-user", async (req, res) => {
  try {
    const { email, password } = req.body;

    if (await User.exists({email: email, password: password})) {
      res.send(true);
    } else {
      res.send(false);
    }
  } catch (error) {
    return res.send({ error });
  }
});

module.exports = router;
