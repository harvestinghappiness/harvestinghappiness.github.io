---
layout: post
title: Blog
permalink: /blog/
---

<ul class="blog">
  {% for post in site.posts %}
    {% assign author = site.data.people[post.author] %}
    <li>
      <a href="{{ post.url }}"><h4>{{ post.title }}</h4></a>
        <p class="meta">{{ page.date | date: '%B %d, %Y' }}{% if post.author %} by {{ post.author.name }}{% endif %}</p>
      <hr>
      {{ post.excerpt }}
    </li>
  {% endfor %}
</ul>
