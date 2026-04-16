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

<p>
CarriE is an autonomous robot developed in the Product Design and Systems Engineering in a Team course at EPFL, meant to help users carry heavy loads in airports, malls, and train stations. The platform transports up to 50 kg on two stepper-driven wheels and combines a Raspberry Pi 5, an Arduino Uno, a Raspberry Pi AI Camera, and ultrasonic sensors for perception, control, and obstacle avoidance. My contribution focused on the person re-identification pipeline (MobileNet detection with OSNet embeddings exchanged over Flask between the Pi and an external computer), the Pi–Arduino communication layer, and the mobile app used to switch between autonomous and manual modes.
</p>

<figure>
  <img src="../img/carrie/robot.jpg" alt="Final CarriE prototype.">
  <figcaption>Final CarriE prototype.</figcaption>
</figure>

<figure>
  <img src="../img/carrie/comm.png" alt="Communication architecture between camera, Raspberry Pi, and computer.">
  <figcaption>Distributed architecture between camera, Raspberry Pi, and external computer.</figcaption>
</figure>
