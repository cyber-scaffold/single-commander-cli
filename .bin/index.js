#!/usr/bin/env node
require("@babel/register")();
require("@cyber-tools/cli-utils/initial");
require("../configs/runtime.config");
require("../index");