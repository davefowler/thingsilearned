---
date: '2013-05-29'
title: Javascript Controlled Pin Button for Images and Videos
comments: true
---
My sister is making a great new site called [Almost A Third Grader][AlmostAThirdGrader] where during the summer she posts 3 videos a week for students between 2nd and 3rd grade to keep their skills fresh.

She wants to share them on pinterest and make it easy for others to do the same by adding an embedded button to pin the videos.  Pinterest has a great [tool for manually creating the widgets][pinbutton] but it was a bit unclear on how to do it programatically, and how to do it for video.

## Pin Button for Images

For each Pin you need to get the pin's url, image, and description.  In the following code snippet I've broken out each of those into seperate variables for ease of use.

<script src="https://gist.github.com/davefowler/5668507.js"></script>

## Youtube Pins

<a href="http://www.almostathirdgrader.com/odd-and-even.html"><img src="{{ media_url('images/pin.png') }}"/></a>

If you're pinning YouTube videos things are slightly different.  You need to grab the YouTube video code from the video link and use that to grab the video's thumbnail from the YouTube API.  If the image you pin is from the YouTube API, Pinterest is smart enough to automatically make that pin a video share.  Basically you want to replace line 2 from the above code snippet with these lines.

<script src="https://gist.github.com/davefowler/5668548.js"></script>

Note that this code assumes you're using the new YouTube embed format (with the path /embed/ in it's URL).  Use the commented out example in line 2 instead of 3 if you're using the old embed format.

## Placing it in the Page

Finally you'll need to place the code held in the *button* variable into the page somewhere.  If you're using jquery you can embed simply using

    $('#placeholder').append(button);

Where *#placeholder* is the [jquery selector][selectors] for the dom node you'd like to place the button in.


[pinbutton]: http://business.pinterest.com/widget-builder/#do_pin_it_button
[AlmostAThirdGrader]: http://almostathirdgrader.com "Almost A Third Grader"
[selectors]: http://api.jquery.com/selector/