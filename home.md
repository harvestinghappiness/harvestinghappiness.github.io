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

<div class="guide-star-container">
  <a class="guide-star-link" href="https://www.guidestar.org/profile/47-4437262" target="#"><img alt="Guide Star Platinum Seal of Transparency 2017" src="{{ site.url }}/images/guideStarSeal_2017_platinum_SM.svg"></a>
  <a class="guide-star-link" href="https://www.guidestar.org/profile/47-4437262" target="#"><img alt="Guide Star Platinum Seal of Transparency 2018" src="{{ site.url }}/images/guideStarSeal_2018_platinum_SM.svg"></a>
  <a class="guide-star-link" href="https://www.guidestar.org/profile/47-4437262" target="#"><img alt="Guide Star Platinum Seal of Transparency 2019" src="{{ site.url }}/images/guideStarSeal_2019_platinum_SM.svg"></a>
</div>

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

Cosechando Felicidad Inc., (or Harvesting Happiness, in English), is a 501(c)3 non-profit corporation working in Santa Maria de Jesús, Guatemala. Our goal is to empower the community by forming genuine relationships through which people can receive the help they need.

**Vision:** To walk alongside the sick, the elderly, the abandoned, and the hopeless by providing genuine
support, and physical aide. Regardless of gender, religion, level of education, job, or past experiences.

**Mission:** We strive to maintain a safe location where everyone is welcome to come and find physical,
emotional, and spiritual support.

[Learn more about us](/about/)
