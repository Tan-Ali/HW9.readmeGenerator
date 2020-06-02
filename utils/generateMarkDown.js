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

  [![contributions welcome](https://img.shields.io/badge/contributions-welcome-brightgreen.svg?style=flat)](https://github.com/dwyl/esta/issues)


  ${data.contributing}

  ## Tests

  ${data.tests}

  ## Questions

  ${data.questions}
  
  `;
  }
  
  module.exports = generateMarkdown;
  