---
date: '2007-05-29 04:14:39'
layout: post
slug: cimglib-a-simple-image-class-for-png-files
status: publish
title: CImgLib - A Simple Image Class for PNG Files.
wordpress_id: '28'
categories:
- os x
- thingsilearned
---

I wrote a bit about it before but while working on the Seperation of Reflections project I needed a simple C++ image library.  I experimented with several over a few hours, most had just way too much stuff for me to quickly dive into so I ended up writing my own small image API.  All I wanted was a simple class that had some sort of 2D array of pixel values to work with.  Was that too much to ask?  The other libraries no doubt have some functionality like this but none that I ran into were intuitive enough for me to install and pick up in 30 minutes or even a few hours.  My images were in png format so I decided I'd build something off of libpng.  I found some example code writen by [Guillaume Cottenceau](http://thingsilearned.wordpress.com/mandrakesoft.com).  His code was simple enough, just read and wrote a png file using libpng, yet contained the necessary error handling functions. I put the functions into a class called Image that would hold the data.  I also added a few simple extras like a convolution function and then off of that a sobel function.  [Download the code here.](http://www.box.net/shared/53strvcg92)  Keep in mind that the makefile is for Mac osx 10.3.9.  You'll probably have to locate your png.h and libpng and adjust the INCLUDE and LIBPATH variables respectively for your system.  Then here's how to run the example once in the downloaded directory.

`$ make
$ ./Sample danandmegan.png
$ open sobel.png`

[](http://thingsilearned.files.wordpress.com/2007/05/sobel1.png)


[![Danandmegan Sobel](http://thingsilearned.files.wordpress.com/2007/05/sobel1.png)](http://thingsilearned.files.wordpress.com/2007/05/sobel1.png)


The example simply runs a sobel edge detector algorithm on the input image danandmegan.png.  Lets look at what the example is doing.  Here's the source, of the example Main.cpp.

    
    #include "Image.h"
    #include "time.h"
    
    //testing main
    int main(int argc, char **argv) {
    
    Image img;
    img.read_init(argv[1]);
    img.pixels = (png_bytep*) malloc(sizeof(png_bytep) * img.height);
    for (y=0; y< img.height; y++);
    img.pixels[y] = (png_byte*) malloc(img.info_ptr->rowbytes);
    img.read();
    
    Image sobel;
    sobel.read_init(argv[1]);
    sobel.pixels = (png_bytep*) malloc(sizeof(png_bytep) * sobel.height);
    for (y=0; y < sobel.height; y++)
    sobel.pixels[y] = (png_byte*) malloc(sobel.info_ptr->rowbytes);
    sobel.read();
    
    //take the sobel of img (must start with a copy in sobel)
    img.sobel(&sobel);
    
    //for testing purposes write out a sobel!  Its fun!
    sobel.write("sobel.png");
    
    return 0;
    
    }


The _Image::read_init( [filename] )_ command initializes the read of the image at the path _[filename]_.  It is used to initialize _Image::height, Image::width_, and _Image::info_ptr_.  You then need to allocate space for the image as the class just contains a pointer to arrays called pixels.  The allocation is done in the three lines following the read_init.  Then to get the image into the allocated array use the _Image::read()_ function.

Next another Image instance called sobel is made, and allocated to be the same size as the other image.  This will be where the output of the sobel edge detector is stored.

The sobel algorithm is then run with the _Image::sobel([pointer to output image])_.  And finally the image is writen to sobel.png with _Image::write( [output filename] )_.

Simple right?!  I think so.  To check out how pixel values are accessed view the conv and sobel functions in Image.cpp.  Its just simple 2D array access ( img.pixels[y][x]).  Keep in mind that they're stored as png_byte's, which are simply 8 bit integers.  Leave a comment with any questions or corrections.


Dave
