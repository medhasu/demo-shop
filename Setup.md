## Installation

Install node version 20.1.0

```bash
node --version
```

```bash
npm --version
```

During prepare this document, Recent node version 21, we are getting an error
like

```txt
(node:100012) [DEP0040] DeprecationWarning: The `punycode` module is deprecated. Please use a userland alternative instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
npm ERR! cb.apply is not a function

npm ERR! A complete log of this run can be found in:
```

## Create nextjs project

To create nextjs project through command line

```bash
npx create-next-app@latest
```

## Local testing Dynamo DB

Follow the instructions
https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/DynamoDBLocal.DownloadingAndRunning.html
to

download jar file and run locally

```bash
podman run -p 8000:8000 amazon/dynamodb-local
```

## References

- https://nextjs.org/docs/getting-started/installation
- nextjs intergration with apollo server  https://www.npmjs.com/package/@as-integrations/next
-
