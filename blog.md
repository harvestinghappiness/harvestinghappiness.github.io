---
layout: post
title: Blog
permalink: /blog/
---

<ul class="blog">
  {% for post in site.posts %}
    {% if post.author %} {% assign author = site.data.people[post.author] %} {% endif %}
    <li>
      <a href="{{ post.url }}"><h4>{{ post.title }}</h4></a>
        <p class="meta">{{ post.date | date: '%B %d, %Y' }}{% if post.author %} by {{ author.name }}{% endif %}</p>
      <hr>
      {% if post.image %}
      <div class="blog-img" style="background-image: url({{ site.url }}/images/{{ post.image }});">
      {% endif %}
      {{ post.content | strip_html | truncatewords: 50 }}
    </li>
  {% endfor %}
</ul>
