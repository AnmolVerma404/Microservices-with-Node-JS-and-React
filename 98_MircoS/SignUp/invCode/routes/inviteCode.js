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
  console.log('Invite Called');
  if (true) {
    //Logic for correct invite code
    return res.status(200).redirect("/signup");
  } else {
    console.log("Nope");
    res.status(401).send("Invalid Invite Code");
  }
});

export { router as inviteCode };
