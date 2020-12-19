var express = require("express");
var router = express.Router();
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const Invoice = require("../models/Invoice");
const checkAuth = require("../util/check-auth");

const {
  validateRegisterInput,
  validateLoginInput,
} = require("../util/validators");
const { response } = require("../app");

/* GET users listing. */
router.get("/", function (req, res, next) {
  res.send("invoice respond with a resource");
});

router.get("/viewInvoices", async function (req, res, next) {
  try {
    const invoice = await Invoice.find().sort({ date: -1 });
    if (invoice) {
      res.send(invoice);
    }
  } catch (error) {
    throw new Error(error);
  }
});

router.post("/viewInvoice", async function (req, res, next) {
  let headers = req.headers;
  try {
    const user = checkAuth(headers);
    console.log(user);
    const invoice = await Invoice.find({ email: user.email }).sort({
      date: -1,
    });
    if (invoice) {
      console.log(invoice);
      res.send(invoice);
    }
    console.log(user);
  } catch (error) {
    throw new Error(error);
  }
});

router.post("/createInvoice", async function (req, res, next) {
  let { amount, imageFile } = req.body;
  let headers = req.headers;
  try {
    const user = checkAuth(headers);

    if (amount.trim() === "") {
      throw new Error("Amount value must not empty");
    }

    if (imageFile.trim() === "") {
      throw new Error("Image File value must not empty");
    }

    const newInvoice = new Invoice({
      email: user.email,
      user: user.id,
      date: new Date().toISOString(),
      amount,
      imageFile,
      status: "Pending",
    });

    const invoice = await newInvoice.save();
    console.log(invoice);
    res.send(invoice);
  } catch (error) {
    throw new Error(error);
  }
});

router.post("/deleteInvoice", async function (req, res, next) {
  let { invoiceID } = req.body;
  let headers = req.headers;
  try {
    const user = checkAuth(headers);
    console.log(user);
    const invoice = await Invoice.findById(invoiceID);
    if (user && invoice) {
      if (user.email === invoice.email) {
        let deleted = await invoice.delete();
        if (deleted) {
          res.send("Invoice deleted successfully");
        }
      } else {
        throw new Error("Action not allowed");
      }
    }
  } catch (error) {
    throw new Error(error);
  }
});

router.post("/updateInvoice", async function (req, res, next) {
  let { invoiceID, updateObj } = req.body;
  let headers = req.headers;
  try {
    const user = checkAuth(headers);
    console.log(user);
    const invoice = await Invoice.findById(invoiceID);
    if (user && invoice) {
      if (user.email === invoice.email) {
        const updated = await Invoice.findByIdAndUpdate(invoiceID, updateObj, {
          new: true,
        });
        if (updated) {
          res.send("Invoice updated successfully");
        }
      } else {
        throw new Error("Action not allowed");
      }
    }
  } catch (error) {
    throw new Error(error);
  }
});

module.exports = router;
