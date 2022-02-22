# TYPESCRIPT IN 50 LESSONS - LESSON SIX: AMBIENT DECLARATION FILES

Like the custom type declaration, the ambient type declaration is the place you place you define global variables, constants, object, etc, and make them known across the entire program.

The ambient type declaration files also have **.d.ts** file extension.

We put `declare` keyword in front of the type name to declare an ambient type.
E.g: `declare const isDevelopment: boolean;`

The `declare` keyword tell TypeScript that we want to make known that this constant exists.
Any ambient will be become available in all your JavaScript files.

## Key Takeaways

- We we ambient declaration types to define global variables.

- The `declare` keyword defines your ambient type.

- We can also install ambient library declarations like the jQuery's `$` (the shortcut of jQuery).
