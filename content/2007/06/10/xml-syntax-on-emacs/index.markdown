---
comments: true
date: '2007-06-10'
slug: xml-syntax-on-emacs
title: XML Syntax on Emacs
wordpress_id: 38
tags:
- plone
- thingsilearned
---

My Emacs editor unfortunately doesn't know that I'm developing for Zope/Plone and that .zcml and .pt files are a form of XML.  I had to look up how to let it know so I could get some syntax highlighting and smart tabbing.  Without those, XML is really annoying.  This time [ThaiOpenSource.com](http://www.thaiopensource.com/nxml-mode/) had the solution with nXML.  It was surprisingly easy to setup.  Download the latest version of [nxml-mode-YYYYMMDD.tar.gz](http://www.thaiopensource.com/download/) and follow the README.  As always there are some modifications to the README to suit specific needs.  Here's what I did.



	
  1. Untar the nxml-mode-YYYYMMDD into ~/emacs

	
  2. Open emacs and type

	
    * `<alt>-x load-file <ret> `

	
    * `~/emacs/nxml-mode-YYYYMMDD/rng-auto.el <ret>`

	
    * `<alt>-x nxml-mode <ret>`




	
  3. Now to get it to load every time open your~/.emacs file and add
`(load "~/emacs/nxml-mode-YYYYMMDD/rng-auto.el")`

	
  4.  Also add the following to get it to recognize common xml extensions including .zcml and .pt

    
    (setq auto-mode-alist
    	(cons '(".(xml|xsl|zcml|pt|rng|xhtml)'" . nxml-mode)
    		auto-mode-alist))




	
  5. Restart Emacs


That should do it.


Dave
