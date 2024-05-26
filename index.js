const { program } = require("commander");
const fs = require("fs/promises");
const chalk = require("chalk");
const QUOTE_FILE = "quotes.txt";

program
  .name("quotes")
  .description("CLI tool for inspiration")
  .version("0.1.0");

program
  .command("getQuote")
  .description("Retrieves a random quote")
  .action(async () => {
    try {
      const data = await fs.readFile(QUOTE_FILE, "utf-8");
      const quotes = data.split("\n").filter(line => line.trim() !== "");
      const randomIndex = Math.floor(Math.random() * quotes.length);
      const [quote, author] = quotes[randomIndex].split("|");
      console.log(chalk.green(`"${quote}" - ${author}`));
    } catch (err) {
      console.error(chalk.red("Could not retrieve quotes. Please make sure the quotes.txt file exists."));
    }
  });

program
  .command("addQuote <quote> [author]")
  .description("adds a quote to the quote file")
  .action(async (quote, author = "Anonymous") => {
    try {
      const newQuote = `${quote}|${author}\n`;
      await fs.appendFile(QUOTE_FILE, newQuote);
      console.log(chalk.blue(`Quote added: "${quote}" - ${author}`));
    } catch (err) {
      console.error(chalk.red("This quote could not be added."));
    }
  });

program.parse();
