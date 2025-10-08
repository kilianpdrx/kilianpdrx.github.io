---
layout: project
type: project
image: img/Milieux_reactifs/thymio.jpg
title: "Reactive Media"
start_date: 2023-11
end_date: 2024-02
published: true
labels:
  - Matlab
  - Thermodynamics
  - Simulations
summary: "BLABLA"
period: CentraleSupélec
---



<div class="container py-3">

<p>
This project was carried out as part of the Reactive Media course at EPFL and focused on modeling plasma-assisted ignition in a hydrogen-air gas turbine. 
The objective was to study the influence of plasma discharges on ignition delay, gas temperature, and combustion stability. 
The work combined thermochemical modeling and simulation in a Perfectly Stirred Reactor (PSR) configuration using Cantera.
</p>

<p>
In the first part, the combustion chamber was modeled without plasma assistance to determine the ignition temperature and the optimal equivalence ratio. 
The ignition temperature, or Tspark, was found iteratively, and the operating conditions were optimized to limit the maximum flame temperature to 1850 K in order to minimize NOx formation.
</p>

<p align="center">
  <img src="../img/Milieux_reactifs/check_phi.png" alt="Temperature at steady state as a function of equivalence ratio" style="max-width: 750px; margin: 1rem auto; display:block;">
</p>

<p>
Once the base combustion model was validated, the study was extended to include nanosecond repetitively pulsed (NRP) discharges. 
This plasma model was implemented by superimposing periodic energy pulses to preheat the gas and accelerate reaction kinetics. 
Different numbers of pulses and gas velocities were tested to determine the conditions required to achieve ignition.
</p>

<p align="center">
  <img src="../img/Milieux_reactifs/Tpulse3.png" alt="Temperature evolution under multiple plasma pulses showing ignition" style="max-width: 750px; margin: 1rem auto; display:block;">
</p>

<p>
The results showed that three nanosecond pulses were sufficient to trigger successful ignition at stoichiometric conditions, while lower pulse counts led to incomplete combustion. 
Subsequent analyses focused on the evolution of gas temperature over time for various inlet velocities.
</p>

<p align="center">
  <img src="../img/Milieux_reactifs/5000s vitesse_raccourci.jpeg" alt="Temperature evolution for different gas velocities" style="max-width: 850px; margin: 1rem auto; display:block;">
</p>

<p>
For each configuration, the species mass fractions and temperature profiles were analyzed to characterize reaction dynamics and stability. 
The plasma-assisted case achieved full ignition at gas velocities up to 4.3 m/s, while the non-assisted case was limited to 0.065 m/s, confirming a sixtyfold improvement in the combustion speed.
</p>

<p align="center">
  <img src="../img/Milieux_reactifs/fin4.png" alt="Evolution of mass fractions and temperature in the plasma-assisted case" style="max-width: 900px; margin: 1rem auto; display:block;">
</p>

<p>
This study demonstrated the potential of plasma-assisted combustion for lean hydrogen-air mixtures, enabling faster ignition and higher operational stability while maintaining lower flame temperatures. 
The results highlight the advantages of coupling advanced plasma physics with combustion modeling for next-generation gas turbine designs.
</p>

</div>

