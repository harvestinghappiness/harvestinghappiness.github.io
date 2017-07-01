---
layout: page
title: People
permalink: /people/
---

We are blessed to have many awesome volunteers....here are a few of them!

{% for personb in site.data.people %}
{% assign person = personb[1] %}
{% if person.bio %}
<div class="person">
	<img src="{{ site.url }}/images/people/{{ person.img }}">
	{% if person.name %}<p class="name">{{ person.name }}</p>{% endif %}
	{% if person.email %}<p class="email"><a href="mailto:{{ person.email }}">{{ person.email }}</a></p>{% endif %}
	{% if person.position %}<p class="position">{{ person.position }}</p>{% endif %}
	{% if person.bio %}<p class="bio">{{ person.bio }}</p>{% endif %}
</div>
<hr>
{% endif %}
{% endfor %}
