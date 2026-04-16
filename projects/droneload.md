---
layout: project
type: project
image: img/droneload/logo_droneload.png
title: "Droneload"
start_date: 2023-02
end_date: 2025-06
published: true
labels:
  - Embedded systems
  - Robotics
  - Computer vision
  - Python
summary: "Development of an autonomous quadcopter for object detection, navigation, and delivery tasks."
period: CentraleSupélec
---

<p>
DroneLoad is an autonomous quadcopter developed at CentraleSupélec for the national Planète Science / Safran competition, which simulates Paris 2024 delivery missions through tunnels and windows. I contributed to the mechanical integration — a custom 3D-printed frame carrying a Jetson Nano, a PixHawk 6X, a RealSense depth camera, and lidar/ultrasonic sensors — and to the perception and simulation software. The onboard computer runs color segmentation and a convolutional network trained on competition objects, while Python and MAVSDK handle communication with the flight controller and the Gazebo simulator. A polynomial path-planning algorithm generates smooth 3D trajectories through windows. Hardware failures limited full in-flight validation, but reliable object detection and preliminary autonomous behaviors were demonstrated in the lab.
</p>

<figure>
  <img src="../img/droneload/droneload.jpg" alt="DroneLoad quadcopter and control setup.">
  <figcaption>DroneLoad quadcopter and control setup.</figcaption>
</figure>

<figure>
  <img src="../img/droneload/good_path.png" alt="Simulated trajectory for window traversal in 3D space.">
  <figcaption>Simulated trajectory for window traversal in 3D space.</figcaption>
</figure>
