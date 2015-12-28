---
layout: page
title: Test
permalink: /test/
---

<form action="https://docs.google.com/forms/d/1ooxeou7pVxHweD8-jG7Hq6cQONiDby3u1yt0TBef1wg/formResponse" method="POST" id="ss-form" target="secret-frame" onsubmit="">
    <div class="form-group">
        <label for="itemView.getDomIdToLabel()" aria-label="(Required field)">First &amp; Last Name: *
        </label>
        <input type="email" name="entry.917075521" value="" class="ss-q-short form-control" id="entry_917075521" dir="auto" aria-label="Name:  First and Last " aria-required="true" required="" title="">
    </div>
    <div class="form-group">
        <label class="ss-q-item-label" for="entry_2068441859">Email Address: *
        </label>
        <input type="text" name="entry.2068441859" value="" class="ss-q-short form-control" id="entry_2068441859" dir="auto" aria-label="Email address:  " aria-required="true" required="" title="">
    </div>
    <div class="form-group">
        <label class="ss-q-item-label" for="entry_1857669065">
            Subject:
        </label>
        <input type="text" name="entry.1857669065" value="" class="ss-q-short form-control" id="entry_1857669065" dir="auto" aria-label="Subject:  " title="" required="">
    </div>
    <div class="form-group">
        <label class="ss-q-item-label" for="entry_112630363">
            Message:
        </label>
        <textarea name="entry.112630363" rows="8" cols="0" class="ss-q-long form-control" id="entry_112630363" dir="auto" aria-label="Message:  " aria-required="true" required=""></textarea>
    </div>
    <div class="form-group">
        <input type="hidden" name="draftResponse" value="[,,&quot;6162429118050415973&quot;]">
        <input type="hidden" name="pageHistory" value="0">
        <input type="hidden" name="fvv" value="0">
        <input type="hidden" name="fbzx" value="6162429118050415973">
        <input type="submit" name="submit" value="Submit" id="ss-submit" class="jfk-button jfk-button-action btn btn-default">
    </div>
</form>

<!-- Form Redirect -->

<!-- Hidden iframe -->
<iframe name="secret-frame" width="0" height="0" border="0" style="display: none;"></iframe>

<!-- Script to redirect to a custom page -->
<script>
// replace "ss-submit" with the ID of your submit button
document.getElementById("ss-submit").addEventListener("click", function(){
  // adds a delay because the results page loads before the form has a chance to submit
  setTimeout(function() {
    // replace the url in quotes below to where you want to the user to be redirected to
    window.location = "http://www.google.com";
  }, 1000);
});
</script>
