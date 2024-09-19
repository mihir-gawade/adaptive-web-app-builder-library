#!/usr/bin/env node

const { Command } = require("commander");
const inquirer = require("inquirer");
const { createAngularProject } = require("../lib/create-angular-project");
const { createReactProject } = require("../lib/create-react-project");
const { createReactNativeProject } = require("../lib/create-react-native-project");

const program = new Command();

program.version("1.0.0").description("Adaptive Web App Builder CLI");

program
  .command("create")
  .description("Create a new project")
  .action(async () => {
    try {
      // Use createPromptModule for better handling
      const prompt = inquirer.createPromptModule();

      // Prompt the user for inputs
      const answers = await prompt([
        {
          type: "list",
          name: "framework",
          message: "Which framework would you like to use?",
          choices: ["Angular", "React", "React Native"],
        },
        {
          type: "input",
          name: "projectName",
          message: "Enter the project name:",
          validate: (input) => (input ? true : "Project name cannot be empty."),
        },
      ]);

      const { framework, projectName } = answers;

      console.log(`Creating a ${framework} project named ${projectName}...`);

      // Process framework choice
      switch (framework) {
        case "Angular":
          await createAngularProject(projectName);
          console.log("Angular project created successfully!");
          break;
        case "React":
          await createReactProject(projectName);
          console.log("React project created successfully!");
          break;
        case "React Native":
          await createReactNativeProject(projectName);
          console.log("React Native project created successfully!");
          break;
        default:
          console.log("Invalid framework. Please choose from Angular, React, or React Native.");
      }
    } catch (error) {
      console.error("Error during project creation:", error);
    }
  });

program.parse(process.argv);
