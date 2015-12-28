---
layout: page
title: Contact Us
permalink: /contact/
---

<div class="contact col-sm-12">	
	<p>If you had any additional questions please do not hesitate to contact us at emily@harvestinghappiness.org</p>
	<h3><a href="{{ site.newsletter }}">Sign up for our monthly newsletter!</a></h3>
</div>
<div class="col-sm-6">
	<h3>{{ site.data.people['emily'].name }}, {{ site.data.people['emily'].position }}</h3>
	<p><a href="mailto:{{ site.data.people['emily'].email }}">{{ site.data.people['emily'].email }}</a></p>
	<h3>{{ site.data.people['brennan'].name }}, {{ site.data.people['brennan'].position }}</h3>
	<p><a href="mailto:{{ site.data.people['brennan'].email }}">{{ site.data.people['brennan'].email }}</a></p>
</div>
<div class="col-sm-6">
	<h3>Cosechando Felicidad</h3>
	<pre>
117 Elk Lane
Williston, VT 05495</pre>
	<h3>General Inquiry?</h3><p>Fill out <a target="_blank" href="{{ site.contactform }}">this Form!</a></p>
</div>

{% include figure.html src="directors.jpg" caption="Co-Founders Brennan McMillen & Emily Keller" %}
