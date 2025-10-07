---
layout: project
type: project
image: img/carrie/logo_carre.png
title: "Carrie"
start_date: 2024-09
end_date: 2025-01
published: true
labels:
  - Python
  - Raspberry Pi
  - Computer Vision
  - Person Re-Indentification
summary: "An autonomous robot for carrying charges"
period: EPFL Master
---

<img class="img-fluid d-block mx-auto" 
     src="../img/carrie/robot.jpg" 
     style="max-width: 800px; height: auto;">


As part of the Product Design and Systems Engineering in a Team course, I contributed to the development of CarriE, an autonomous robot designed to help users carry heavy loads in public indoor spaces such as airports, shopping malls, and train stations. The system combines computer vision for person re-identification, ultrasonic sensors for obstacle detection, and a mobile interface enabling both autonomous and manual control. My main role focused on implementing the camera-based tracking system, developing the web interface between the Raspberry Pi and Arduino, and creating the mobile app used to control the robot. The prototype successfully demonstrated reliable user tracking and smooth navigation, validating the concept for large-scale deployment within a rental-based mobility service.




To enable autonomous following, the CarriE robot relies on a person re-identification (REID) system built around a Raspberry Pi 5, a Raspberry Pi AI Camera, and an external computer. The AI camera first detects humans in the frame using a lightweight MobileNet model, while the Raspberry Pi formats and transmits the detected features to the computer through a web-based uplink/downlink system built with Flask. The computer then compares these features to the reference profile established during calibration using an OSNet embedding model, identifying whether the detected individual matches the user. The decision is sent back to the Raspberry Pi, which interprets the result and communicates movement commands to the Arduino, enabling real-time following. This architecture allows for efficient computation distribution, overcoming the limited onboard power of the Raspberry Pi and achieving responsive, reliable user tracking in real time.


<p align="center">
  <img src="../img/carrie/comm.png" alt="Communication architecture between camera, Raspberry Pi and computer" style="max-width: 600px; margin-top: 1rem;">
</p>