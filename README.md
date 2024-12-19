# iFrame Visible

A simple TypeScript package to check whether a given URL can be embedded in an iframe based on its HTTP headers.

## Installation

To install the package, run:

```
npm install iframe-visible
```

## Usage

You can use the `isEmbeddable` function to check if a URL is embeddable in an iframe. Here's how to use it:

```typescript
import { isEmbeddable } from "iframe-visible";

const url = "https://example.com";

isEmbeddable(url)
  .then((embeddable) => {
    if (embeddable) {
      console.log(`${url} can be embedded in an iframe.`);
    } else {
      console.log(`${url} cannot be embedded in an iframe.`);
    }
  })
  .catch((error) => {
    console.error("Error checking embeddability:", error);
  });
```

using _async_, _await_

```typescript
import { isEmbeddable } from "iframe-visible";

async function checkEmbeddability() {
  const url = "https://example.com";

  try {
    const embeddable = await isEmbeddable(url);
    if (embeddable) {
      console.log(`${url} can be embedded in an iframe.`);
    } else {
      console.log(`${url} cannot be embedded in an iframe.`);
    }
  } catch (error) {
    console.error("Error checking embeddability:", error);
  }
}

checkEmbeddability();
```

## API

### `isEmbeddable(url: string): Promise<boolean>`

- **url**: The URL to check.
- Returns a promise that resolves to `true` if the URL can be embedded in an iframe, and `false` otherwise.

## Contributing

Feel free to submit issues or pull requests for improvements or bug fixes.

## License

This project is licensed under the MIT License.
