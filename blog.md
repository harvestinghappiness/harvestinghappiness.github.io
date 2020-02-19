---
layout: page
title: Blog
permalink: /blog/
---

<ul class="blog">
  {% for post in site.posts %}
    {% if post.author %} {% assign author = site.data.people[post.author] %} {% endif %}
    <li>
      <a href="{{ post.url }}"><h4>{{ post.title }}</h4></a>
      <div class="blog-description-container">
        <div class="meta-container">
          {% if post.author %}<p class="meta">{{ author.name }}{% endif %}</p>
          <p class="meta">{{ post.date | date: '%m/%d/%y' }}</p>
        </div>
        <p class="blog-description">{{ post.content | strip_html | truncatewords: 50 }}</p>
      </div>
    </li>
  {% endfor %}
</ul>
