const express = require("express");
const _ = require("lodash");

console.log("Dependabot Demo");
console.log(_.capitalize("hello world"));

const app = express();
console.log("Express loaded successfully");
