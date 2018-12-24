const app = require("./backend/app");
const debug = require("debug")("node-angular");
const http = require("http");
const mongoose = require("mongoose");

//check if port is retrieved successfully from environment variables
const normalizePort = val => {
  var port = parseInt(val, 10);

  if (isNaN(port)) {
    // named pipe
    return val;
  }

  if (port >= 0) {
    // port number
    return port;
  }

  return false;
};

// check if there are any errors with creating the server
const onError = error => {
  if (error.syscall !== "listen") {
    throw error;
  }
  const bind = typeof addr === "string" ? "pipe " + addr : "port " + port;
  switch (error.code) {
    case "EACCES":
      console.error(bind + " requires elevated privileges");
      process.exit(1);
      break;
    case "EADDRINUSE":
      console.error(bind + " is already in use");
      process.exit(1);
      break;
    default:
      throw error;
  }
};

const onListening = () => {
  const addr = server.address();
  const bind = typeof addr === "string" ? "pipe " + addr : "port " + port;
  debug("Listening on " + bind);
};

const port = normalizePort(process.env.PORT || "3200");
app.set("port", port);

const server = http.createServer(app);
server.on("error", onError);
server.on("listening", onListening);

//Connect to ElcartonaShopping Database through mongoose Library
//mongodb+srv://amr_omar_dev:I7JAiSvMXNBH2yQE@cluster0-j11bs.mongodb.net/elcartona?retryWrites=true
mongoose
  .connect(
    "mongodb+srv://amr_omar_dev:I7JAiSvMXNBH2yQE@cluster0-j11bs.mongodb.net/elcartona?retryWrites=true",
    {
      useNewUrlParser: true
    }
  )
  .then(() => {
    console.log("Connected to MongoDB...on port 3200");
    server.listen(port);
  })
  .catch(err => console.error("Could not connect to MongoDB..."));
