# TYPESCRIPT IN 50 LESSONS - LESSON SEVEN: TOOLING

This lesson takes on the journey to learn about TypeScript to our development workflow.

Some code editors like the VS Code enable us to work easily with TypeScript because by default the bring with them TypeScript pre-configured.

However, to work with TypeScript regardless of which code editor we're using, we need to setup our project and configure TypeScript for the project.

We can install the TypeScript command-line tool either globally on our machine or as development dependency in the current project we're working on.

You must have the NodeJs installed on your machine to be able to run the `npm install` commands to install the TypeScript package and any other npm package.

For instance:

- To install TypeScript globally, run this command in your terminal.
  
  `npm install -g typescript`

- To install TypeScript in your current project, run this command at the root of your project
  
  `npm install --save-dev typescript`

After installing, we get a tool called **tsc**, the TypeScript compiler.

**Note:** You must initialize the project with `npm --init` before running the `npm install --save-dev typescript`

You need to setup the appropriate scripts for the TypeScript compiler in the *package.json* tile to be able to run the TypeScript commands.

## Configuring TypeScript for Our Project

Running the `tsc --init` terminal command will create a configuration file called *tsconfig.json* at the root of the project. It's the main configuration file that contains some pre-filled settings. You can adjust these settings to fit your needs. Some of the settings are straight to understand. You can read the documentation for additional settings at TypeScript's official website.

Organize the project structure will also help keep similar files in one place for easy referencing. For instance, all the type declaration files go into a folder called *@type*

## Using The TypeScript Tooling In Our Project

- Run `tsc --noEmit` command terminal will type-check your **.ts** and **.js** for errors.

- Adding the `--watch` to `tsc --noEmit` would auto-check your files after you save it.

- Omitting the `--noEmit` flag from the command will transform our original TypeScript code into JavaScript code contained in the its corresponding JavaScript files

## Key Takeaways

- We can install, configure, and use TypeScript's tooling outside of the code editors that don't yet come pre-configured with TypeScript.

- We can adjust the compiler options in the *tsconfig.json* file to fit our needs.
