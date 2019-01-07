# reactjs-simple-scaffold

An utility tool to generate files to you.

To install it run this on a terminal:

```sh
npm install --save reactjs-simple-scaffold
```

There is two ways of using this lib. The easyest one is to put the following line on your `package.json`:

```json
// package.json file
{
  // [...]
  "scripts": {
    "scaffold": "node ./node_modules/reactjs-simple-scaffold/scaffold"
  }
  // [...]
}
```

## Usage:

With `scaffold` on your scripts you can run this to help you to generate some files.

### If you're using NPM:

```sh
npm run scaffold -- <parameters>
```

### If you're using Yarn:

This section will be tested and certainly improved to work as well as it runs with NPM.

### Acceptable Parameters:

Two parameters are acceptable:

- The firs one indicates if you, developer, wants to scaffold a Page (connected or not with a Reducer) or a Component;
- The second indicates the name that are gonna be used as a base to generate the classes names, reducer names, etc.

If no parameters are passed, the script will ask for its name and types. Give it a try.

### Example:

Run this to auto generate the files:

```sh
npm run scaffold -- P Home
```

or run this if you want to specify what are gonna be created:

```sh
npm run scaffold
```
