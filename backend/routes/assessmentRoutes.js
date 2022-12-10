const express = require("express");
const sgMail = require("@sendgrid/mail");

const router = express.Router();

router.post("/submitAsessment", (req, res, next) => {
    sgMail.setApiKey(
        process.env.SENDGRID_API_KEY
    );
    const msg = {
        to: "dylan.hatchr@gmail.com",
        from: "dylan.viranyi@gmail.com",
        subject: "Assessment submitted",
        //TODO get the candidates name and email address from the front end
        text: `A new assessment has been submitted by: NAME HERE \n replit/stackblitz link & email address: ${JSON.stringify(req.body)}`,
    };

    sgMail.send(msg);
    res.status(201);
});

router.post("/submitAssessment", controller.submitAssessment);

module.exports = router;