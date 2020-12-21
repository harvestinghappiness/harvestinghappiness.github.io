---
layout: page
title: Contact Us
permalink: /contact/
---

<div class="col-sm-6">
	<h3>Business Contact</h3>
	<pre>
Emily Keller
<a href="mailto:emily@harvestinghappiness.org">emily@harvestinghappiness.org</a>
Cosechando Felicidad Inc.
117 Elk Lane
Williston, VT 05495

For phone or further contact info email Emily Keller.

</pre>
</div>
<div class="col-sm-5 col-sm-offset-1">
    <h3 class="text-center">Check us out on social media!</h3>
    <ul class="social-media-list">
        {% if site.facebook_username %}
        <li>
            <a href="https://facebook.com/{{ site.facebook_username }}">
            <span class="icon  icon--facebook"><img src="{{ site.url }}/images/facebook.svg" alt="Facebook"></span>
            </a>
        </li>
        {% endif %}
        {% if site.instagram_username %}
        <li>
            <a href="https://instagram.com/{{ site.instagram_username }}">
            <span class="icon  icon--instagram"><img src="{{ site.url }}/images/instagram.svg" alt="Instagram"></span>
            </a>
        </li>
        {% endif %}
    </ul>
</div>
<!-- Form Redirect -->
<!-- Hidden iframe -->
<iframe name="secret-frame" width="0" height="0" style="display: none;"></iframe>
<!-- Script to redirect to a custom page -->
<script>
function validateEmail(email) {
    var re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
}

function validateForma() {
var x = document.forms["forma"]["entry.917075521"].value;
console.log(x);
var y = document.forms["forma"]["entry.2068441859"].value;
console.log(y);
var z = document.forms["forma"]["entry.1857669065"].value;
console.log(z);
var a = document.forms["forma"]["entry.112630363"].value;
console.log(a);
var errors = "";
x = x ? "" : "Name ";
console.log(x);
errors = errors + x;
y = y && validateEmail(y) ? "" : "Email ";
console.log(y);
errors = errors + y;
console.log(errors);
z = z ? "" : "Subject ";
errors = errors + z;
a = a ? "" : "Message";
errors = errors + a;
if (errors){
alert("These feilds are required: " + errors);
return false;
}
return true;
}

function validateFormb() {
var x = document.forms["formb"]["entry.1272035182"].value;
var y = document.forms["formb"]["entry.170275494"].value;
var errors = "";
x = x ? "" : "Name ";
errors = errors + x;
y = y && validateEmail(y) ? "" : "Email ";
errors = errors + y;
if (errors){
alert("These feilds are required: " + errors);
return false;
}
return true;
}

document.getElementById("ss-submitb").addEventListener("click", function() {
// adds a delay because the results page loads before the form has a chance to submit
if (validateFormb()){
setTimeout(function() {
// replace the url in quotes below to where you want to the user to be redirected to
window.location = "https://www.harvestinghappiness.org/newssuccess/";
}, 1000);
}
});
</script>

<figure class="col-sm-8 col-sm-offset-2">
    <img src="{{ site.url }}/images/directors.jpg" alt="Co-Founders Brennan McMillen &amp; Emily Keller" title="" style="">
    <figcaption>Co-Founders Emily Keller &amp; Brennan McMillen</figcaption>
</figure>
