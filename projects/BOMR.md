---
layout: project
type: project
image: img/BOMR/thymio.jpg
title: "BOMR"
date: 2024
published: true
labels:
  - Python
  - Thymio robot
  - Computer Vision
  - SLAM
  - OpenCV
summary: "Robot control and SLAM in a dynamic environment"
---


As part of the Basics of Mobile Robotics course at EPFL, our team designed and implemented an autonomous navigation system for the Thymio robot, integrating computer vision, motion control, and mapping techniques. The robot was tasked with exploring an unknown environment, identifying red-colored target points, retrieving objects, and returning to its initial position while avoiding static and dynamic obstacles.
I was primarily responsible for the computer vision pipeline, which enabled the robot to perceive and interpret its surroundings in real time. Using OpenCV, I developed a color-based detection system to locate the red targets and distinguish walls and free space from camera images. The processed visual data was used to update the robot’s internal map and feed its global navigation module. I optimized the vision algorithm for robustness under varying lighting conditions and ensured its seamless integration with the Kalman filter for position estimation.
Overall, the project combined elements of perception, decision-making, and control to achieve full autonomy. The final system successfully demonstrated accurate mapping, reliable target recognition, and smooth trajectory following in real-world conditions.

<div class="ratio ratio-4x3 my-4" style="max-width: 600px; margin: 0 auto;">
  <iframe 
    src="https://drive.google.com/file/d/1wTRObgNCnMcC-vWDzunhK5DmzSavFFN7/preview"
    title="Final project"
    allowfullscreen>
  </iframe>
</div>



