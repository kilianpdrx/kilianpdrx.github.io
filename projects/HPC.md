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

<div class="container py-3">
<p>
As part of the Parallel and High Performance Computing course, I implemented and analyzed parallel versions of a tsunami simulation based on the shallow water equations. Starting from a sequential C++ solver, I developed both MPI and CUDA implementations to accelerate the numerical computations. 
</p>

<p>
The MPI version parallelized the time-step and solver routines, efficiently handling domain decomposition and ghost-row exchanges, achieving strong and weak scaling behaviors consistent with Amdahl’s and Gustafson’s laws. 
</p>

<p align="center">
  <img src="../img/HPC/weak.png" alt="Weak scaling results showing near-linear behavior with increasing tasks." style="max-width: 750px; margin: 1rem auto; display:block;">
</p>

<p align="center">
  <img src="../img/HPC/strong.png" alt="Strong scaling results comparing experimental and theoretical speedup." style="max-width: 650px; margin: 1rem auto; display:block;">
</p>

<p>
The CUDA version introduced several optimized kernels for the solver, exploring the trade-off between workload distribution and hardware utilization through block- and grid-size tuning. 
</p>

<p align="center">
  <img src="../img/HPC/perblock.png" alt="CUDA performance analysis showing time per iteration for different block and grid configurations." style="max-width: 680px; margin: 1rem auto; display:block;">
</p>

<p>
Overall, the parallelization led to significant speedups and scalability improvements, validating the efficiency of both CPU and GPU approaches.
</p>

<div class="ratio ratio-4x3 my-4" style="max-width: 700px; margin: 0 auto;">
  <iframe 
    src="https://drive.google.com/file/d/17eRBybbB49KU8dngPshqUOB_8kObn6yC/preview"
    title="Final project"
    allowfullscreen>
  </iframe>
</div>
</div>