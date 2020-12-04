console.log("Starting server.js");
//Dependencies: Express to interact with frontend, 
//fs to read,write,delete,etc... with files,
//Yargs to parse
const express = require("express");
const fs = require("fs")
const yargs = require("yargs")

// Title of the note
var title = yargs.argv.title;
// body of the note
var body = yargs.argv.body;
// command used
var command = yargs.argv._[0];

if(command === "add") {
    console.log("adding note");
} else if (command === "remove") {
    console.log("removing note");
} else if (command === "read") {
    console.log("reading note");
} else if (command === "list") {
    console.log("listing all notes");
} else { 
    console.log("Unknown command was used.");
}