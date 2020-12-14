const app = require("express")();

app.get("/", (req, res) =>
  res.json({
    message: "Docker is awesome, but it's struggle installing on windows 🐋",
  })
);

const port = process.env.PORT || 8080;

app.listen(port, () =>
  console.log(`App is running on http://localhost:${port}`)
);
