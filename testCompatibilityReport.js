const { generateAngularCompatibilityReport } = require('./lib/generate-angular-report'); // Adjust the path as needed

// Define paths for the user project and the Flourish standard template
const projectPath = './templates/angular-standard-design-template'; // Update this to your Flourished project path
const flourishTemplatePath = './templates/angular-project'; // Path to your Non-Flourish template

async function runTest() {
  try {
    console.log('Generating compatibility report...');
    await generateAngularCompatibilityReport(projectPath);
  } catch (error) {
    console.error('Error generating compatibility report:', error);
  }
}

// Execute the test
runTest();
