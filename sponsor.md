---
layout: page
title: Sponsorship
permalink: /sponsor/
---

<div class="container sponsor-container row">
{% for sponsorObj in site.data.sponsors %}
{% assign sponsor = sponsorObj[1] %}
{% if sponsor.name %}

<div class="sponsor col-sm-4">
    <div class="border">
        <img class="sponsor-img" src="{{ site.url }}/images/sponsors/{{ sponsor.img }}" alt="{{ sponsor.name }}">
        {% if sponsor.name %}<h4 class="sponsor-name">{{ sponsor.name }}</h4>{% endif %}
        {% if sponsor.description %}<p class="sponsor-description">{{ sponsor.description }}</p>{% endif %}
        {% include paypalsponsorbutton.html %}
    </div>
</div>
{% endif %}
{% endfor %}
</div>