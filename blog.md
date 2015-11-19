---
layout: page
title: Blog
permalink: /blog/
---

<ul class="blog">
  {% for post in site.posts %}
    <li>
      <a href="{{ post.url }}"><h4>{{ post.title }}</h4></a>
      {{ post.excerpt }}
    </li>
  {% endfor %}
</ul>
