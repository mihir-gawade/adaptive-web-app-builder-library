const fs = require('fs');
const path = require('path');
const { compareFiles } = require('./utils/compare');

function generateReportContent(compatibilityResults) {
  let textReport = '🔍 **Compatibility Report** 🔍\n\n';
  let jsonReport = { report: [] };

  compatibilityResults.forEach(result => {
    const { file, status } = result;
    let statusText, statusIcon;

    switch (status) {
      case 'compatible':
        statusText = '✅ Compatible';
        statusIcon = '✅';
        break;
      case 'partially compatible':
        statusText = '⚠️ Partially Compatible';
        statusIcon = '⚠️';
        break;
      case 'non-compatible':
        statusText = '❌ Non-Compatible';
        statusIcon = '❌';
        break;
      default:
        statusText = '❓ Unknown Status';
        statusIcon = '❓';
    }

    textReport += `${statusIcon} ${file}: ${statusText}\n`;
    jsonReport.report.push({ file, status });
  });

  return { textReport, jsonReport };
}

function saveReportToFile(projectPath, textReport, jsonReport) {
  const reportDir = path.join(projectPath, 'report');
  if (!fs.existsSync(reportDir)) {
    fs.mkdirSync(reportDir);
  }

  const textReportPath = path.join(reportDir, 'report.txt');
  const jsonReportPath = path.join(reportDir, 'report.json');

  fs.writeFileSync(textReportPath, textReport);
  fs.writeFileSync(jsonReportPath, JSON.stringify(jsonReport, null, 2));
}

async function generateAngularCompatibilityReport(projectName) {
  const projectPath = path.resolve(projectName);
  const flourishedPath = path.join(__dirname, '../templates/angular-standard-design-template');

  const compatibilityResults = await compareFiles(projectPath, flourishedPath);
  const { textReport, jsonReport } = generateReportContent(compatibilityResults);

  saveReportToFile(projectPath, textReport, jsonReport);

  console.log('🔍 Compatibility report generated successfully!');
  console.log(`📄 Report saved in: ${path.join(projectPath, 'report')}`);
}

// Dummy implementation for comparison logic (you need to replace this with actual file comparison logic)
async function compareFiles(projectPath, flourishedPath) {
  // Here, you'd write logic to compare files between the user's project and the Flourish-compliant template.
  // This is a mock implementation:
  return [
    { file: 'src/app/app.component.ts', status: 'compatible' },
    { file: 'src/app/app.module.ts', status: 'partially compatible' },
    { file: 'src/assets/styles.css', status: 'non-compatible' }
  ];
}

module.exports = {
  generateAngularCompatibilityReport,
};
