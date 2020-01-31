// Use CommonJS require below so we can dynamically imnport during build-time.

if (process.env.NODE_ENV === "production") {
    module.exports = require("./configureStore.prod");
  } else {
    module.exports = require("./configureStore.dev");
  }
  
  // CommonJS was popularized by Node. it has a different syntax for importing and exporting.
  // Here we're using it to dynamically import the appropriate file at build time.