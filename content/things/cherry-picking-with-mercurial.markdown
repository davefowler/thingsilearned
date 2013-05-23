---
date: '2013-05-23'
title: 'Cherry Picking With Mercurial'
category: code
comments: true
---
Merging a full branch in mercurial is quite easy.

    hg update <target branch name>
    hg merge <merging branch name>

But if you would like to just merge in a few of the revisions from a branch and not the whole thing you need to what is called cherry picking in git, but transplanting in mercurial.  Transplanting isn't a default action in mercurial, but the extension to enable it does come by default.  To enable the [transplant extension][docs] open your hg config file

    emacs .hg/hgrc

And add the line *transplant=* under your [extensions]

    [extensions]
    transplant=

Now take a look at your logs to get the numbers for the revisions you'd like to move.

    hg log -b <merging branch name>

Take note of which you'd like to merge and run

    hg update <target branch name>
    hg transplant -b <merging branch name> <rev1> <rev2>

As an example if we'd like to merge revisions 1156, 1157 and 1162 from the *customers* branch into *default* we'd use the following

    hg update default
    hg transplant -b customers 1156 1157 1162



[docs]: http://mercurial.selenic.com/wiki/TransplantExtension "Transplant Extensions"