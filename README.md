# Javascript testing with Jest / project

A collection of JavaScript functions with corresponding tests.

## Table of Contents

- [Introduction](#introduction)
- [Functions](#functions)
  - [capitalize](#capitalize)
  - [reverseString](#reversestring)
  - [calculator](#calculator)
  - [caesarCipher](#caesarcipher)
  - [analyzeArray](#analyzearray)
- [Getting Started](#getting-started)
- [Running Tests](#running-tests)
- [Contributing](#contributing)
- [License](#license)

## Introduction

This project includes a set of JavaScript functions, each accompanied by tests to ensure their correctness. The functions cover various tasks, from string manipulation to basic arithmetic calculations.

## Functions

### capitalize

The `capitalize` function takes a string and returns it with the first character capitalized.

### reverseString

The `reverseString` function takes a string and returns it reversed.

### calculator

The `calculator` object contains functions for basic operations: add, subtract, divide, and multiply. Each function takes two numbers and returns the correct calculation.

### caesarCipher

The `caesarCipher` function takes a string and a shift factor and returns it with each character “shifted” according to the Caesar cipher algorithm. It handles wrapping from z to a, keeps the same case, and considers punctuation.

### analyzeArray

The `analyzeArray` function takes an array of numbers and returns an object with the following properties: average, min, max, and length.

Example:

```javascript
const object = analyzeArray([1, 8, 3, 4, 2, 6]);

object ==
  {
    average: 4,
    min: 1,
    max: 8,
    length: 6,
  };
```
