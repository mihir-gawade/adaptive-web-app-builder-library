#!/usr/bin/env node

const { Command } = require("commander");
const inquirer = require("inquirer");
const { createAngularProject } = require("../lib/create-angular-project");
const { createReactProject } = require("../lib/create-react-project");
const { createReactNativeProject } = require("../lib/create-react-native-project");
const { generateAngularCompatibilityReport } = require("../lib/compatibility-report");
const { convertAngularProject } = require("../lib/convert-angular-project");
const { convertReactProject } = require("../lib/convert-react-project");
const { convertReactNativeProject } = require("../lib/convert-react-native-project");

const program = new Command();

program.version("1.0.0").description("Adaptive Web App Builder CLI");

program
  .command("create")
  .description("Create or convert a project")
  .action(async () => {
    try {
      const prompt = inquirer.createPromptModule();

      const actionChoices = [
        "Create a new project",
        "Convert an existing project",
        "Generate compatibility report",
      ];

      const answers = await prompt([
        {
          type: "list",
          name: "action",
          message: "Choose an action:",
          choices: actionChoices,
        },
        {
          type: "list",
          name: "framework",
          message: "Which framework would you like to use?",
          choices: ["Angular", "React", "React Native"],
        },
        {
          type: "input",
          name: "projectName",
          message: "Enter the project name or path:",
          validate: (input) => (input ? true : "Project name/path cannot be empty."),
        },
      ]);

      const { action, framework, projectName } = answers;

      if (action === "Create a new project") {
        switch (framework) {
          case "Angular":
            await createAngularProject(projectName);
            break;
          case "React":
            await createReactProject(projectName);
            break;
          case "React Native":
            await createReactNativeProject(projectName);
            break;
          default:
            console.log("Invalid framework selected.");
        }
      } else if (action === "Convert an existing project") {
        switch (framework) {
          case "Angular":
            await convertAngularProject(projectName);
            break;
          case "React":
            await convertReactProject(projectName);
            break;
          case "React Native":
            await convertReactNativeProject(projectName);
            break;
          default:
            console.log("Invalid framework selected.");
        }
      } else if (action === "Generate compatibility report") {
        switch (framework) {
          case "Angular":
            await generateAngularCompatibilityReport(projectName);
            break;
          case "React":
            console.log("Compatibility report for React is under development.");
            break;
          case "React Native":
            console.log("Compatibility report for React Native is under development.");
            break;
          default:
            console.log("Invalid framework selected.");
        }
      }
    } catch (error) {
      console.error("Error:", error);
    }
  });

program.parse(process.argv);
