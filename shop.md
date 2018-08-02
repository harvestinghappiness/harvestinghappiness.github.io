---
layout: page
title: Shop
permalink: /shop/
---

<p>Welcome to our store! We encourage you to take a look around and share our store with your friends and family. All of our items are handmade, one of a kind, support our programs, and provide sustainable employment opportunities to the people of Santa María de Jesús, Guatemala. Each item has a description of who makes it and how many meals it provides for the elderly on top of the employment opportunities it creates. This store is the result of our desire to create lasting change in this community through employment and empowerment opportunities. Additionally, we love the idea of having high quality item with a mission available consistently in the USA. Whether you are looking to buy for yourself or a loved one, we encourage you to take a look. 100% of the proceeds from the purchases from these items benefit the programs of Cosechando Felicidad Inc. We hope you love these produces and their mission as much as we do!
<br><br>-The Cosechando Felicidad Family</p>

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
        {% if product.meals %}<p class="product-meals">Meals Provided: {{ product.meals }}</p>{% endif %}
    </div>
    </a>
</div>
{% endif %}
{% endfor %}
</div>