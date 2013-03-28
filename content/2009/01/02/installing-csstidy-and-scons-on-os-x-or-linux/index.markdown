---
comments: true
date: '2009-01-02'
slug: installing-csstidy-and-scons-on-os-x-or-linux
title: Installing CSSTidy and Scons on OS X or Linux
wordpress_id: 177
tags:
- django
- python
---

I'm setting up [django-compress](http://code.google.com/p/django-compress/), and incredibly helpful django tool for compressing media files.  By default it requires the installation of [CSSTidy](http://csstidy.sourceforge.net/) which was not as smooth of a task as most.  Here are my notes.

**Installing Scons**

To install CSSTidy you have to have [Scons](http://www.scons.org/) in order to install it.  Scons is similar to Make but uses python and probably has a ton of other differences as well.  The following will install scons.

`
wget http://prdownloads.sourceforge.net/scons/scons-1.2.0.tar.gz
tar -xzvf scons-1.2.0.tar.gz
cd scons-1.2.0
sudo python setup.py install --standard-lib
`

I took me a short while to discover the need to use the --standard-lib flag.  If you do not scons is not installed in the python path and you will get the following error when trying to install csstidy

_scons: *** No SConstruct file found.
File "/usr/local/lib/scons-1.2.0/SCons/Script/Main.py", line 826, in _main_

**Install CSSTidy**

`

wget http://downloads.sourceforge.net/csstidy/csstidy-source-1.4.zip?modtime=1184828155&big_mirror=0
unzip csstidy-source-1.4.zip
scons
sudo cp release/csstidy/csstidy /usr/local/bin/

`

Note that the last command assumes /usr/local/bin is in your $PATH.  Change it if you would like to place it in another place.
