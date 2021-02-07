#!/usr/bin/env node
const path=require("path");
require("@cyber-tools/cli-utils/initial");
require("module-alias").addAlias("@", path.resolve(__dirname,"../"));
require("module-alias").addAlias("@@", path.resolve(__dirname,"../"));
require("@/configs/runtime.config");
require("../index");