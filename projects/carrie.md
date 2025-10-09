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
  - Arduino
  - Computer Vision
  - Embedded systems
  - Machine Learning
  - Robotics
summary: "Development of an autonomous load-carrying robot with real-time person tracking and embedded control."
period: EPFL Master
---



<div class="container py-3">

<p>
As part of the Product Design and Systems Engineering in a Team course at EPFL, I contributed to the development of CarriE, an autonomous robot designed to help users carry heavy loads in public indoor spaces such as airports, shopping malls, and train stations. 
The system combines computer vision for person re-identification, ultrasonic sensors for obstacle detection, and a mobile interface enabling both autonomous and manual control. 
My main role focused on implementing the camera-based tracking system, developing the web interface between the Raspberry Pi, Arduino and computer, and creating the mobile app used to control the robot. 
The prototype successfully demonstrated reliable user tracking and smooth navigation, validating the concept for large-scale deployment within a rental-based mobility service.
</p>

<p align="center">
  <img src="../img/carrie/robot.jpg" alt="Final CarriE prototype" style="max-width: 800px; margin: 1rem auto; display:block;">
</p>

<p>
The robot was built as a compact mobile platform capable of transporting up to 50 kilograms while maintaining stability in dynamic environments. 
It uses two stepper-driven wheels for differential motion and two passive caster wheels for balance. 
The onboard system integrates a Raspberry Pi 5, an Arduino Uno, and several sensors that handle perception, communication, and control tasks.
</p>

<p align="center">
  <img src="../img/carrie/WIRING.png" alt="Wiring diagram of the CarriE robot system" style="max-width: 800px; margin: 1rem auto; display:block;">
</p>

<p>
The electrical and mechanical integration was realized by connecting the Raspberry Pi, responsible for image processing and data handling, with the Arduino that manages motor control and sensor feedback. 
The early prototype shown below was used to pitch the project, test the code, and validate the overall design.
</p>

<p align="center">
  <img src="../img/carrie/first.png" alt="Early prototype used for control testing" style="max-width: 700px; margin: 1rem auto; display:block;">
</p>

<p>
The CarriE robot’s autonomous following ability relies on a person re-identification system that connects a Raspberry Pi 5, a Raspberry Pi AI Camera, and an external computer. 
The camera detects humans using a MobileNet model, and the Raspberry Pi sends extracted features to a computer through a web-based communication link built with Flask. 
The computer compares these features to a reference profile using an OSNet embedding model and returns the identification result. 
The Raspberry Pi interprets this information and sends commands to the Arduino to control the robot’s movement, enabling real-time following with distributed computation.
</p>

<p align="center">
  <img src="../img/carrie/comm.png" alt="Communication architecture between camera, Raspberry Pi, and computer" style="max-width: 650px; margin: 1rem auto; display:block;">
</p>

<p>
This distributed architecture allows efficient data flow and responsive control while compensating for the limited computational capacity of the Raspberry Pi. 
By combining computer vision, embedded programming, and hardware integration, the system demonstrated robust person tracking and smooth mobility in indoor environments.
</p>



</div>