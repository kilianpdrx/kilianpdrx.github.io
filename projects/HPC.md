---
layout: project
type: project
image: img/HPC/tsu.png
title: "HPC"
start_date: 2025-04
end_date: 2025-06
published: true
labels:
  - C++
  - MPI
  - CUDA
  - SLURM
  - BASH
  - GPU
  - Matlab
summary: "Parallel and High Performance Computing Project"
period: EPFL Master
---

<p>
For the Parallel and High Performance Computing course, I parallelized a C++ tsunami simulation based on the shallow-water equations with both MPI and CUDA. The MPI version uses domain decomposition with ghost-row exchanges and reproduces the scaling behavior predicted by Amdahl's and Gustafson's laws. The CUDA version explores block- and grid-size tuning to balance workload distribution and hardware utilization. Both implementations deliver significant speedups, validating the efficiency of CPU- and GPU-based approaches.
</p>

<figure>
  <img src="../img/HPC/strong.png" alt="Strong scaling results comparing experimental and theoretical speedup.">
  <figcaption>Strong scaling: experimental vs. theoretical speedup.</figcaption>
</figure>

<figure>
  <div class="video-wrapper">
    <iframe src="https://drive.google.com/file/d/17eRBybbB49KU8dngPshqUOB_8kObn6yC/preview" title="Final project" allowfullscreen></iframe>
  </div>
  <figcaption>Visualization of the water movement throughout the simulation.</figcaption>
</figure>
