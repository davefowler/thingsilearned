---
date: '2007-06-11 15:28:56'
layout: post
slug: batch-jpg-image-resizer
status: publish
title: Batch .jpg Image Resizer
wordpress_id: '49'
categories:
- python
- thingsilearned
---

Last night I was looking all over for a batch image resizer.  I needed to make a folder full of images smaller and didn't want to open [Gimp](http://gimp.org/) for each one.  I downloaded 2 that weren't what I wanted and just as I was about to get really frustrated I realized, hey, I've taken two semesters of image processing.  I'd been wanting to play around with the [Python Image Library (PIL)](http://www.pythonware.com/products/pil/) for a while and took this as my example problem.  It turned out to be real easy given their [thumbnail example](http://www.pythonware.com/library/pil/handbook/image.htm).

I modified it to instead input a max width and max height that you wanted the batch of images to be converted to.  It then goes through and shrinks them to within the dimensions.   Here's a copy of their [thumnails example](http://www.box.net/shared/p0hipv3l72) and my [resize source](http://www.box.net/shared/m8qcxs7mj1):

    
    
    #! /usr/bin/env python
    
    #A Batch Image Resizer
    #By Dave Fowler 2007: davefowler@gmail.com
    
    """Image Resizer"""
    
    from PIL import Image
    import glob, os, sys
    
    resize_folder = 'resized'
    
    maxW = float(sys.argv[1])
    maxH = float(sys.argv[2])
    
    for infile in glob.glob("*.jpg"):
        file, ext = os.path.splitext(infile)
        if not os.path.exists( os.path.abspath(resize_folder) ):
    	os.makedirs( os.path.abspath(resize_folder) )
        im = Image.open(infile)
        size = im.size
        if maxW/size[0] < maxH/size[1]:
    	newsize = (int(maxW), int(maxW/size[0]*size[1]))
        else:
    	newsize = (int(maxH/size[1]*size[0]), int(maxH))
        im = im.resize(newsize, Image.ANTIALIAS)
        im.save(resize_folder + '/' + infile, "JPEG")


To run it you'll need [python](http://python.org) and [PIL](http://www.pythonware.com/products/pil/).  Sorry, I haven't made an executable version yet.  Place the python file into the directory you want to resize or somewhere in your PATH and in the image folder use

`$ python resize.py <max Width> <max Height>`

A new directory will be made inside the folder called resized and will contain the resized versions of your image.  It currently only works for images ending in '.jpg'. Let me know if you make it fancier.


Dave
