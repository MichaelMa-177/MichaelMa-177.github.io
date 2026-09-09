---
layout: about
title: about
permalink: /
subtitle:
profile: false
selected_papers: false
social: false

announcements:
  enabled: false

latest_posts:
  enabled: false
---

<style>
  :root {
    --global-theme-color: #0673c5;
    --global-hover-color: #045a99;
    --home-muted: #586069;
    --home-rule: #e5e7eb;
  }

  body > header,
  .post-header {
    display: none;
  }

  .home-page {
    font-family: Arial, Helvetica, sans-serif;
    font-size: 16px;
    line-height: 1.58;
    padding: 1.1rem 0 2.5rem;
  }

  .home-page a {
    color: var(--global-theme-color);
  }

  .home-page a:hover {
    color: var(--global-hover-color);
  }

  .home-hero {
    display: grid;
    grid-template-columns: 220px minmax(0, 1fr);
    gap: 2rem;
    align-items: start;
  }

  .home-portrait {
    width: 220px;
    height: 220px;
    object-fit: cover;
    object-position: center 23%;
    border-radius: 20px;
  }

  .home-identity h1 {
    margin: -0.15rem 0 0.2rem;
    font-family: Arial, Helvetica, sans-serif;
    font-size: 2.25rem;
    font-weight: 500;
    line-height: 1.2;
  }

  .home-focus {
    margin: 0 0 0.15rem;
    color: var(--home-muted);
    font-size: 1.02rem;
  }

  .home-links {
    margin: 0.15rem 0 0.85rem;
  }

  .home-links a + a::before,
  .project-links a + a::before {
    content: " · ";
    color: var(--home-muted);
  }

  .home-identity p:not(.home-focus):not(.home-links) {
    margin: 0 0 0.65rem;
  }

  .home-section {
    margin-top: 2.25rem;
  }

  .home-section h2 {
    margin: 0 0 0.75rem;
    font-family: Arial, Helvetica, sans-serif;
    font-size: 1.75rem;
    font-weight: 500;
    line-height: 1.25;
  }

  .news-list {
    margin: 0;
    padding-left: 1.1rem;
  }

  .news-list li {
    margin-bottom: 0.3rem;
    padding-left: 0.15rem;
  }

  .news-date {
    display: inline-block;
    min-width: 5.7rem;
    font-weight: 600;
  }

  .education-list {
    display: grid;
    gap: 1rem;
  }

  .education-item {
    display: grid;
    grid-template-columns: 72px minmax(0, 1fr);
    gap: 1rem;
    align-items: center;
    padding: 0.9rem 0;
  }

  .education-item + .education-item {
    border-top: 1px solid var(--home-rule);
  }

  .education-logo {
    width: 64px;
    height: 64px;
    object-fit: contain;
  }

  .education-heading {
    display: flex;
    gap: 1rem;
    align-items: baseline;
    justify-content: space-between;
  }

  .education-heading h3 {
    margin: 0;
    font-family: Arial, Helvetica, sans-serif;
    font-size: 1.12rem;
    font-weight: 700;
    line-height: 1.35;
  }

  .education-date {
    flex: 0 0 auto;
    color: var(--home-muted);
    font-size: 0.94rem;
    white-space: nowrap;
  }

  .education-detail {
    margin: 0.2rem 0 0;
    color: var(--home-muted);
  }

  .competition-entry {
    display: grid;
    grid-template-columns: minmax(300px, 360px) minmax(0, 1fr);
    gap: 1.75rem;
    align-items: center;
    padding: 1rem 0;
  }

  .competition-certificate {
    width: 100%;
    height: auto;
    aspect-ratio: 297 / 210;
    object-fit: contain;
    background: #f7f9fb;
    border: 1px solid var(--home-rule);
    border-radius: 10px;
  }

  .competition-certificate-link {
    display: block;
  }

  .competition-copy h3 {
    margin: 0 0 0.2rem;
    font-family: Arial, Helvetica, sans-serif;
    font-size: 1.12rem;
    font-weight: 700;
    line-height: 1.35;
  }

  .competition-kicker {
    margin: 0 0 0.35rem;
    color: var(--home-muted);
    font-size: 0.94rem;
  }

  .competition-copy p {
    margin: 0 0 0.4rem;
  }

  .research-project {
    display: grid;
    grid-template-columns: 255px minmax(0, 1fr);
    gap: 1.75rem;
    align-items: center;
    padding: 1rem 0;
  }

  .research-project + .research-project {
    border-top: 1px solid var(--home-rule);
  }

  .project-image {
    width: 100%;
    height: auto;
    aspect-ratio: 16 / 9;
    object-fit: cover;
    border-radius: 10px;
  }

  .project-video {
    display: block;
    width: 100%;
    height: auto;
    background: #000;
    border-radius: 10px;
  }

  .project-copy h3 {
    margin: 0 0 0.2rem;
    font-family: Arial, Helvetica, sans-serif;
    font-size: 1.12rem;
    font-weight: 700;
    line-height: 1.35;
  }

  .project-kicker {
    margin: 0 0 0.35rem;
    color: var(--home-muted);
    font-size: 0.94rem;
  }

  .project-copy p {
    margin: 0 0 0.4rem;
  }

  .project-links {
    margin-top: 0.2rem;
  }

  @media (max-width: 700px) {
    .home-page {
      padding-top: 0.25rem;
    }

    .home-hero,
    .competition-entry,
    .research-project {
      grid-template-columns: 1fr;
    }

    .home-hero {
      gap: 1.15rem;
    }

    .home-portrait {
      width: min(68vw, 240px);
      height: min(68vw, 240px);
      justify-self: center;
    }

    .home-identity h1 {
      font-size: 2rem;
    }

    .home-section {
      margin-top: 1.9rem;
    }

    .research-project {
      gap: 0.8rem;
      align-items: start;
    }

    .competition-entry {
      gap: 0.8rem;
      align-items: start;
    }

    .competition-certificate {
      max-width: 420px;
    }

    .project-image {
      max-width: 420px;
    }

    .project-video {
      max-width: 420px;
    }

    .news-date {
      display: block;
    }

    .education-item {
      grid-template-columns: 58px minmax(0, 1fr);
      gap: 0.8rem;
      align-items: start;
    }

    .education-logo {
      width: 52px;
      height: 52px;
    }

    .education-heading {
      display: block;
    }

    .education-date {
      display: block;
      margin-top: 0.1rem;
    }
  }
</style>

<div class="home-page">
  <section class="home-hero" aria-labelledby="home-name">
    <img class="home-portrait" src="{{ '/assets/img/prof_pic.jpg' | relative_url }}" alt="Portrait of Mingwei Ma" width="220" height="220">
    <div class="home-identity">
      <h1 id="home-name">Mingwei Ma</h1>
      <p class="home-focus">Embodied AI · 3D Vision · Robot Perception</p>
      <p class="home-links">
        <a href="mailto:mmm593860159@gmail.com">Email</a>
        <a href="https://github.com/MichaelMa-177">GitHub</a>
      </p>
      <p>
        I build robot perception systems that connect foundation models with reliable, real-time physical interaction. My current work focuses on 6D object pose tracking, interactive RGB-D reconstruction, and deployment-aware embodied intelligence.
      </p>
      <p>
        I am especially interested in turning strong perception models into reproducible systems that remain fast and robust outside controlled demonstrations. Recent projects include <a href="https://github.com/MichaelMa-177/Click-to-Model">Click-to-Model</a> and <a href="https://github.com/MichaelMa-177/SPARK-6D">SPARK-6D</a>.
      </p>
    </div>
  </section>

  <section class="home-section" aria-labelledby="education-heading">
    <h2 id="education-heading">Education</h2>
    <div class="education-list">
      <article class="education-item">
        <img class="education-logo" src="{{ '/assets/img/scut-logo.png' | relative_url }}" alt="South China University of Technology logo" width="64" height="64">
        <div>
          <div class="education-heading">
            <h3>South China University of Technology</h3>
            <span class="education-date">Sep 2025 – Present</span>
          </div>
          <p class="education-detail">Master’s Student · School of Automation Science and Engineering</p>
        </div>
      </article>

      <article class="education-item">
        <img class="education-logo" src="{{ '/assets/img/zzu-logo.png' | relative_url }}" alt="Zhengzhou University logo" width="64" height="64">
        <div>
          <div class="education-heading">
            <h3>Zhengzhou University</h3>
            <span class="education-date">Sep 2021 – Jun 2025</span>
          </div>
          <p class="education-detail">Undergraduate · School of Electrical and Information Engineering</p>
        </div>
      </article>
    </div>
  </section>

  <section class="home-section" aria-labelledby="news-heading">
    <h2 id="news-heading">News</h2>
    <ul class="news-list">
      <li><span class="news-date">Sep 2026</span> Packaged <a href="https://github.com/MichaelMa-177/Click-to-Model">Click-to-Model</a> as a reproducible end-to-end RGB-D reconstruction and 6D tracking pipeline.</li>
      <li><span class="news-date">Sep 2026</span> Added portable RealSense tracking and reproducible evaluation workflows to <a href="https://github.com/MichaelMa-177/SPARK-6D">SPARK-6D</a>.</li>
    </ul>
  </section>

  <section class="home-section" aria-labelledby="competition-heading">
    <h2 id="competition-heading">Competition</h2>
    <article class="competition-entry">
      <a class="competition-certificate-link" href="{{ '/assets/pdf/icra-2026-rgmc-cloud-robotics-runner-up-certificate.pdf' | relative_url }}" target="_blank" rel="noopener">
        <img class="competition-certificate" src="{{ '/assets/img/icra-2026-rgmc-cloud-robotics-certificate.jpg' | relative_url }}" alt="ICRA 2026 Robotic Grasping and Manipulation Competition Cloud Robotics Track second-place certificate" loading="lazy" width="1400" height="990">
      </a>
      <div class="competition-copy">
        <h3>2nd Place — IEEE ICRA 2026 Cloud Robotics Competition</h3>
        <p class="competition-kicker">11th Robotic Grasping and Manipulation Competition · Team MIL-Cloud</p>
        <p>Developed robust manipulation solutions for planar pushing and linear deformable-object shape control using the remote CloudGripper platform.</p>
        <p class="project-links"><a href="https://cloudgripper.org/icra2026/index.html">Official Award Page</a><a href="{{ '/assets/pdf/icra-2026-rgmc-cloud-robotics-runner-up-certificate.pdf' | relative_url }}">Certificate (PDF)</a></p>
      </div>
    </article>
  </section>

  <section class="home-section" aria-labelledby="projects-heading">
    <h2 id="projects-heading">Research Projects</h2>

    <article class="research-project">
      <video class="project-video" poster="{{ '/assets/img/click-to-model-demo-poster.jpg' | relative_url }}" autoplay loop muted playsinline controls preload="metadata" aria-label="Click-to-Model demonstration video">
        <source src="{{ '/assets/video/click-to-model-demo.mp4' | relative_url }}" type="video/mp4">
        Your browser does not support the video element.
      </video>
      <div class="project-copy">
        <h3>Click-to-Model: Real-Time Interactive Object Modeling and Robust 6D Pose Tracking</h3>
        <p class="project-kicker">Accepted to IEEE/RSJ IROS 2026 · SAM2 · SAM 3D Objects · Metric Scale Recovery · SPARK-6D</p>
        <p>An end-to-end system that starts with a click in an RGB-D frame, reconstructs a metric object mesh, and hands it to a real-time 6D pose tracker.</p>
        <!-- Replace this temporary Paper URL with the official IROS 2026 publication link when available. -->
        <p class="project-links"><a href="https://github.com/MichaelMa-177/Click-to-Model">Code</a><a href="https://github.com/MichaelMa-177/Click-to-Model#paper">Paper (coming soon)</a><a href="https://github.com/MichaelMa-177/Click-to-Model#readme">Documentation</a></p>
      </div>
    </article>

    <article class="research-project">
      <video class="project-video" poster="{{ '/assets/img/spark-6d-demo-poster.jpg' | relative_url }}" autoplay loop muted playsinline controls preload="metadata" aria-label="SPARK-6D demonstration video">
        <source src="{{ '/assets/video/spark-6d-demo.mp4' | relative_url }}" type="video/mp4">
        Your browser does not support the video element.
      </video>
      <div class="project-copy">
        <h3>SPARK-6D: Real-Time 6D Object Tracking</h3>
        <p class="project-kicker">SE(3) Kalman Prediction · Optical-Flow Gating · GPU Pipeline Optimization</p>
        <p>An engineering extension of FoundationPose that selectively predicts or refines object poses, with conservative fallbacks and reproducible performance comparisons.</p>
        <p class="project-links"><a href="https://github.com/MichaelMa-177/SPARK-6D">Code</a><a href="{{ '/assets/video/spark-6d-demo.mp4' | relative_url }}">Video</a></p>
      </div>
    </article>
  </section>
</div>
