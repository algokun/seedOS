---
title: "WTF is async?"
date: "2024-11-05"
---

(🚧 work in progress)

Every year I get asked myself these two questions - Why am I still single and What is async, for real? Though I can't try giving a straightforward answer to the former one, I can at-least try attempting to answer the later.

The very first time, I've noticed the usage of the word `async` was in my sophomore year of the college. A friend named it as contact name for a busy friend. He never lifts your phone calls and he's always busy doing something and he don't wanna switch the context and he gets back to the texts at his own time when he's free. I am truly blown away by the choice of words this guy had.

It felt quite obvious by the usage of the word, but is this really what `async` is? I think from the text book definition - yes, it's quite perfect. Instead of blocking the upcoming task/incoming request, we let the current one (a long running task, eg. small talk that goes no where) run in isolation and once done let us know.

I learnt it recently that most of the things that are run in async has nothing to do with CPU. Think about the times you've used the keyword `async`

- when fetching some useless data from db (eg: how many times does [this](https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley) get played?)
- when establishing a connection with database
- waiting for LLM to generate the answer for something stupid that you've asked.
