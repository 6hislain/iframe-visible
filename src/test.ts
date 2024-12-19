// npm run test https://example.com

import { isEmbeddable } from "."

const args = process.argv.slice(2)

if (args.length === 0) {
  console.error("\x1b[31mPlease provide a URL as an argument.\x1b[0m")
  process.exit(1)
}

const url = args[0]

isEmbeddable(url)
  .then((embeddable) => {
    if (embeddable) {
      console.log("\x1b[32m%s can be embedded in an iframe.\x1b[0m", url)
    } else {
      console.log("\x1b[31m%s cannot be embedded in an iframe.\x1b[0m", url)
    }
  })
  .catch((error) => {
    console.error("\x1b[31mError checking embeddability:\x1b[0m", error)
  })