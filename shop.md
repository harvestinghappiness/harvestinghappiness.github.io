---
layout: page
title: Shop
permalink: /shop/
---

<div class="container product-container row">
{% for productObj in site.products %}
{% assign product = productObj.product %}
{% if product.name %}

<div class="product col-sm-4 col-md-3">
    <a href="{{ productObj.url }}">
    <div class="border">
        <img src="{{ site.url }}/images/products/{{ product.img }}">
        {% if product.name %}<h4 class="product-title">{{ product.name }}</h4>{% endif %}
        {% if product.summary %}<p class="product-summary">{{ product.summary }}</p>{% endif %}
        {% if product.price %}<p class="product-price">${{ product.price }}</p>{% endif %}
    </div>
    </a>
</div>
{% endif %}
{% endfor %}
</div>