const { crawlPage } = require("./crawl.js");

async function main() {
  if (process.argv.length < 3) {
    console.log("no website provided");
    process.exit(1);
  }
  if (process.argv.length > 3) {
    console.log(
      "Too many cmd line args error: only provide one website argument"
    );
    process.exit(1);
  }

  const baseURL = process.argv[2];

  console.log(`crawly started crawl of: ${baseURL}`);

  const pages = await crawlPage(baseURL, baseURL, {});

  for (const page of Object.entries(pages)) {
    console.log(page);
  }
}

main();
