---
title: "OVBench: How Far is Your Video-LLMs from Real-World Online Video Understanding?"
collection: publications
category: arxiv
permalink: /publication/2024-02-17-paper-title-number-4
excerpt: 'A benchmark built for online visual understanding, with tasks under three different online understanding taxonomy: Bachward Tracing, Real-Time Visual Perception, and Forward Active Responding.'
date: 2024-02-17
venue: 'Arixv Preprint'
paperurl: 'http://joeleelyf.github.io/files/ovbench.pdf'
citation: 'Your Name, You. (2024). &quot;Paper Title Number 3.&quot; <i>GitHub Journal of Bugs</i>. 1(3).'
---

Integrating past information and adapting to continuous video input are pivotal for human-level video understanding. 
Current benchmarks, however, focus on coarse-grained, video-level question-answering in offline settings, limiting real-time processing and adaptability for practical applications.To this end, we introduce **OVBench** (**O**nline-**V**ideo-**Bench**mark), which assesses online video understanding through three modes: (1) **Backward Tracing**, (2) **Real-Time Visual Perception**, and (3) **Forward Active Responding**. OVBench consists of 12 tasks, comprising about 2,800 meta-annotations with fine-grained, event-level timestamps paired with 858 videos across 10 domains,encompassing egocentric activities, virtual gaming worlds, and cinematic scenes. To minimize bias, we employ automated generation pipelines and human annotation for meticulous curation.We design an effective problem generation and evaluation pipeline based on these high-quality samples and densely query Video-LLMs across the video streaming timeline. Extensive evaluations of nine Video-LLMs reveal that despite rapid advancements and improving performance on traditional benchmarks, existing models struggle with online video understanding.  Our comprehensive evaluation reveals that the best-performing models still have a significant gap compared to human agents in online video understanding.We anticipate that OVBench will guide the development of Video-LLMs towards practical real-world applications and inspire future research in online video understanding. Our benchmark and code can be accessed at [https://github.com/JoeLeelyf/OVBench](https://github.com/JoeLeelyf/OVBench).
