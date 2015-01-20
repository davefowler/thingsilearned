---
date: '2015-01-19'
title: Random Distributions in Python
comments: true
category: code
blocksWide: 2
---
I've been working on a few more fake datasets to demo Chartio with.  I've built an easy enough framework to create models simulating a company and generate many months of fake data for it.  Chartio has a way, however, of really showing the fake parts of any datasets.  I quickly realized that I couldn't simply generate random variables, but I also had to keep in mind the behavior (distribution) of those values.

Python's [random library][random] has several distribution methods built in. I used iPython notebook to plot out what they all looked like and thought I'd share the knowledge here.


For more information on the details of each distribution function checkout the [random lib documentation][random].

[random]: https://docs.python.org/2/library/random.html "Python Random Library"

<iframe
        style="border: 0px; width: 100%; height: 4000px;"
        src="{{ media_url('files/randomnotebook.html') }}"></iframe>
