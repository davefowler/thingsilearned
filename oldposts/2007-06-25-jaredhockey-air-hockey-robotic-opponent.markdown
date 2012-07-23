---
date: '2007-06-25 05:59:34'
layout: post
slug: jaredhockey-air-hockey-robotic-opponent
status: publish
title: Jared.hockey - Air Hockey Robotic Opponent
wordpress_id: '59'
categories:
- JaredSIM
- python
- robotics
- thingsilearned
---

I just ran into my files from one of the first JaredSIM sub-projects.  It was my senior design project with the goal of making a robot that would beat the real Jared at air hockey.  Naturally I called it Jared.hockey.  A lot of people unfamiliar with the current state of robotics might be unimpressed by the technical requirements of such a feat, but the task of air hockey is a difficult one in that it requires incredibly fast reactions from both the sensor and controls in order to compete with the reaction time of the real Jared.  Three senior design teams had previously attempted the task with no success.

[](http://thingsilearned.files.wordpress.com/2007/06/jaredhockey.png)


[![Hockey Diagram](http://thingsilearned.files.wordpress.com/2007/06/jaredhockey.png)](http://thingsilearned.files.wordpress.com/2007/06/jaredhockey.png)


What gave us the advantage was we went with the [CMUcam2](http://www.cs.cmu.edu/~cmucam2/), an awesome device that does color tracking and has an onboard controller for up to 5 servos or DAQ outputs.  The controller was a life saver for the guys making the robotic arm, and for me being able to easily use the camera and control the robotics through the same programing interface.  The CMUCam2 advertises color tracking at an exciting 50 frames per-second but in reality you can only get 25fps unless you're using only a quarter of the window size, which proved too small for our needs. However, with some extremely advanced *sarcasm prediction algorithms I designed and called the Dave Transform (DT as FT was already taken) we were able to get some awesome results.  Here's a diagram of the DT prediction algorithm...

[](http://thingsilearned.files.wordpress.com/2007/06/davetransform.png)


[![Dave Transform](http://thingsilearned.files.wordpress.com/2007/06/davetransform.png)](http://thingsilearned.files.wordpress.com/2007/06/davetransform.png)


You can check out the [jared source here](http://www.box.net/shared/dbkchxg0mb).  It includes a nice python module for the serial interface with the CMUcam2 that might be useful to robotics or AI enthusiasts out there.  For more detail check out the [powerpoint](http://www.box.net/shared/0fez5m82ay) and [final paper](http://www.box.net/shared/a55cnezdrv).  Unfortunately the group that took over the project after us decided that despite our impressive results and the excellent prediction, calibration, and testing code, learning python was much more difficult than just starting over with C++!  Our code is now wasted!  Gotta love Senior Design.

So what were the results?  After 3 months of team work on the project (not a ton of work, it was only 2 credits) Jared.hockey could block almost everything chucked at it with incredible accuracy!  Unfortunately the arm offensive mechanism proved inadequate.  Though it was properly configured and timed to strike the puck at the right moment, it was not strong enough to return it with any force.  For future reference I personally think the two joint arm system (like humans) is better than one joint and a flicking device.  You need one serious solenoid to return a puck at 30 miles an hour.

Anyway, we got it to block everything but were unable to get it to return any volleys.  All in all, I currently rank it at Jared.hockey v0.4, where v1.0 would mean it was skilled as the real Jared.  Check it out for yourself!

[googlevideo=http://video.google.com/videoplay?docid=-653278147591989118&hl=en]


Dave
