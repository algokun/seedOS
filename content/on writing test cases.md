---
title: "on writing test cases"
date: "2024-03-21"
---

##### TL;DR

1. Separation of concern - When writing test cases, it helps choose what to test and how to test (in isolation or within a function)

2. Understanding your assumptions - When thinking about the test cases for a function, listing down the assumptions helps to ignore the scenarios that don't fall under them.


Over the past few days, I have spent most of my energy building up the test coverage for our product. I barely wrote unit tests previously in my life. After writing a couple of few, I started to understand the beauty of it. This post is an attempt to document it.

##### Defining the granularity

- I began by listing down the blocks of code that needed these tests
- Delve deeper into each of these blocks and repeat the same until when there's a block that doesn't have any side effects. 
	- Identifying these blocks seems a bit trivial. Just look for areas in your code where the behaviour can vary even when the input passed is the same the other time. Like a function that works like a Schrodinger's box.
		- Eg: Any function that includes an external service dependency 

##### What needs to be tested?

- The goal of this exercise is to define exactly what needs to be tested.
- This is where separation of concern comes to help.
	- To explain this, let me take a function that makes a db call and gets me an object and I take an object and return the transformation of it.
	- I don't have to care about the DB call when I want to test just the transformation as it's a different concern altogether. I can just mock the DB call to produce different objects and check the transformation behaviour.

##### Test Scenarios

![[Pasted image 20240723234810.png]]

- Now think about all the unexpected behaviours your code can get into. 
- By doing this you can test how robust your code is and given these hurdles can it generate the ideal output.
- After you think about all these cases, maybe you should ask yourself how likely is it to happen in real life.
	- This is when you should think about all the assumptions that you made when the execution started from the function.