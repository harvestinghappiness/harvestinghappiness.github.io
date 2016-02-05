---
layout: page
title: People
permalink: /people/
---

{% for person in site.data.people %}
<div class="person">
	<img src="{{ site.url }}/images/{{ person.img }}">
	{% if person.name %}<p class="name">{{ person.name }}</p>{% endif %}
	{% if person.email %}<p class="email"><a href="mailto:{{ person.email }}">{{ person.email }}</a></p>{% endif %}
	{% if person.position %}<p class="position">{{ person.position }}</p>{% endif %}
	{% if person.bio %}<p class="bio">{{ person.bio }}</p>{% endif %}
</div>
{% endfor %}