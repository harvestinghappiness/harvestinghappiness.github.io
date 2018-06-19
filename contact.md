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
<div class="col-sm-5 col-sm-offset-1 newsletter">
    <h3>Sign up for our newsletter!</h3>
    <hr>
    <form action="https://docs.google.com/forms/d/1UxdIzdVGaljOddK3Huq8BP0SYxs4xSLq1PQnSsLNZ7g/formResponse" method="POST" id="ss-form" target="secret-frame" onsubmit="" name="formb">
        <div class="form-group">
            <label class="ss-q-item-label" for="entry_1272035182">
                Name *:
            </label>
            <input type="text" name="entry.1272035182" value="" class="ss-q-short form-control" id="entry_1272035182" dir="auto" aria-label="Name:  " aria-required="true" required="" title="">
        </div>
        <div class="form-group">
            <label class="ss-q-item-label" for="entry_170275494">
                Email address *:
            </label>
            <input type="email" name="entry.170275494" value="" class="ss-q-short form-control" id="entry_170275494" dir="auto" aria-label="Email address:  " aria-required="true" required="" title="">
        </div>
        <div class="form-group">
            <input type="hidden" name="draftResponse" value="[,,&quot;-3198933841993541816&quot;]">
            <input type="hidden" name="pageHistory" value="0">
            <input type="hidden" name="fvv" value="0">
            <input type="hidden" name="fbzx" value="-3198933841993541816">
            <input type="submit" name="submit" value="Submit" id="ss-submitb" class="jfk-button jfk-button-action btn btn-default">
        </div>
    </form>
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
