#!/usr/bin/env node
const path=require("path");
require("@babel/register")({
  cwd:path.resolve(__dirname,"../")
});
require("@cyber-tools/cli-utils/initial");
require("../configs/runtime.config");
require("../index");