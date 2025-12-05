TS File => lexer => parser => binder => checker => emitter => (.js, .d.ts. .map)

## lexer:

-   break the code into tokens.

## parser:

-   parse the tokens into an AST.

## binder:

-   bind the AST to the context (symbol tables, Parent Pointer, Flow Nodes (if,else)).

## checker:

-   check the AST for errors (syntax check, short circuit) => note all these editor ide's fetch this check code from the original ts repo and able to show warnings and errors while write the code.

## emitter:

-   emit the code into a .js file (remove all the types from the code and make like js code).

## output:

-   (.js, .d.ts, .map)
