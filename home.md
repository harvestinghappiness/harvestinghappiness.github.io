---
layout: hero
title: Cosechando Felicidad Inc.
permalink: /
---

<div class="hero home-hero">
  <div class="hero-container">
    <h1 class="hero-text">Creating a community where those in most need can receive holistic aide as we strive to be the hands and feet of Jesus</h1>
  </div>
</div>

<div class="guide-star-container home-section">
  <a class="guide-star-link" href="https://www.guidestar.org/profile/47-4437262" target="#"><img alt="Guide Star Platinum Seal of Transparency 2017" src="{{ site.url }}/images/guideStarSeal_2017_platinum_SM.svg"></a>
  <a class="guide-star-link" href="https://www.guidestar.org/profile/47-4437262" target="#"><img alt="Guide Star Platinum Seal of Transparency 2018" src="{{ site.url }}/images/guideStarSeal_2018_platinum_SM.svg"></a>
  <a class="guide-star-link" href="https://www.guidestar.org/profile/47-4437262" target="#"><img alt="Guide Star Platinum Seal of Transparency 2019" src="{{ site.url }}/images/guideStarSeal_2019_platinum_SM.svg"></a>
</div>

<div class="values-section home-section">
{% for valued in site.data.values %}
{% assign value = valued[1] %}

<div class="value-container val-{{ forloop.index }} {% cycle "", "value-reverse" %}">
  <div class="value-text-container">
    <h3 class="value-title">
      {{ value.title }}
    </h3>
    <p class="value-text">{{ value.text }}</p>
  </div>

  <div class="value-image-container">
    <img
      src="{{ site.url }}/images/values/{{ value.src }}"
      alt="{% if value.alt %}{{ value.alt }}{% else %}{{ value.title }}{% endif %}"
    />
  </div>
</div>
{% endfor %}
</div>

<div class="results-section home-section">
  <h2 class="section-title">Results</h2>
  <div class="results-table-container">
    {% include results-tables.html %}
  </div>
</div>

<div class="people-section home-section">
  <h2 class="section-title">People</h2>
  <div class="people-container">
    {% for persond in site.data.people %}
    {% assign person = persond[1] %}
    {% if person.bio %}
    <div class="person-container">
      <div class="person-image-container">
        <img class="person-image" src="{{ site.url }}/images/people/{{ person.img }}" alt="{{ person.name }}">
        <h3 class="person-name">
          {{ person.name }}
        </h3>
        <p class="person-position">{{ person.position }}</p>
      </div>
    </div>
    {% endif %}
    {% endfor %}

  </div>
</div>

<div class="newsletter-section home-section">
  <h3 class="section-title">Sign Up for Our Newsletter!</h3>
  {% include newsletter-form.html %}
</div>
