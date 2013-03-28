---
comments: true
date: '2007-04-26'
slug: screw-you-a-python-example
title: Screw you! - A Python Example
wordpress_id: 7
tags:
- python
- thingsilearned
---

So last night I was doing some dreaded debugging in C and it wasn't going well.  Its always tough to switch back and forth between such an intuitive language like Python to such a picky one like C.  Python just makes a developer's life sooo much easier.  I pride myself on a feat I performed this summer at IBM.  I had written, in Python, a fairly large program that does stuff I can't talk about.  The short version is I had to make major modifications to the program.  I sat down and hacked away for 5 hours.  At the end of the 5 hours I ran it to start debugging but I didn't have to, it worked on the first try!  That's exactly why I use Python.  It just make sense, so so does your code.

Anyway, I was debugging C, getting angry, and started cursing at the terminal.

`Illegal Instruction
$ What the hell does that mean!?!?!
$ Illegal f*#@ Instruction?
$ That helps me none you f&$*
$ screw you!!!!!!!`

Well that's the clean version anyway.  I get angry when its late and stuff doesn't work nor help me.  So then I decided that my computer should be able to defend itself from such insults.  I took the idea as an oportunity to procrastinate and feel better about my programing abilities by writing a Python script called screw.

    
    
    #!/usr/bin/env python
    
    import sys
    import random
    import os
    
    nouns = ['monkey', 'fruit', 'nazi', 'butt', 'crap', 'banana', 'mouth',
    'house', 'clown', 'cat', 'dog', 'donkey', 'face', 'ass'];
    
    adjectives = ['bitch', 'crazy', 'dick', 'hairy', 'ugly', 'flaming',
    'smelly', 'feminine', 'lazy', 'crappy'];
    
    verbs = ['flying', 'screaming', 'jumping', 'dying', 'self pleasing',
    'lying', 'dumping', 'humping'];
    
    vowels = 'aeiou'
    
    if __name__ == "__main__":
    
    	mode = 'say'
    	isorare = " is"
    	n = " a"
    
    	person = sys.argv[1];
    	if (person == "me"):
    		person = "You"
    		isorare = " are"
    	elif (person.count("you")):
    		person = "No, screw you, you"
    		isorare = ""
    		n = ""
    
    	if len(sys.argv) > 2:
    		cmd = sys.argv[2]
    		if cmd.count('nosay'):
    			mode = 'print only'
    
    	noun = nouns[random.randint(0,len(nouns)-1)]
    	adjective = adverbs[random.randint(0, len(adverbs)-1)]
    	verb = verbs[random.randint(0, len(verbs)-1)]
    
    	if vowels.count(verb[0]) and n == "a":
    		n = " an"
    
    	saying = person + isorare + n + " " + verb + " " + adjective + " " + noun + "."
    
    	print saying
    	if mode == 'say' and sys.platform == 'darwin':
    		os.system("say " + saying + "n")


Copy the above code or download the [source here.](http://development.annabelledey.com/blog/screw) To run it yourself save code to a file named screw (no extension) in one of your path directories.  I'm on a mac and saved it to /opt/local/bin.  Macs already have python installed so you don't have to worry about that.  Another advantage for macs is that I included the 'say' command so it will also verbally defend itself.  If you're running windows and don't have python installed you can [download python for windows here.](http://code.enthought.com/enthon/#download)

The code is pretty simple.  I made a list of nouns, adjectives and verbs.  Then I mix these together in the following insult format:

[name] is a(n) [random verb] [random adjective] [random noun].

Where [name] is the first input after the screw command and the rest of the variables are just randomly choses from the list I created.  So if you put something like

    
    $ screw Jared


you get things like

    
    
    Jared is a self pleasing hairy donkey.
    Jared is a dumping feminine monkey.
    Jared is a jumping crappy banana.


None of it makes sense but its still funny, especially when you're on a mac and its actually saying that stuff!  Hillarious...

I also needed it to defend itself, the origional purpose right?  So it checks for the words 'you' or 'me' in the inputs.  If it finds 'me', like you say 'screw me' it will change some parameters to insult you.  If you say 'screw you!!!' or anything with the word 'you' in it it'll flip it and start insulting you back.  Examples

    
    
    $ screw you you butt!
    No, screw you, you  humping crazy fruit.


So thought I'd share that and hope a few of you try it out and have some fun and even learn a little python.  Its really easy to change the insults, just add or change words in the nouns, verbs, and adverbs lists!  Leave comments with questions or links to revised versions.  Have a good night and remember 'You are a lying crazy clown.'


Dave
