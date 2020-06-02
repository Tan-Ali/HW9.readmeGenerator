function generateMarkdown(data) {
    return `
  # ${data.title}

  ## Description

  ${data.description}
  
  ## Table of Contents
  
  *[Installation](#installation)
  *[Usage](#Usage)
  *[License](#License)
  *[Contributing](#Contributing)
  *[Tests](#Tests)
  *[Questions](#Questions)


  ## Installation

  ${data.installation}

  ## Usage

  ${data.usage}

  ## License

  ${data.license}

  ## Contributing
  [![GitHub contributors](https://img.shields.io/github/contributors/cdnjs/cdnjs.svg?style=flat)]() 

  ${data.contributing}

  ## Tests

  ${data.tests}

  ## Questions

  ${data.questions}
  
  `;
  }
  
  module.exports = generateMarkdown;
  