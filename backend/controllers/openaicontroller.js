import main from "../server.js";
import expressAsyncHandler from "express-async-handler";
// @desc          Post Promt by user
// @routes        POST /api/openairoute
// @access        Public
const postPrompt = expressAsyncHandler(async (req, res) => {
  console.log(req.body.message);
  const ans = await main(`${req.body.message}`);
  const final = ans[0].message.content.replace(/\\/g, "").replace(/\n/g, "");
  console.log(ans);
  res.status(200).json({ message: `${final} ` });
});

export { postPrompt };
