const express = require("express");
const cors = require("cors");
const axios = require("axios");

const app = express();
app.use(express.json());
app.use(cors({ origin: true }));

app.post("/authenticate", async (req, res) => {
  const { username } = req.body;

  try {
    const r = await axios.put("https://api.chatengine.io/users/",
      { username: username, secret: username, first_name: username },
      { headers: { "private-key": "bcf3e47d-17e1-4d49-8884-ef4d781b460d" } }
    );

    if (r.status && r.data) {
      return res.status(r.status).json(r.data);
    } else {
      // Handle the case where the response is not as expected
      return res.status(500).json({ error: "Unexpected response from the server" });
    }
  } catch (e) {
    console.error(e); // Log the error for debugging
    return res.status(500).json({ error: "An error occurred while making the request" });
  }
});

app.listen(3001, () => {
  console.log("Server is running on port 3001");
});
