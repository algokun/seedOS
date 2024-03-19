---
layout: page
title: Home
id: home
permalink: /
---

# Welcome

Hello, I'm [Mohan](https://twitter.com/algokun) and I'm little bit of everything @ [workhack](https://workhack.ai/)

I always wished a corner for myself to put everything's on my head. If you happen to know me, you know how seriously I document the stories of life, but when it comes to putting a bit of something in words, I often stumble. So, I'll be writing here as a habit.

<strong>Index</strong>

<ul>
  {% assign recent_notes = site.notes | sort: "last_modified_at_timestamp" | reverse %}
  {% for note in recent_notes limit: 5 %}
    <li>
      {{ note.last_modified_at | date: "%Y-%m-%d" }} — <a class="internal-link" href="{{ site.baseurl }}{{ note.url }}">{{ note.title }}</a>
    </li>
  {% endfor %}
</ul>

<style>
  .wrapper {
    max-width: 46em;
  }
</style>
