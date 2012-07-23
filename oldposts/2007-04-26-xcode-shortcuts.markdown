---
date: '2007-04-26 19:39:36'
layout: post
slug: xcode-shortcuts
status: publish
title: Xcode Editor - Kinda Sucks
wordpress_id: '8'
categories:
- os x
- thingsilearned
---

Scince my harddrive died a month ago I haven't been able to find the mac version of emacs I installed 2 years ago and loved ever since.  So lately I've been having to use Xcode a lot more.  Sure there are a lot of nice things about it that supposedly make building projects and debugging more simple but I'm not a fan at all of the editor.  First, when I'm just opening files from my finder they all open up new windows.  You have to drag each file individually (not as a group) into an already open window to get them all in the same editor.  Then its difficult to switch back and forth between files.  Until today I had to reach for the mouse and click the next arrow!  What?!  It sounds lame but its really a no brainer that any good code editor should have a quick way to switch back and forth between open files, like Ctrl-x b in emacs.  Anyway, I figured Xcode has to have this feature so I did some googling.  There's very little info on it, I found a clue on [this guy's blog.](http://inessential.com/?comments=1&postid=3216)

Aparently you can use Ctrl-1, and then use the arrows keys to choose which file you want.  That's a pretty crappy shortcut if you ask me.  You need to use both hands and each has to remove itself from the home row.  Luckily a submitter to that blog added


> You can now add command keys to any menu item in any application that currently lacks them.

System Preferences > Keyboard & Mouse > Keyboard Shortcuts

Scroll to the bottom of the list and you'll see "Application Keyboard Shortcuts". Click the + sign to add a new one.


That got me excited but the process of doing this wasn't intuitive. It asks for a Menu Title of the shortcut you're making.

[![Adding a Keyboard Shortcut to Xcode](http://thingsilearned.files.wordpress.com/2007/04/shortcutadd1.png)](http://thingsilearned.files.wordpress.com/2007/04/shortcutadd1.png)

What?  What's that? I found out [here.](http://docs.info.apple.com/article.html?artnum=152140&coll=cp) Apparently you have to use the exact command (including the ... if its there) listed in the file menu of the app you want the shortcut for.  Unfortunately at this point you can't open your app because it has to be closed during the process or the shortcutting won't work.  It'd be nice if they put a nice pull down menu of your options here.  But it isn't there and either is the menu option in Xcode to switch between files.  I tried the command "Go Back" as that's what pops up when I hover my mouse over the button I want to short cut.  I even tried a few cuss words but none of it worked.  Xcode really needs to fix both how files are added to the editor, shortcuts for moving between files, and while they're at it it'd be great to throw in the function hiding options in the gutter that are really handy in visual studio :).

Like I said I'm somewhat new to Xcode so if anyone knows how to fix any of these problems with some settings, or hacks that I haven't discovered please leave a comment.


Dave
