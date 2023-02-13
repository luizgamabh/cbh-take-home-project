# Refactoring

You've been asked to refactor the function `deterministicPartitionKey` in [`dpk.js`](dpk.js) to make it easier to read and understand without changing its functionality. For this task, you should:

1. Write unit tests to cover the existing functionality and ensure that your refactor doesn't break it. We typically use `jest`, but if you have another library you prefer, feel free to use it.
2. Refactor the function to be as "clean" and "readable" as possible. There are many valid ways to define those words - use your own personal definitions, but be prepared to defend them. Note that we do like to use the latest JS language features when applicable.
3. Write up a brief (~1 paragraph) explanation of why you made the choices you did and why specifically your version is more "readable" than the original.

You will be graded on the exhaustiveness and quality of your unit tests, the depth of your refactor, and the level of insight into your thought process provided by the written explanation.

## Your Explanation Here

- [x] Extracted helper functions 
  > `isString` and `generateHash` functions are not isolated to improve readability and make it easier to understand the purpose of each part of the function. They are now reusable.
  > PS.: In more complex projects we could have a separate file for each helper function, with as much abstraction as possible.
- [x] Simplified control flow
  > The control flow is not simpler, by using default initial value of candidate. unnecessary nested if statements were eliminated. 
- [x] Improved variable names
  > I changed the name of the candidate variable from a noun to a verb (calculatePartitionKey) to better reflect its purpose, and also used more descriptive variable names for TRIVIAL_PARTITION_KEY and MAX_PARTITION_KEY_LENGTH.
- [x] deterministicPartitionKey function is more readable
  > The isolation of helper functions and constants makes the `deterministicPartitionKey` function cleaner and clearer.
