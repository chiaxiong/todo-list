const express = require("express");
const app = express();
const cors = require("cors");

app.use(cors());

const port = process.env.PORT || 8000;
app.listen(port, () => {
  console.log(`Server Port: ${port}`);
});
