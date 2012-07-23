---
date: '2009-01-05 06:00:24'
layout: post
slug: relative-url-parser-snippet
status: publish
title: Relative URL Parser Snippet
wordpress_id: '185'
categories:
- django
- python
---

Python 3.0 seems to come with fancy new features to urllib including [urllib.parse](http://docs.python.org/dev/3.0/library/urllib.parse.html) which is an excellent utility for parsing the different components of URLs.  I however don't use python 3.0 yet and needed a clean way to make full URLs given a base URL and relative URLs.

This is helpful if you're scraping a webpage and need the full paths of any links.  Its not clean but here's the snippet:

    
    import re
    safestarters_re = re.compile('^(http|ftp|#)')
    
    class URLParser:
        def __init__(self, url):
            self.url = url
            self.base = None
            self.dirs = None
        def get_base(self):
            if self.base is None:
                self.base = re.sub('(.*/).*$', '\g', self.url)
            return self.base
        def url_wo_get(self):
            return re.sub('\?.*$', '', self.url)
        def get_dirs(self):
            if self.dirs is None:
                dirs_re = re.compile('(.+?/)')
                self.dirs = dirs_re.findall(self.get_base())[2:]
            return self.dirs
        def relURL(self, rel_url):
            """ returns the joined url given a relative url  """
            if safestarters_re.findall( rel_url ):
                return rel_url
            dirs = self.get_dirs()
            n = 0
            rel_base = self.get_base()
            if rel_url.startswith('.'):
                rel_url, n = re.subn('\.\.\/', '', rel_url)
            elif rel_url.startswith('/'):
                n = len(dirs)
                rel_url = rel_url[1:]
            elif rel_url.startswith('?'):
                rel_base = self.url_wo_get()
            if dirs and n:
                repl = ''.join(dirs[-n:])
                rel_base = self.get_base().replace( repl, '')
            return rel_base + rel_url








And here's how you can use it.  Hope it helps, feel free to use.

    
    >>> url = 'http://example.com/some/base/url?with=get'
    >>> parser = URLParser( url )
    >>> parser.get_base()
    'http://example.com/some/base/'
    >>> parser.relURL( '../relative/path?more=get' )
    'http://example.com/some/relative/path?more=get'
    >>> parser.relURL( '/another/relative/path' )
    'http://example.com/another/relative/path'
