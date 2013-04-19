---
date: '2013-04-19'
title: 'Directory String Replace'
comments: true
---
Yesterday I discovered that many of the old posts on the [Chartio Blog][] used odd unicode versions of quotes that were being rendered terribly.  So I needed to do a find-replace for an entire directory.

The tool for doing so is the *sed* command line utility, and not using it has a [history of getting you ridiculed.][harthur]  After over an hour of reading [man pages][] and online examples I discovered that I really hate sed.  I asked around about other's experiences and it everyone that I talked to who had tried it has their own horror stories to go along with it.

Its probably a great tool, and I'm probably just too dumb to make it work for me and my odd unicode quote replacement job, but I ended up just writing/[modifying][] a simple python script to do string replacing on a directory level.  Its not a command line tool, or replacement for SED.  Just a script that I found useful and am sharing for others that may as well.

<script src="https://gist.github.com/davefowler/5422045.js"></script>

It takes 4 parameters:

 - **directory** - the root directory to do the string replace in
 - **find** - the string that you would like to find
 - **rep** - the string that you would like to replace the found string with
 - **filePattern** - a pattern to match the files you would like searched (eg. '\*.html' or '\*.py')

The following example will replace all instances of the word *"old"* with *"new"* in files ending in *".html"* located in the *~/some/directory/* directory

    findReplace('~/some/directory/', "old", "new", '*.html')


[man pages]: http://unixhelp.ed.ac.uk/CGI/man-cgi?sed "SED man pages"
[modifying]: http://stackoverflow.com/questions/4205854/python-way-to-recursively-find-and-replace-string-in-text-files "Replace String in Driectory Script"
[Chartio Blog]: http://chartio.com/blog/
[harthur]: http://harthur.wordpress.com/2013/01/24/771/