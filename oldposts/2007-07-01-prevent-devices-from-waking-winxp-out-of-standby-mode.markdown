---
date: '2007-07-01 07:53:02'
layout: post
slug: prevent-devices-from-waking-winxp-out-of-standby-mode
status: publish
title: Prevent Devices from Waking WinXP out of Standby Mode
wordpress_id: '64'
categories:
- windows XP
---

I had the annoying problem of putting my computer on standby mode for the night, only to have it mysteriously come back on due to some device activity that I didn't know about!

Here's how I investigated the issue and found a fix:

1. I opened a command window with start > run > cmd
2. I typed in powercfg /devicequery wake_armed

This brought up a list of devices capable of waking my computer from standby.

I found the culprit almost immediately: the network card. (NVIDIA Nforce Networking Controller)

3. I typed in powercfg /devicedisablewake "NVIDIA Nforce Networking Controller)"

4. Problem solved.

Apparently, there's an alternate way of shutting off this "capability," using control panel > system > hardware > device manager > network adapters and then bringing up the properties > power management option of the network controller. There's also a way to enable devices, with the command /deviceenablewake. (Typing in /? Will bring up a help file with the interface syntax that's needed.)

Just for safety, I disablewaked all the other devices on the list except the keyboard and mouse. One would think there's a single place in the control panel to find all these wake_armed devices (and even better, if it was in the Power Options), but there isn't.


--Vu
