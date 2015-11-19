---
layout: post
title: Blog
permalink: /blog/
---

<ul class="blog">
  {% for post in site.posts %}
    <li>
      <a href="{{ post.url }}"><h4>{{ post.title }}</h4></a>
      <p class="meta">{{ page.date | date: '%B %d, %Y' }} by {{ post.author }}</p>
      <hr>
      {{ post.excerpt }}
    </li>
  {% endfor %}
</ul>
