const fs = require('fs-extra');

async function compareComponents(componentPath, flourishComponentPath) {
  try {
    const currentComponent = await fs.readFile(componentPath, 'utf8');
    const flourishComponent = await fs.readFile(flourishComponentPath, 'utf8');

    return currentComponent === flourishComponent;
  } catch (error) {
    console.error(`Error comparing components: ${error}`);
    return false;
  }
}

async function updateComponent(componentPath, flourishComponentPath) {
  try {
    await fs.copy(flourishComponentPath, componentPath);
    console.log(`Component at ${componentPath} updated successfully.`);
  } catch (error) {
    console.error(`Error updating component: ${error}`);
  }
}

module.exports = { compareComponents, updateComponent };
