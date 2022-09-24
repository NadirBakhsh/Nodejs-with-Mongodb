const mongoose = require("mongoose");
if (process.env.NODE_ENV === "test") {
  require("dotenv").config({ path: "./config/.env.test" });
}

(async () => {
  try {
    if (process.env.NODE_ENV !== "test") {
      const conn = await mongoose.connect(process.env.MONGODB_URL, {
        ignoreUndefined: true,
      });
      return console.log(
        `MongoDB Connected on host: ${conn.connection.host}`.cyan
      );
    }

  } catch (error) {
    console.error(`Error: ${error.message}`.red.bold);
    return process.exit(1);
  }
})();


