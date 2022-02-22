# TYPESCRIPT IN 50 LESSONS - LESSON FIVE: TYPE DECLARATION FILES

Working JSDoc type annotation can get us very far, but it can lead to other new problems.

We're most likely going to see codebase cluttering as a result many comment and subtypes.

We may also encounter duplicate type (especially custom types) across multiple files.

To mitigate the above mentioned problems, we use type declaration files (.d.ts). This file is a TypeScript file that holds all the custom types we want to attach to our variables, parameters, etc.

## Key Takeaways

- TypeScript supports type declaration files that end with .d.ts.
  
- To declare a custom type, you precede the type name with the `type` keyword.
  
- You import your custom type from the .d.ts files for use in JSDoc like this:
  
`@typedef { import("location-to-your-file.d").<typeName> } <typeName>` where:

`location-to-your-file.d` is the path to the type declaration file.

`<typeName>` is the type alias (the name of your custom type).
