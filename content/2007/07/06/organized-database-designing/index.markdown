---
comments: true
date: '2007-07-06'
slug: organized-database-designing
title: Organized Database Designing
wordpress_id: 67
tags:
- databases
- JaredSIM
- thingsilearned
---

This isn't an article on good practices in database design.  We definitely wouldn't be the guys to ask about that.  However, after many days of deliberation, and by deliberation I mean yelling, calling each other various names, and wasting several tablets of paper we have finally completed and have some suggestions on how to keep organized in the designing process.  The suggestions are organized in the following steps.  Hopefully when you're done you'll have a database to be proud of like these nerdy guys here:


[![nerds doing database design](http://thingsilearned.files.wordpress.com/2007/07/nerds.jpg)](http://thingsilearned.files.wordpress.com/2007/07/nerds.jpg)




**1. Realization: ** First you need to realize that the database design is a lengthy task that grows exponentially with the complexity of your web app.  Make sure you allot yourself a large chunk of time and patience for the task.




**2. Site Planning:**  Before making your tables you have to have your entire site organized.  Its best to draw out all of the viewable page types the viewer will see and get a concrete set of high level functions that the user will be able to do.  Its best to minimize these down to base functionality.  Forget about the million bells and whistles that you might attach on in a year or two, and concentrate on making just the bike .... err webapp.  After simplifying the main functionality you'll find the database design much simpler to keep in your head and its usually easy to attach on the extra stuff later.




**3. Research:** If you're not too good at database design, know very little about how SQL servers work or don't know what manytomany relationships are you'd do yourself a favor by reading up on it.  Here are a [few resources](http://www.google.com/search?q=database+design&ie=utf-8&oe=utf-8&aq=t&rls=org.mozilla:en-US:official&client=firefox-a).




**4. Divide and Conquer:**  Having a good grasp of what you're making and a feel for SQL servers its time to get to it!  We want to emphasize, that no matter how big or small your group is, no matter how smart or dumb they are, even if you have a pacifist on your team, its best to split up when designing the database.  Each of you go to your own corners and design what you think will work.  Then, after a day or however long it takes you, get back together and share what you've got.  You'll find that each of you are missing a few things and many different ways of looking at the same thing.  Its best to merge these ideas at the end when everyone has a good grasp of what they've designed.  Its bad to merge them as you build, sparking debates that go on way too long and make everything feel larger and more complicated than it really is.




**5. Cards:**  When designing your tables we found it worked best to write them on note cards and rearrange them on the table.  Its really easy to edit or throw out cards.  Its also easy to visualize the different components and rearrange them in-front of you to fit better in your brain.  When you're done, tape them to a piece of tag board and draw lines to visually demonstrate the relationships between the different tables.  It will also look much prettier when you go back and meet with the rest of your group.




**6. Celebrate:** You've accomplished a large amount of work!  It might not seem so.  You were expecting to be well into your hacking by now, but hey, it takes a really long time and now you have a great platform to build from.  Make sure you listen to a happenin' tune and do a little jig.  This part is best done with the group.




Dave and Priyesh
