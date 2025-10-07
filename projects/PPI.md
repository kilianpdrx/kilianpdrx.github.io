---
layout: project
type: project
image: img/PPI/tr102.png
title: "Programming"
date: 2024
published: true
labels:
  - C
  - Matlab
  - LabView
summary: "Oscillo to Data — Automated Signal Extraction Pipeline"
---

This project aimed to develop a complete data extraction and visualization toolchain linking three environments — C, LabVIEW, and MATLAB — to convert oscilloscope screenshots into numerical data and fitted sinusoidal models. The process begins with a C program that analyzes image pixels, identifies color-coded traces, and exports their coordinates. LabVIEW acts as the central orchestrator, managing user interaction, file exchanges, and automated calls to the other programs. Finally, MATLAB performs perspective correction, signal reconstruction, and sinusoidal fitting, generating a clean, annotated plot and PDF report summarizing all waveform parameters (amplitude, offset, frequency, phase).

<p align="center">
  <img src="../img/PPI/VIZ_PPI.png" alt="Oscillo2Data LabVIEW interface" style="max-width: 420px; margin: 1rem auto; display:block;">
</p>


The final interface allows users to load any oscilloscope image, visualize the extracted curves, and automatically produce a formatted PDF output showing the fitted signals and their numerical parameters, as illustrated below.


<p align="center">
  <img src="../img/PPI/tr102.png" alt="Fitted oscilloscope traces" style="max-width: 500px; margin: 1rem auto; display:block;">
</p>
