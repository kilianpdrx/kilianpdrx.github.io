---
layout: project
type: project
image: img/PPI/cover.png
title: "Programming"
start_date: 2022-03
end_date: 2022-06
published: true
labels:
  - C
  - Matlab
  - LabView
summary: "Oscillo to Data — Automated Signal Extraction Pipeline"
period: EPFL Bachelor
---



<div class="container py-3">

<p>
This project aimed to develop a complete data extraction and visualization toolchain linking three environments — C, LabVIEW, and MATLAB — to convert oscilloscope screenshots into numerical data and fitted sinusoidal models. The process begins with a C program that analyzes image pixels, identifies color-coded traces, and exports their coordinates. LabVIEW acts as the central orchestrator, managing user interaction, file exchanges, and automated calls to the other programs. Finally, MATLAB performs perspective correction, signal reconstruction, and sinusoidal fitting, generating a clean, annotated plot and PDF report summarizing all waveform parameters (amplitude, offset, frequency, phase).
</p>


<p align="center">
  <img src="../img/PPI/VIZ_PPI.png" alt="Oscillo2Data LabVIEW interface" style="max-width: 600px; margin: 1rem auto; display:block;">
  <span style="font-size: 0.9rem; color: gray;">Oscillo2Data LabVIEW interface.</span>
</p>


<p>
The final interface allows users to load any oscilloscope image, visualize the extracted curves, and automatically produce a formatted PDF output showing the fitted signals and their numerical parameters, as illustrated below.
</p>



<p align="center">
  <img src="../img/PPI/tr102.png" alt="Fitted oscilloscope traces" style="max-width: 550px; margin: 1rem auto; display:block;">
  <span style="font-size: 0.9rem; color: gray;">Fitted oscilloscope traces.</span>

</p>

</div>
