const app = require("express")();

app.get("/", (req, res) =>
  res.json({
    message: "Docker is awesome, but installing on windows is no easy",
  })
);

const port = process.env.PORT || 8080;

app.listen(port, () => console.log("docker is runnig on port 8080"));
