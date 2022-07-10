var Generator = require('yeoman-generator');

module.exports = class extends Generator {
  async prompting() {
    const answers = await this.prompt([
      {
        type: "input",
        name: "name",
        message: "Your project name",
        default: this.appname // Default to current folder name
      },
      {
        type: "input",
        name: "version",
        message: "Your project version",
        default: "0.0.1" // Default to current folder name
      },
      {
        type: "input",
        name: "description",
        message: "Your project description",
        default: "" // Default to current folder name
      }
    ]);

    console.log("answers: ", answers);

    // answers.name = JSON.stringify(answers.name)
    // answers.version = JSON.stringify(answers.version)
    // answers.description = JSON.stringify(answers.description)
    this.fs.copyTpl(
      this.templatePath('a.js'),
      this.destinationPath('src/a.js'),
      answers
    );
    this.fs.copyTpl(
      this.templatePath('b.js'),
      this.destinationPath('src/b.js'),
      answers
    );
    this.fs.copyTpl(
      this.templatePath('index.js'),
      this.destinationPath('src/index.js'),
      answers
    );
   
    this.fs.copyTpl(
      this.templatePath('index.html'),
      this.destinationPath('src/index.html'),
      answers
    );
    this.fs.copyTpl(
      this.templatePath('test'),
      this.destinationPath('test'),
      answers
    );
    this.fs.copyTpl(
      this.templatePath('package.json'),
      this.destinationPath('package.json'),
      answers
    );
    this.fs.copyTpl(
      this.templatePath('webpack.config.js'),
      this.destinationPath('webpack.config.js'),
      answers
    );
    this.fs.copyTpl(
      this.templatePath('babel.config.json'),
      this.destinationPath('babel.config.json'),
      answers
    );
    this.fs.copyTpl(
      this.templatePath('.nycrc'),
      this.destinationPath('.nycrc'),
      answers
    );


    await this.addDevDependencies([
      '@babel/core',
      '@babel/preset-env',
      'babel-loader',
      'webpack-cli',
      'copy-webpack-plugin',
      'http-server',
      'mocha',
      '@babel/register',
      'nyc',
      'babel-plugin-istanbul',
      '@istanbuljs/nyc-config-babel'
    ])
  }
};