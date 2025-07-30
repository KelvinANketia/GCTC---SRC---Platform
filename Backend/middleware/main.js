const compression = require("compression");
const cookieParser = require("cookie-parser");
const express = require("express");

module.exports = (app) => {
  app.use(express.json({ limit: "10kb" }));
  app.use(express.urlencoded({ extended: true, limit: "10kb" }));
  app.use(cookieParser());

  // Compression Middleware
  app.use(
    compression({
      level: 9,
      threshold: 1024,
      filter: (request, response) =>
        !request.headers["x-no-compression"] &&
        compression.filter(request, response),
    }),
  );
};
