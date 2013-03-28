---
comments: true
date: '2009-08-10'
slug: log-observer-using-pythons-subprocess
title: Log Observer using Python's subprocess
wordpress_id: 583
post_tag:
- python
- subprocess
tags:
- python
- thingsilearned
---

Today I needed to write a wrapper around a program that would examine the stdio and respond immediately to certain results.  The task was handled nicely with a python script using [subprocess](http://pydoc.org/2.4.1/subprocess.html).

There isn't a lot of documentation examples on it so to figure it out I wrote this small test app and I thought I'd share it here.

To begin I wrote a simple script that prints out "Program has run for x seconds." every x seconds to simulate a long running and noisy script that I might be observing.  Here is the code.

sample.py

`
import sys, time

class FlushFile(object):
   """Write-only flushing wrapper for file-type objects."""
   def __init__(self, f):
       self.f = f
   def write(self, x):
       self.f.write(x)
       self.f.flush()

# Replace stdout with an automatically flushing version
sys.stdout = FlushFile(sys.__stdout__)

for i in xrange(100):
   sys.stdout.write("Program has run for %d seconds.\n" % i)
   time.sleep(1)
`

The main part of the program is the last 3 lines where we write "Program has run for %d seconds" 100 times and pause for a second between each.

The FlushFile object is simply a [nice hack](http://stackoverflow.com/questions/527197/intercepting-stdout-of-a-subprocess-while-it-is-running) to overwrite the default stdout object to ensure that the buffer is flushed every time it is written to.  Without the hack our log checker would simply be hung up until the task is fully completed instead of being able to read each line of the output as it is written.

The output looks like this


> 

>     
>     $ python sample.py
>     Program has run for 0 seconds.
>     Program has run for 1 seconds.
>     Program has run for 2 seconds.
>     .... # and on until 100 seconds
> 
> 



Next I wrote the wrapper which executes the above sample.py script as a python subprocess and watches the output.  For this example I check whether a '4' exists in the output.  If it is I restart the script therefore creating a continual loop counting between 0 and 4 seconds.

observer.py

`

import subprocess, os, signal
cmnd = "python sample.py" #change this line to run your script
p, line = True, 'start'

while True:
   p = subprocess.Popen(cmnd, shell=True, stdout=subprocess.PIPE)

   while line:
       line = p.stdout.readline()
       print "line is:", line
       if line.count('4'):
           print "restarting the process"
           os.kill(p.pid, signal.SIGUSR1)
           line = True
           break

   del p
`

The output is continually checked in the 'while line:' loop of line 8.  In this example its printed out for our convenience.  Like 11 checks for the character '4' somewhere in the output.  If it does exist it kills the process and the stdout reading loop.

That loop is wrapped in another however that simply restarts the process all over again.  The resulting output is


> 

>     
>     $ python observer.py
>     line is: Program has run for 0 seconds.
>     line is: Program has run for 1 seconds.
>     line is: Program has run for 2 seconds.
>     line is: Program has run for 3 seconds.
>     line is: Program has run for 4 seconds.
>     restarting the process
>     line is: Program has run for 0 seconds.
>     line is: Program has run for 1 seconds.
>     line is: Program has run for 2 seconds.
>     line is: Program has run for 3 seconds.
>     line is: Program has run for 4 seconds.
>     restarting the process
>     line is: Program has run for 0 seconds.
>     .....
> 
> 



So now we have a nice template for wrapping and responding to executables!
