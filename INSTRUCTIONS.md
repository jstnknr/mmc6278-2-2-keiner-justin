# Module 2 Assignment: Create a Command Line Application

(**NOTE:** View a rendered version of this file in VS Code with `ctrl-shift-v` or `cmd-shift-v`)

&nbsp;
## Introduction

For this assignment, you will create a command line application using the NodeJS and the [commander](https://github.com/tj/commander.js) npm package that prints random inspirational quotes to the console.

&nbsp;
## Setup

Copy the starter files inside of `unsolved` into the root directory of your GitHub repository.

Ensure you include a `.gitignore` file in your repo that includes at minimum:

```
**/.DS_Store
**/node_modules/
.env
```

Run `npm i` in the root directory of your repository (your `package.json` should be in the root directory).

&nbsp;
## Instructions

The application is already setup to use [Commander](https://github.com/tj/commander.js) for both getting and storing quotes. Commander allows us to create command line applications similar to using `process.argv` but with some added benefits (you do NOT need to use `process.argv` for this assignment).

You will need to add code to `index.js` to complete the assignment. Specifically, you'll need to implement the `getQuote` and `addQuote` functions. Follow the comments within `index.js` for more details.

**HINT:** You'll notice that the `quotes.txt` file separates quotes by new line characters (`\n`) and then quotes and their authors by a pipe (`|`). When we add quotes programmatically, we'll likely want to add a newline character to the end of a new quote so the program can add the next quote on the next line. The `quotes.txt` file has a blank line at the end for exactly this reason. However, when reading the contents of the file, if we split on `\n`, there will be a single blank line contained within those lines that we will need to filter out.

&nbsp;
## App Behavior

When the app is finished, from the terminal in the root directory of your repository, you should be able to run two different commands to retrieve/add quotes.

To retrieve a random quote, run:

```
node index.js getQuote
```

To add a quote, run:

```
node index.js addQuote "this is my quote" "author name"
```

&nbsp;
## Testing

Automated tests are included with this assignment. To receive full credit, all automated tests must pass.

To run the tests once, run:

```
npm test
```

To run the tests in watch mode, run:

```
npm run test:watch
```

&nbsp;
## Requirements for full credit

To receive full credit for this assignment, your program MUST:

  * Be implemented according to the above [instructions](#instructions).
  * Pass all automated tests.

&nbsp;
## Submission

When submitting this assignment, please include **BOTH**:

  * A link to the assignment's GitHub repository.
  * A screenshot of the automated test results.
