# TypeScript Type 'string' is not assignable to type 'number' Bug

This repository demonstrates a common TypeScript error: `Type 'string' is not assignable to type 'number'`.  This error arises when a function expecting a numeric argument receives a string, even if the string looks numerically valid.

## Bug Description
The `bug.ts` file contains two functions, `add` and `subtract`, which correctly expect and return numbers. However, if you were to pass strings to these functions (even strings representing numbers), TypeScript's type system correctly flags this as an error.

## Solution
The `bugSolution.ts` file provides a solution that addresses the type mismatch.  It demonstrates how to properly type-check and convert string inputs before performing calculations.