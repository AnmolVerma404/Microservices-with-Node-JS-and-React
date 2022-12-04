import express from "express";

const router = express.Router();

router.get("/api/invite-code/", (req, res) => {
  console.log("Invite Code page");
  res
    .status(200)
    .send(
      '<form action="/invite-code" method="post"><input type="number" placeholder="invite-code" name="inviteCode"/><button type="submit">Subbmit</button></form>'
    );
});

router.post("/api/invite-code/", (req, res) => {
  const { inviteCode }: { inviteCode: string } = req.body;
  /*
   *** Invite Code Logic remains ***
   *** Currenty used a const 123456 as a default invite code ***
   */
  if (inviteCode === "123456") {
    res.send({ success: true });
  } else {
    res.send({ success: false });
  }
});

export { router as inviteCode };
