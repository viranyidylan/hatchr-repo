const express = require("express");
const sgMail = require("@sendgrid/mail");

const router = express.Router();

router.post("/requestAccess", (req, res, next) => {
    sgMail.setApiKey(
        process.env.SENDGRID_API_KEY
    );
    const msg = {
        //TODO change to dylan@hatchr.co.za when that email is confirmed
        to: "dylan.hatchr@gmail.com",
        from: "dylan.viranyi@gmail.com",
        subject: "Company requesting hatchr access",
        text: `A company has requested more information/access to Hatchr\nDetails: ${JSON.stringify(req.body)}`,
    };
    sgMail.send(msg);
    res.status(201);
});

router.post("/requestAccess", controller.requestAccess);


module.exports = router;