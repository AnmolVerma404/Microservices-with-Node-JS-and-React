import express from "express";

const router = express.Router();

router.get("/invite-code/", (req, res) => {
  console.log("Invite Code page");
  res
    .status(200)
    .send(
      '<form action="/invite-code" method="post"><input type="number" placeholder="invite-code" name="inviteCode"/><button type="submit">Subbmit</button></form>'
    );
});

router.post("/invite-code/", (req, res) => {
  const { inviteCode } = req.body;
  if (inviteCode === "123456") {
    res.send({ success: true });
  } else {
    res.send({ success: false });
  }
});

export { router as inviteCode };
