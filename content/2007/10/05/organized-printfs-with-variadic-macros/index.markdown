---
comments: true
date: '2007-10-05'
slug: organized-printfs-with-variadic-macros
title: Organized Printf's with Variadic Macros
wordpress_id: 80
---

When I program, especially in C, I tend to have a lot of errors.  To debug those errors I use a massive amount of printfs.  Recently I discovered the joy of [Variadic Macros](http://gcc.gnu.org/onlinedocs/cpp/Variadic-Macros.html) which have since dramatically improved my life.

I like to be able to turn on and off my printf's so I don't have to go through and delete them later when speed or lack of annoyance is important.  They're also nice to keep around for commenting purposes and use in future debugging attempts.  The way I used to do this was just go through and un-comment or comment the ones I wanted or didn't want.

After the code starts getting big enough and all the manual commenting gets annoying you start to put ifdefs around certain groups of comments.

_#ifdef FILE1_DEBUG
printf("FILE1: Error message relating to FILE1\n");
#endif_

The above example will compile the printf if you define FILE1_DEBUG either in the code or compile with the flag -DFILE1_DEBUG.

The extra lines get annoying after a while, so I upgraded to defining a function for the printf's.

{% syntax c %}
#ifdef FILE1_DEBUG
#define FILE1_ERR( x ) \
printf( "FILE1: %s\n", x );
#else
#define FILE1_ERR(x)
#endif
{% endsyntax %}

Then each ifdef'd printf can simply be implemented with

{% syntax c %}
FILE1_ERR( "Error message relating to FILE1");
{% endsyntax %}

What will happen is the pre-compiler will replace FILE1_ERR with printf if FILE1_DEBUG is enabled.  If it is not enabled, it will simply remove the whole line from what gets compiled.

The only problem is/was it gets crazy complicated when you want to put more than just strings in your printf's.

{% syntax c %}
printf("FILE1: This address is not valid: %x\n", address);
{% endsyntax %}


which can't be put into FILE1_ERR as it only allows one input.  Luckily some genius invented Variadic Macros.  Variadic macros can take an arbitrary number of inputs.  Here's our new variadic version of our fancy print function;

{% syntax c %}
#ifdef FILE1_DEBUG
#define FILE1_ERR( args... ) \
printf("   FILE1:  "); printf( args ); printf("\n"); }
#else
#define FILE1_ERR( args... )
#endif
{% endsyntax %}

Awesome Right?  Now we can get fancy, organized, multivariable printfs with just one function.  And again, we can also turn on and off these printfs by defining or not defining the _DEBUG flags.  This comes in incredibly handy when there are many files and sections of the code to debug.

Also note, for visual studio hackers the syntax is a little different.  Check out [these docs](http://msdn2.microsoft.com/en-us/library/ms177415(VS.80).aspx).



