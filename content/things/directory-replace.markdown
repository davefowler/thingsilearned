---
date: '2013-04-19'
title: 'Directory String Replace'
comments: true
---
Yesterday I discovered that many of the old posts on the [Chartio Blog][] used odd unicode versions of quotes that were being rendered terribly.  So I needed to do a find-replace for an entire directory.

After over an hour of reading [man pages][] and online examples I discovered that I really hate the SED command.  I asked around about other's experiences and it everyone that I talked to who had tried it has their own horror stories to go along with it.

Maybe it just needs some better documentation, and if so I wish I could provide it, but I ended up writing/[modifying][] a simple python script to do string replacing on a directory level.

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