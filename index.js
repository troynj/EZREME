// TODO: Include packages needed for this application
const fs = require("fs");
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown.js");
// TODO: Create an array of questions for user input
const qArr = [
  "Enter your name",
  "Enter your github username",
  "Enter the name of the repository",
  "What was your motivation?",
  "why did you build this project?",
  "what problem does it solve?",
  "what did you learn?",
  "What are the steps required to install your project? Provide a step-by-step description of how to get the development environment running. (separate with commas):",
  "Provide instructions and examples for use:",
  "Add a gif to your explanation:",
  "List your collaborators, if any, with links to their GitHub profiles:",
  "If you used any third-party assets that require attribution, list the creators with links to their primary web presence in this section.",
  "If you followed tutorials, include links to those here as well.",
  "Enter a license:",
  "List the project features:",
  "How can developers contribute?",
  "list tests you have done with examples",
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
  fs.writeFile(`${fileName}`, `${data}`, (err) => err && console.log(err));
}

// TODO: Create a function to initialize app
function init() {
  inquirer
    .prompt([
      {
        name: "name",
        message: qArr[0],
      },
      {
        name: "uName",
        message: qArr[1],
      },
      {
        name: "repo",
        message: qArr[2],
      },
      {
        name: "motiv",
        message: qArr[3],
      },
      {
        name: "why",
        message: qArr[4],
      },
      {
        name: "prblm",
        message: qArr[5],
      },
      {
        name: "learn",
        message: qArr[6],
      },
      {
        name: "install",
        message: qArr[7],
      },
      {
        name: "use",
        message: qArr[8],
      },
      {
        name: "gif",
        message: qArr[9],
      },
      {
        name: "colab",
        message: qArr[10],
      },
      {
        name: "thrdP",
        message: qArr[11],
      },
      {
        name: "tut",
        message: qArr[12],
      },
      {
        name: "lic",
        message: qArr[13],
      },
      {
        name: "feat",
        message: qArr[14],
      },
      {
        name: "cont",
        message: qArr[15],
      },
      {
        name: "test",
        message: qArr[16],
      },
    ])
    .then((res) => {
      writeToFile("newRM.md", generateMarkdown(res))
    }
      );


}

// Function call to initialize app
init();

// const qArr = [
//   { i: ["Enter your name", null] },
//   { i: ["Enter your github username", null] },
//   { i: ["Enter the name of the repository", null] },
//   { i: ["What was your motivation?", null] },
//   { i: ["why did you build this project?", null] },
//   { i: ["what problem does it solve?", null] },
//   { l: [ "what did you learn?", ["nothing", "next to nothing", "something", "something valueable"]]},
//   { i: [["What are the steps required to install your project?","Include an image:"], "step"]},
//   { i: [["What are the steps required to use your project:", "Include an image:"], "step" ]},
//   { i: [["List a collaborator, if any", "Link their GitHub profile:"],"collaborator",],},
//   { i: [["If you used any third-party assets that require attribution","list the creators with links to their primary web presence in this section."],"third-party "]},
//   { i: ["If you followed tutorials, include a link", "link"] },
//   { i: ["Enter a license:", ["MIT", "ISC", "BSD", "GNU", "Mozilla", "Appache"]]},
//   { i: ["List the project features:", null] },
//   { i: ["How can developers contribute?", null] },
//   { i: ["list tests you have done with examples", "test"] },
// ];

// async function ask(q, keyword) {
//   if (Array.isArray(q)) {
//     await inq
//       .prompt([
//         { name: "ans", message: q[0] },
//         { name: "ans", message: q[1] },
//       ])
//       .then(async (response) => {
//         writeToFile("newRM.md", response);
//         keyword && (await repeat(q, keyword));
//       });
//   } else {
//     await inq.prompt([{ name: "ans", message: q }]).then(async (response) => {
//       writeToFile("newRM.md", response);
//       keyword && (await repeat(q, keyword));
//     });
//   }
// }

// async function askList(q, preselected) {
//   // let listKeys = Object.keys(list)
//   await inq
//     .prompt([
//       {
//         type: "list",
//         name: "ans",
//         message: q,
//         choices: preselected,
//       },
//     ])
//     .then((resp) => {
//       preselected.filter((el) => el === resp.ans);
//     });
// }

// async function repeat(question, keyword) {
//   await inq
//     .prompt([
//       {
//         type: "confirm",
//         name: "ans",
//         message: `Add another ${keyword}`,
//       },
//     ])
//     .then(async (resp) => {
//       resp.ans && (await ask(question));
//     });