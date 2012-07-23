---
date: '2009-04-13 14:17:32'
layout: post
slug: easy_install-uninstalling
status: publish
title: Uninstalling the easy_install(ed)
wordpress_id: '321'
categories:
- python
---

Today I was switching from the Python Cheese Shop's version of the Twisted Web Framework to the trunk version.  I'd previously installed Twisted with the handy

    
    easy_install PackageName


Worked great!  Unfortunately its not so obvious on how to uninstall...  After some research I [found it](http://peak.telecommunity.com/DevCenter/EasyInstall#uninstalling-packages) and am sharing it here so I wont' forget.

Simply use easy_install with the -m option

    
    easy_install -m PackageName


Which will remove the installed dependencies.  Then you can delete the PackageName.egg file that easy_install left behind.  You may have to do some "locate"ing to find where it put the package as its different on every system.

Another hint is that easy_install creates a file easy-install.pth in your site-packages directory.  That file lists the path to the various eggs you've installed with easy_install.  In some cases you may simply be able to delete the path of your package in that file.
