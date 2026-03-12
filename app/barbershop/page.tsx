/* eslint-disable @next/next/no-img-element */
"use client";

import { useEffect } from "react";

export default function BarbershopPage() {
  useEffect(() => {
    if (typeof window === "undefined") return;

    // NAVIGATION SCROLL
    const nav = document.getElementById("nav");
    const onScrollNav = () => {
      if (!nav) return;
      const currentScroll = window.scrollY;
      if (currentScroll > 80) {
        nav.classList.add("scrolled");
      } else {
        nav.classList.remove("scrolled");
      }
    };
    window.addEventListener("scroll", onScrollNav);

    // MOBILE NAVIGATION
    const hamburger = document.getElementById("hamburger");
    const mobileNav = document.getElementById("mobileNav");

    const closeMobileNav = () => {
      if (!hamburger || !mobileNav) return;
      hamburger.classList.remove("active");
      mobileNav.classList.remove("active");
      document.body.style.overflow = "";
    };

    if (hamburger && mobileNav) {
      hamburger.addEventListener("click", () => {
        hamburger.classList.toggle("active");
        mobileNav.classList.toggle("active");
        document.body.style.overflow = mobileNav.classList.contains("active")
          ? "hidden"
          : "";
      });
      mobileNav
        .querySelectorAll("a[href^='#']")
        .forEach((a) => a.addEventListener("click", closeMobileNav));
    }

    // SCROLL REVEAL
    const revealElements = document.querySelectorAll<HTMLElement>(".reveal");
    const revealObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            (entry.target as HTMLElement).classList.add("visible");
          }
        });
      },
      {
        threshold: 0.1,
        rootMargin: "0px 0px -50px 0px",
      }
    );
    revealElements.forEach((el) => revealObserver.observe(el));

    // TESTIMONIAL SLIDER
    const testimonialItems = document.querySelectorAll<HTMLElement>(
      ".testimonial-item"
    );
    const testimonialDots =
      document.querySelectorAll<HTMLButtonElement>(".testimonial-dot");
    let currentTestimonial = 0;
    let testimonialInterval: number | undefined;

    const showTestimonial = (index: number) => {
      testimonialItems.forEach((item) => item.classList.remove("active"));
      testimonialDots.forEach((dot) => dot.classList.remove("active"));
      if (testimonialItems[index]) {
        testimonialItems[index].classList.add("active");
      }
      if (testimonialDots[index]) {
        testimonialDots[index].classList.add("active");
      }
      currentTestimonial = index;
    };

    testimonialDots.forEach((dot) => {
      dot.addEventListener("click", () => {
        const idx = parseInt(dot.dataset.index || "0", 10);
        showTestimonial(idx);
        if (testimonialInterval) {
          clearInterval(testimonialInterval);
        }
        startTestimonialAutoplay();
      });
    });

    const startTestimonialAutoplay = () => {
      testimonialInterval = window.setInterval(() => {
        showTestimonial((currentTestimonial + 1) % testimonialItems.length);
      }, 5000);
    };

    if (testimonialItems.length && testimonialDots.length) {
      showTestimonial(0);
      startTestimonialAutoplay();
    }

    // SMOOTH SCROLL
    const anchoredLinks = document.querySelectorAll<HTMLAnchorElement>(
      "a[href^='#']"
    );
    const onAnchorClick = (e: Event) => {
      e.preventDefault();
      const targetId = (e.currentTarget as HTMLAnchorElement).getAttribute(
        "href"
      );
      if (!targetId) return;
      const target = document.querySelector<HTMLElement>(targetId);
      if (target) {
        target.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    };
    anchoredLinks.forEach((anchor) =>
      anchor.addEventListener("click", onAnchorClick)
    );

    // PARALLAX HERO IMAGE
    const heroImg = document.querySelector<HTMLImageElement>(
      ".hero-image img"
    );
    const onScrollParallax = () => {
      const scrolled = window.scrollY;
      if (heroImg && scrolled < window.innerHeight) {
        heroImg.style.transform = `scale(1.05) translateY(${scrolled * 0.15}px)`;
      }
    };
    window.addEventListener("scroll", onScrollParallax);

    // COUNTER ANIMATION
    const statNumbers = document.querySelectorAll<HTMLElement>(".stat-number");
    const statsObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const el = entry.target as HTMLElement;
            const text = el.textContent || "";
            const match = text.match(/(\\d+)/);
            if (match) {
              const target = parseInt(match[0], 10);
              const suffix = text.replace(match[0], "");
              let current = 0;
              const increment = target / 60;
              const timer = window.setInterval(() => {
                current += increment;
                if (current >= target) {
                  current = target;
                  clearInterval(timer);
                }
                el.textContent = Math.floor(current) + suffix;
              }, 25);
            }
            statsObserver.unobserve(el);
          }
        });
      },
      { threshold: 0.5 }
    );
    statNumbers.forEach((el) => statsObserver.observe(el));

    // Cleanup
    return () => {
      window.removeEventListener("scroll", onScrollNav);
      window.removeEventListener("scroll", onScrollParallax);
      revealObserver.disconnect();
      statsObserver.disconnect();
      if (testimonialInterval) clearInterval(testimonialInterval);
      anchoredLinks.forEach((anchor) =>
        anchor.removeEventListener("click", onAnchorClick)
      );
    };
  }, []);

  return (
    <div className="min-h-screen bg-black text-white">
      <style jsx global>{`
        *, *::before, *::after { margin: 0; padding: 0; box-sizing: border-box; }
        :root {
          --gold: #C8A97E;
          --gold-light: #D4BC96;
          --gold-dark: #A8885E;
          --black: #0A0A0A;
          --black-light: #141414;
          --black-medium: #1A1A1A;
          --white: #FAFAF9;
          --white-dim: #E8E6E1;
          --gray: #6B6B6B;
          --gray-light: #999999;
          --serif: 'Playfair Display', Georgia, serif;
          --sans: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif;
          --display: 'Bebas Neue', Impact, sans-serif;
          --ease-out-expo: cubic-bezier(0.16, 1, 0.3, 1);
          --ease-out-quart: cubic-bezier(0.25, 1, 0.5, 1);
        }
        html {
          scroll-behavior: smooth;
          overflow-x: hidden;
          scrollbar-width: thin;
          scrollbar-color: var(--gold) var(--black);
        }
        body {
          font-family: var(--sans);
          background: var(--black);
          color: var(--white);
          overflow-x: hidden;
          -webkit-font-smoothing: antialiased;
          -moz-osx-font-smoothing: grayscale;
        }
        img { max-width: 100%; height: auto; display: block; }
        a { text-decoration: none; color: inherit; }
        button { border: none; background: none; cursor: pointer; font-family: inherit; }
        .nav {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          z-index: 1000;
          padding: 1.5rem 3rem;
          display: flex;
          align-items: center;
          justify-content: space-between;
          transition: all 0.4s var(--ease-out-quart);
        }
        .nav.scrolled {
          padding: 1rem 3rem;
          background: rgba(10, 10, 10, 0.95);
          backdrop-filter: blur(20px);
          -webkit-backdrop-filter: blur(20px);
          border-bottom: 1px solid rgba(200, 169, 126, 0.1);
        }
        .nav-logo {
          font-family: var(--display);
          font-size: 1.8rem;
          letter-spacing: 0.15em;
          color: var(--white);
          display: flex;
          align-items: center;
          gap: 0.75rem;
        }
        .nav-logo .logo-ampersand {
          color: var(--gold);
          font-family: var(--serif);
          font-style: italic;
          font-size: 1.4rem;
        }
        .nav-links {
          display: flex;
          align-items: center;
          gap: 2.5rem;
          list-style: none;
        }
        .nav-links a {
          font-size: 0.75rem;
          letter-spacing: 0.2em;
          text-transform: uppercase;
          color: var(--gray-light);
          transition: color 0.3s ease;
          position: relative;
        }
        .nav-links a::after {
          content: '';
          position: absolute;
          bottom: -4px;
          left: 0;
          width: 0;
          height: 1px;
          background: var(--gold);
          transition: width 0.3s var(--ease-out-expo);
        }
        .nav-links a:hover { color: var(--gold); }
        .nav-links a:hover::after { width: 100%; }
        .nav-cta {
          font-size: 0.7rem;
          letter-spacing: 0.25em;
          text-transform: uppercase;
          padding: 0.75rem 1.75rem;
          border: 1px solid var(--gold);
          color: var(--gold);
          transition: all 0.4s ease;
        }
        .nav-cta:hover {
          background: var(--gold);
          color: var(--black);
        }
        .nav-hamburger {
          display: none;
          flex-direction: column;
          gap: 6px;
          cursor: pointer;
          z-index: 1001;
        }
        .nav-hamburger span {
          display: block;
          width: 28px;
          height: 1px;
          background: var(--white);
          transition: all 0.3s ease;
        }
        .nav-hamburger.active span:nth-child(1) {
          transform: rotate(45deg) translate(5px, 5px);
        }
        .nav-hamburger.active span:nth-child(2) { opacity: 0; }
        .nav-hamburger.active span:nth-child(3) {
          transform: rotate(-45deg) translate(5px, -5px);
        }
        .mobile-nav {
          position: fixed;
          inset: 0;
          background: var(--black);
          z-index: 999;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          gap: 2rem;
          opacity: 0;
          visibility: hidden;
          transition: all 0.5s var(--ease-out-expo);
        }
        .mobile-nav.active {
          opacity: 1;
          visibility: visible;
        }
        .mobile-nav a {
          font-family: var(--display);
          font-size: 2.5rem;
          letter-spacing: 0.15em;
          color: var(--white-dim);
          transition: color 0.3s ease;
        }
        .mobile-nav a:hover { color: var(--gold); }
        .hero {
          min-height: 100vh;
          display: grid;
          grid-template-columns: 1fr 1fr;
          position: relative;
          overflow: hidden;
        }
        .hero-content {
          display: flex;
          flex-direction: column;
          justify-content: center;
          padding: 8rem 5rem 5rem;
          position: relative;
          z-index: 2;
        }
        .hero-tag {
          display: inline-flex;
          align-items: center;
          gap: 1rem;
          margin-bottom: 2.5rem;
          opacity: 0;
          transform: translateY(30px);
          animation: fadeUp 0.8s var(--ease-out-expo) 0.8s forwards;
        }
        .hero-tag-line {
          width: 40px;
          height: 1px;
          background: var(--gold);
        }
        .hero-tag-text {
          font-size: 0.7rem;
          letter-spacing: 0.35em;
          text-transform: uppercase;
          color: var(--gold);
        }
        .hero-title {
          font-family: var(--display);
          font-size: clamp(3.5rem, 7vw, 7rem);
          line-height: 0.95;
          letter-spacing: 0.04em;
          color: var(--white);
          margin-bottom: 2rem;
        }
        .hero-title span {
          display: block;
          opacity: 0;
          transform: translateY(60px);
        }
        .hero-title span:nth-child(1) { animation: fadeUp 1s var(--ease-out-expo) 1s forwards; }
        .hero-title span:nth-child(2) { animation: fadeUp 1s var(--ease-out-expo) 1.15s forwards; }
        .hero-title span:nth-child(3) { animation: fadeUp 1s var(--ease-out-expo) 1.3s forwards; }
        .hero-title .title-stroke {
          -webkit-text-stroke: 1.5px var(--white);
          color: transparent;
        }
        .hero-title .title-gold {
          color: var(--gold);
          font-family: var(--serif);
          font-style: italic;
          font-size: 0.65em;
          font-weight: 400;
        }
        .hero-desc {
          font-size: 1rem;
          line-height: 1.8;
          color: var(--gray-light);
          max-width: 420px;
          margin-bottom: 3rem;
          opacity: 0;
          transform: translateY(30px);
          animation: fadeUp 0.8s var(--ease-out-expo) 1.5s forwards;
        }
        .hero-actions {
          display: flex;
          align-items: center;
          gap: 2rem;
          opacity: 0;
          transform: translateY(30px);
          animation: fadeUp 0.8s var(--ease-out-expo) 1.7s forwards;
        }
        .btn-primary {
          display: inline-flex;
          align-items: center;
          gap: 1rem;
          background: var(--gold);
          color: var(--black);
          padding: 1.1rem 2.5rem;
          font-size: 0.7rem;
          font-weight: 600;
          letter-spacing: 0.25em;
          text-transform: uppercase;
          transition: all 0.4s var(--ease-out-expo);
          position: relative;
          overflow: hidden;
        }
        .btn-primary::before {
          content: '';
          position: absolute;
          inset: 0;
          background: var(--gold-dark);
          transform: translateX(-101%);
          transition: transform 0.4s var(--ease-out-expo);
        }
        .btn-primary:hover::before { transform: translateX(0); }
        .btn-primary span, .btn-primary svg { position: relative; z-index: 1; }
        .btn-outline {
          display: inline-flex;
          align-items: center;
          gap: 0.75rem;
          font-size: 0.75rem;
          letter-spacing: 0.15em;
          text-transform: uppercase;
          color: var(--white-dim);
          transition: color 0.3s ease;
        }
        .btn-outline:hover { color: var(--gold); }
        .btn-outline svg {
          font-size: 1.2rem;
          transition: transform 0.3s ease;
        }
        .btn-outline:hover svg { transform: translateX(4px); }
        .hero-image {
          position: relative;
          overflow: hidden;
        }
        .hero-image img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          scale: 1.1;
          animation: heroImgReveal 1.8s var(--ease-out-expo) 0.5s forwards;
          opacity: 0;
        }
        @keyframes heroImgReveal {
          from { opacity: 0; scale: 1.2; }
          to { opacity: 1; scale: 1.05; }
        }
        .hero-image::after {
          content: '';
          position: absolute;
          inset: 0;
          background:
            linear-gradient(to right, var(--black) 0%, transparent 30%),
            linear-gradient(to top, var(--black) 0%, transparent 20%);
          pointer-events: none;
        }
        .marquee-section {
          padding: 2rem 0;
          border-top: 1px solid rgba(200, 169, 126, 0.1);
          border-bottom: 1px solid rgba(200, 169, 126, 0.1);
          overflow: hidden;
        }
        .marquee-track {
          display: flex;
          animation: marqueeScroll 30s linear infinite;
          width: max-content;
        }
        .marquee-item {
          display: flex;
          align-items: center;
          gap: 2.5rem;
          padding: 0 2.5rem;
          white-space: nowrap;
        }
        .marquee-item span {
          font-family: var(--display);
          font-size: 1.3rem;
          letter-spacing: 0.2em;
          color: var(--gray);
          text-transform: uppercase;
        }
        .marquee-item .dot {
          width: 4px;
          height: 4px;
          background: var(--gold);
          border-radius: 50%;
          flex-shrink: 0;
        }
        @keyframes marqueeScroll {
          from { transform: translateX(0); }
          to { transform: translateX(-50%); }
        }
        .about {
          padding: 10rem 5rem;
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 5rem;
          align-items: center;
        }
        .about-images {
          position: relative;
          height: 600px;
        }
        .about-img-main {
          width: 70%;
          height: 85%;
          object-fit: cover;
          position: relative;
          z-index: 2;
          filter: grayscale(30%);
          transition: filter 0.6s ease;
        }
        .about-img-main:hover { filter: grayscale(0%); }
        .about-img-secondary {
          position: absolute;
          right: 0;
          bottom: 0;
          width: 55%;
          height: 55%;
          object-fit: cover;
          z-index: 3;
          border: 5px solid var(--black);
          filter: grayscale(30%);
          transition: filter 0.6s ease;
        }
        .about-img-secondary:hover { filter: grayscale(0%); }
        .about-accent {
          position: absolute;
          top: -2rem;
          right: 3rem;
          font-family: var(--display);
          font-size: 10rem;
          line-height: 1;
          color: rgba(200, 169, 126, 0.06);
          z-index: 1;
          user-select: none;
        }
        .about-content { padding-left: 2rem; }
        .section-tag {
          display: inline-flex;
          align-items: center;
          gap: 1rem;
          margin-bottom: 1.5rem;
        }
        .section-tag-line {
          width: 30px;
          height: 1px;
          background: var(--gold);
        }
        .section-tag-text {
          font-size: 0.65rem;
          letter-spacing: 0.35em;
          text-transform: uppercase;
          color: var(--gold);
        }
        .section-title {
          font-family: var(--display);
          font-size: clamp(2.5rem, 4vw, 4rem);
          letter-spacing: 0.05em;
          line-height: 1.05;
          margin-bottom: 2rem;
        }
        .section-title .italic {
          font-family: var(--serif);
          font-style: italic;
          font-weight: 400;
          color: var(--gold);
        }
        .about-text {
          font-size: 0.95rem;
          line-height: 1.9;
          color: var(--gray-light);
          margin-bottom: 2.5rem;
        }
        .about-stats {
          display: flex;
          gap: 3rem;
          padding-top: 2.5rem;
          border-top: 1px solid rgba(200, 169, 126, 0.15);
        }
        .stat-number {
          font-family: var(--display);
          font-size: 2.8rem;
          color: var(--gold);
          letter-spacing: 0.03em;
        }
        .stat-label {
          font-size: 0.7rem;
          letter-spacing: 0.2em;
          text-transform: uppercase;
          color: var(--gray);
          margin-top: 0.25rem;
        }
        .services {
          padding: 8rem 5rem 10rem;
          position: relative;
        }
        .services-header {
          display: flex;
          justify-content: space-between;
          align-items: flex-end;
          margin-bottom: 5rem;
        }
        .services-header .section-title { margin-bottom: 0; }
        .services-header-right {
          text-align: right;
          max-width: 350px;
        }
        .services-header-right p {
          font-size: 0.9rem;
          line-height: 1.8;
          color: var(--gray-light);
        }
        .services-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 1px;
          background: rgba(200, 169, 126, 0.1);
        }
        .service-card {
          background: var(--black);
          padding: 3rem 2rem;
          position: relative;
          overflow: hidden;
          transition: all 0.5s var(--ease-out-expo);
          cursor: pointer;
        }
        .service-card::before {
          content: '';
          position: absolute;
          inset: 0;
          background: linear-gradient(135deg, rgba(200, 169, 126, 0.08) 0%, transparent 50%);
          opacity: 0;
          transition: opacity 0.5s ease;
        }
        .service-card:hover::before { opacity: 1; }
        .service-card:hover { transform: translateY(-5px); }
        .service-icon {
          font-size: 2.2rem;
          color: var(--gold);
          margin-bottom: 2rem;
          transition: transform 0.4s var(--ease-out-expo);
        }
        .service-card:hover .service-icon { transform: scale(1.1); }
        .service-name {
          font-family: var(--display);
          font-size: 1.4rem;
          letter-spacing: 0.1em;
          margin-bottom: 0.75rem;
        }
        .service-desc {
          font-size: 0.85rem;
          line-height: 1.7;
          color: var(--gray);
          margin-bottom: 2rem;
        }
        .service-price-row {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding-top: 1.5rem;
          border-top: 1px solid rgba(200, 169, 126, 0.1);
        }
        .service-price {
          font-family: var(--display);
          font-size: 1.6rem;
          color: var(--gold);
        }
        .service-duration {
          font-size: 0.7rem;
          letter-spacing: 0.15em;
          text-transform: uppercase;
          color: var(--gray);
        }
        .service-arrow {
          position: absolute;
          top: 2rem;
          right: 2rem;
          font-size: 1.2rem;
          color: var(--gold);
          opacity: 0;
          transform: translate(-10px, 10px);
          transition: all 0.4s var(--ease-out-expo);
        }
        .service-card:hover .service-arrow {
          opacity: 1;
          transform: translate(0, 0);
        }
        .gallery {
          padding: 0 5rem 10rem;
        }
        .gallery-header {
          text-align: center;
          margin-bottom: 5rem;
        }
        .gallery-grid {
          display: grid;
          grid-template-columns: repeat(12, 1fr);
          grid-template-rows: auto auto;
          gap: 1.5rem;
        }
        .gallery-item {
          overflow: hidden;
          position: relative;
          cursor: pointer;
        }
        .gallery-item:nth-child(1) { grid-column: 1 / 5; grid-row: 1; }
        .gallery-item:nth-child(2) { grid-column: 5 / 9; grid-row: 1; }
        .gallery-item:nth-child(3) { grid-column: 9 / 13; grid-row: 1; }
        .gallery-item:nth-child(4) { grid-column: 1 / 7; grid-row: 2; }
        .gallery-item:nth-child(5) { grid-column: 7 / 13; grid-row: 2; }
        .gallery-item img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          aspect-ratio: 4/3;
          filter: grayscale(40%);
          transition: all 0.6s var(--ease-out-expo);
        }
        .gallery-item:hover img {
          filter: grayscale(0%);
          scale: 1.05;
        }
        .gallery-overlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(to top, rgba(10, 10, 10, 0.8) 0%, transparent 60%);
          display: flex;
          align-items: flex-end;
          padding: 2rem;
          opacity: 0;
          transition: opacity 0.4s ease;
        }
        .gallery-item:hover .gallery-overlay { opacity: 1; }
        .gallery-overlay-text {
          font-family: var(--display);
          font-size: 1.1rem;
          letter-spacing: 0.15em;
        }
        .team {
          padding: 8rem 5rem 10rem;
          background: var(--black-light);
        }
        .team-header {
          display: flex;
          justify-content: space-between;
          align-items: flex-end;
          margin-bottom: 5rem;
        }
        .team-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 2rem;
        }
        .team-card {
          position: relative;
          overflow: hidden;
          cursor: pointer;
        }
        .team-card-img {
          aspect-ratio: 3/4;
          overflow: hidden;
        }
        .team-card-img img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          filter: grayscale(50%);
          transition: all 0.6s var(--ease-out-expo);
        }
        .team-card:hover .team-card-img img {
          filter: grayscale(0%);
          scale: 1.05;
        }
        .team-card-info {
          padding: 1.5rem 0;
          display: flex;
          justify-content: space-between;
          align-items: flex-start;
        }
        .team-card-name {
          font-family: var(--display);
          font-size: 1.3rem;
          letter-spacing: 0.1em;
        }
        .team-card-role {
          font-size: 0.7rem;
          letter-spacing: 0.2em;
          text-transform: uppercase;
          color: var(--gold);
          margin-top: 0.3rem;
        }
        .team-card-socials {
          display: flex;
          gap: 0.75rem;
        }
        .team-card-socials a {
          font-size: 1.1rem;
          color: var(--gray);
          transition: color 0.3s ease;
        }
        .team-card-socials a:hover { color: var(--gold); }
        .testimonials {
          padding: 10rem 5rem;
          position: relative;
          overflow: hidden;
        }
        .testimonial-bg-text {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          font-family: var(--display);
          font-size: 20vw;
          color: rgba(200, 169, 126, 0.03);
          white-space: nowrap;
          pointer-events: none;
          user-select: none;
        }
        .testimonials-header {
          text-align: center;
          margin-bottom: 5rem;
          position: relative;
          z-index: 2;
        }
        .testimonial-slider {
          max-width: 800px;
          margin: 0 auto;
          text-align: center;
          position: relative;
          z-index: 2;
        }
        .testimonial-item {
          display: none;
          animation: fadeIn 0.6s ease;
        }
        .testimonial-item.active { display: block; }
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .testimonial-stars {
          display: flex;
          justify-content: center;
          gap: 0.3rem;
          margin-bottom: 2rem;
        }
        .testimonial-stars svg {
          font-size: 1.1rem;
          color: var(--gold);
        }
        .testimonial-quote {
          font-family: var(--serif);
          font-size: 1.5rem;
          line-height: 1.8;
          color: var(--white-dim);
          font-style: italic;
          margin-bottom: 2.5rem;
        }
        .testimonial-author-name {
          font-family: var(--display);
          font-size: 1.1rem;
          letter-spacing: 0.15em;
        }
        .testimonial-author-title {
          font-size: 0.7rem;
          letter-spacing: 0.2em;
          text-transform: uppercase;
          color: var(--gold);
          margin-top: 0.3rem;
        }
        .testimonial-nav {
          display: flex;
          justify-content: center;
          gap: 0.75rem;
          margin-top: 3rem;
        }
        .testimonial-dot {
          width: 8px;
          height: 8px;
          border-radius: 50%;
          border: 1px solid var(--gold);
          background: transparent;
          cursor: pointer;
          transition: all 0.3s ease;
          padding: 0;
        }
        .testimonial-dot.active {
          background: var(--gold);
          transform: scale(1.2);
        }
        .booking {
          padding: 10rem 5rem;
          position: relative;
          overflow: hidden;
        }
        .booking-inner {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 4rem;
          align-items: center;
          position: relative;
          z-index: 2;
        }
        .booking-image {
          position: relative;
          height: 550px;
          overflow: hidden;
        }
        .booking-image img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          filter: grayscale(20%);
        }
        .booking-image::after {
          content: '';
          position: absolute;
          inset: 0;
          border: 1px solid var(--gold);
          transform: translate(20px, 20px);
          pointer-events: none;
        }
        .booking-form-wrapper {
          padding-left: 2rem;
        }
        .booking-form {
          display: flex;
          flex-direction: column;
          gap: 1.5rem;
          margin-top: 2.5rem;
        }
        .form-group {
          position: relative;
        }
        .form-group label {
          display: block;
          font-size: 0.65rem;
          letter-spacing: 0.25em;
          text-transform: uppercase;
          color: var(--gray-light);
          margin-bottom: 0.5rem;
        }
        .form-group input,
        .form-group select {
          width: 100%;
          padding: 1rem 0;
          background: transparent;
          border: none;
          border-bottom: 1px solid rgba(200, 169, 126, 0.2);
          color: var(--white);
          font-family: var(--sans);
          font-size: 0.95rem;
          outline: none;
          transition: border-color 0.3s ease;
        }
        .form-group input:focus,
        .form-group select:focus {
          border-bottom-color: var(--gold);
        }
        .form-group input::placeholder {
          color: var(--gray);
        }
        .form-group select {
          -webkit-appearance: none;
          cursor: pointer;
        }
        .form-group select option {
          background: var(--black);
          color: var(--white);
        }
        .form-row {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 1.5rem;
        }
        .btn-submit {
          margin-top: 1rem;
          width: 100%;
          padding: 1.2rem;
          background: var(--gold);
          color: var(--black);
          font-size: 0.75rem;
          font-weight: 600;
          letter-spacing: 0.25em;
          text-transform: uppercase;
          transition: all 0.4s ease;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 1rem;
        }
        .btn-submit:hover { background: var(--gold-dark); }
        .instagram {
          padding: 5rem 0;
        }
        .instagram-header {
          text-align: center;
          margin-bottom: 3rem;
        }
        .instagram-handle {
          font-family: var(--sans);
          font-size: 0.8rem;
          letter-spacing: 0.2em;
          color: var(--gold);
          margin-top: 0.75rem;
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
        }
        .instagram-grid {
          display: grid;
          grid-template-columns: repeat(6, 1fr);
          gap: 3px;
        }
        .instagram-item {
          aspect-ratio: 1;
          overflow: hidden;
          position: relative;
          cursor: pointer;
        }
        .instagram-item img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: all 0.5s ease;
          filter: grayscale(30%);
        }
        .instagram-item:hover img {
          scale: 1.1;
          filter: grayscale(0%);
        }
        .instagram-item::after {
          content: '';
          position: absolute;
          inset: 0;
          background: rgba(200, 169, 126, 0.2);
          opacity: 0;
          transition: opacity 0.3s ease;
        }
        .instagram-item:hover::after { opacity: 1; }
        .footer {
          padding: 5rem 5rem 2rem;
          border-top: 1px solid rgba(200, 169, 126, 0.1);
        }
        .footer-top {
          display: grid;
          grid-template-columns: 2fr 1fr 1fr 1.5fr;
          gap: 3rem;
          margin-bottom: 4rem;
        }
        .footer-brand-name {
          font-family: var(--display);
          font-size: 2rem;
          letter-spacing: 0.1em;
          margin-bottom: 1.5rem;
        }
        .footer-brand-name .gold { color: var(--gold); }
        .footer-brand-desc {
          font-size: 0.85rem;
          line-height: 1.8;
          color: var(--gray);
          max-width: 300px;
          margin-bottom: 2rem;
        }
        .footer-socials {
          display: flex;
          gap: 1rem;
        }
        .footer-socials a {
          width: 40px;
          height: 40px;
          border: 1px solid rgba(200, 169, 126, 0.2);
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 1.1rem;
          color: var(--gray-light);
          transition: all 0.3s ease;
        }
        .footer-socials a:hover {
          border-color: var(--gold);
          color: var(--gold);
          background: rgba(200, 169, 126, 0.05);
        }
        .footer-col-title {
          font-family: var(--display);
          font-size: 1rem;
          letter-spacing: 0.15em;
          margin-bottom: 1.5rem;
          color: var(--white);
        }
        .footer-col ul {
          list-style: none;
          display: flex;
          flex-direction: column;
          gap: 0.75rem;
        }
        .footer-col ul a {
          font-size: 0.85rem;
          color: var(--gray);
          transition: color 0.3s ease;
        }
        .footer-col ul a:hover { color: var(--gold); }
        .footer-contact-item {
          display: flex;
          align-items: flex-start;
          gap: 1rem;
          margin-bottom: 1.25rem;
        }
        .footer-contact-item svg {
          font-size: 1.1rem;
          color: var(--gold);
          margin-top: 0.2rem;
          flex-shrink: 0;
        }
        .footer-contact-item p {
          font-size: 0.85rem;
          line-height: 1.6;
          color: var(--gray);
        }
        .footer-bottom {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding-top: 2rem;
          border-top: 1px solid rgba(200, 169, 126, 0.1);
        }
        .footer-bottom p {
          font-size: 0.75rem;
          color: var(--gray);
          letter-spacing: 0.1em;
        }
        .footer-bottom-links {
          display: flex;
          gap: 2rem;
        }
        .footer-bottom-links a {
          font-size: 0.75rem;
          color: var(--gray);
          letter-spacing: 0.1em;
          transition: color 0.3s ease;
        }
        .footer-bottom-links a:hover { color: var(--gold); }
        .reveal {
          opacity: 0;
          transform: translateY(40px);
          transition: all 0.8s var(--ease-out-expo);
        }
        .reveal.visible {
          opacity: 1;
          transform: translateY(0);
        }
        .reveal-delay-1 { transition-delay: 0.1s; }
        .reveal-delay-2 { transition-delay: 0.2s; }
        .reveal-delay-3 { transition-delay: 0.3s; }
        .reveal-delay-4 { transition-delay: 0.4s; }
        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(40px); }
          to { opacity: 1; transform: translateY(0); }
        }
        ::-webkit-scrollbar { width: 6px; }
        ::-webkit-scrollbar-track { background: var(--black); }
        ::-webkit-scrollbar-thumb { background: var(--gold); border-radius: 3px; }
        @media (max-width: 1200px) {
          .services-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }
        @media (max-width: 1024px) {
          .hero {
            grid-template-columns: 1fr;
            min-height: auto;
          }
          .hero-content {
            padding: 8rem 3rem 4rem;
            min-height: 70vh;
            justify-content: flex-end;
          }
          .hero-image {
            height: 60vh;
          }
          .about {
            grid-template-columns: 1fr;
            padding: 6rem 3rem;
            gap: 3rem;
          }
          .about-images { height: 450px; }
          .services {
            padding: 6rem 3rem;
          }
          .services-header {
            flex-direction: column;
            align-items: flex-start;
            gap: 1.5rem;
          }
          .services-header-right { text-align: left; max-width: 100%; }
          .gallery { padding: 0 3rem 6rem; }
          .gallery-grid {
            grid-template-columns: 1fr 1fr;
            grid-template-rows: auto;
          }
          .gallery-item:nth-child(1) { grid-column: 1; grid-row: 1; }
          .gallery-item:nth-child(2) { grid-column: 2; grid-row: 1; }
          .gallery-item:nth-child(3) { grid-column: 1; grid-row: 2; }
          .gallery-item:nth-child(4) { grid-column: 2; grid-row: 2; }
          .gallery-item:nth-child(5) { grid-column: 1 / -1; grid-row: 3; }
          .gallery-item:nth-child(5) img { aspect-ratio: 21/9; }
          .team { padding: 6rem 3rem; }
          .team-grid { grid-template-columns: repeat(2, 1fr); }
          .team-header {
            flex-direction: column;
            align-items: flex-start;
            gap: 1.5rem;
          }
          .testimonials { padding: 6rem 3rem; }
          .booking { padding: 6rem 3rem; }
          .booking-inner { grid-template-columns: 1fr; }
          .booking-image { height: 400px; }
          .booking-image::after { transform: translate(15px, 15px); }
          .booking-form-wrapper { padding-left: 0; }
          .footer { padding: 4rem 3rem 2rem; }
          .footer-top { grid-template-columns: 1fr 1fr; gap: 2.5rem; }
          .nav { padding: 1.25rem 2rem; }
          .nav.scrolled { padding: 1rem 2rem; }
          .testimonial-bg-text { font-size: 25vw; }
        }
        @media (max-width: 768px) {
          .nav-links, .nav-cta { display: none; }
          .nav-hamburger { display: flex; }
          .hero-content {
            padding: 7rem 1.5rem 3rem;
            min-height: 60vh;
          }
          .hero-image { height: 50vh; }
          .hero-actions { flex-direction: column; align-items: flex-start; gap: 1.5rem; }
          .hero-desc { max-width: 100%; }
          .about { padding: 4rem 1.5rem; }
          .about-images {
            height: auto;
            display: flex;
            flex-direction: column;
            gap: 1rem;
          }
          .about-img-main {
            width: 100%;
            height: 300px;
          }
          .about-img-secondary {
            position: relative;
            right: auto;
            bottom: auto;
            width: 100%;
            height: 220px;
            border: none;
          }
          .about-accent { display: none; }
          .about-stats { flex-direction: row; gap: 1.5rem; flex-wrap: wrap; }
          .about-content { padding-left: 0; }
          .services { padding: 4rem 1.5rem; }
          .services-grid { grid-template-columns: 1fr; }
          .service-card { padding: 2.5rem 1.5rem; }
          .service-arrow { opacity: 1; transform: translate(0, 0); }
          .gallery { padding: 0 1.5rem 4rem; }
          .gallery-header { margin-bottom: 3rem; }
          .gallery-grid { grid-template-columns: 1fr; gap: 1rem; }
          .gallery-item:nth-child(n) { grid-column: 1; grid-row: auto; }
          .gallery-item:nth-child(5) img { aspect-ratio: 4/3; }
          .gallery-overlay { opacity: 1; }
          .team { padding: 4rem 1.5rem; }
          .team-header { margin-bottom: 3rem; }
          .team-grid { grid-template-columns: 1fr; max-width: 500px; }
          .team-card-img img { filter: grayscale(0%); }
          .testimonials { padding: 4rem 1.5rem; }
          .testimonial-quote { font-size: 1.15rem; line-height: 1.7; }
          .testimonial-bg-text { font-size: 30vw; }
          .booking { padding: 4rem 1.5rem; }
          .booking-image { height: 280px; }
          .booking-image::after { transform: translate(10px, 10px); }
          .form-row { grid-template-columns: 1fr; }
          .instagram-grid { grid-template-columns: repeat(3, 1fr); }
          .footer { padding: 3rem 1.5rem 1.5rem; }
          .footer-top { grid-template-columns: 1fr; gap: 2rem; }
          .footer-brand-desc { max-width: 100%; }
          .footer-bottom { flex-direction: column; gap: 1rem; text-align: center; }
          .footer-bottom-links { justify-content: center; }
          .marquee-item span { font-size: 1rem; }
          .mobile-nav a { font-size: 2rem; }
          .section-title { font-size: clamp(2rem, 6vw, 3rem); }
          .btn-primary { padding: 1rem 2rem; font-size: 0.65rem; }
        }
        @media (max-width: 480px) {
          .hero-title { font-size: clamp(2.2rem, 10vw, 2.8rem); }
          .hero-content { padding: 6rem 1.25rem 2.5rem; }
          .hero-tag-text { font-size: 0.6rem; letter-spacing: 0.25em; }
          .hero-desc { font-size: 0.9rem; }
          .section-title { font-size: 1.8rem; }
          .section-tag-text { font-size: 0.6rem; }
          .about { padding: 3rem 1.25rem; }
          .about-img-main { height: 250px; }
          .about-img-secondary { height: 180px; }
          .about-text { font-size: 0.9rem; }
          .about-stats { gap: 1rem; }
          .stat-number { font-size: 2.2rem; }
          .stat-label { font-size: 0.6rem; }
          .services { padding: 3rem 1.25rem; }
          .services-header { margin-bottom: 3rem; }
          .gallery { padding: 0 1.25rem 3rem; }
          .team { padding: 3rem 1.25rem; }
          .testimonials { padding: 3rem 1.25rem; }
          .testimonial-quote { font-size: 1rem; }
          .testimonial-stars svg { font-size: 0.9rem; }
          .booking { padding: 3rem 1.25rem; }
          .booking-image { height: 220px; }
          .booking-image::after { display: none; }
          .form-group label { font-size: 0.6rem; }
          .form-group input,
          .form-group select { font-size: 0.85rem; padding: 0.85rem 0; }
          .btn-submit { padding: 1rem; font-size: 0.65rem; }
          .instagram-grid { grid-template-columns: repeat(2, 1fr); }
          .instagram-header { margin-bottom: 2rem; }
          .footer { padding: 2.5rem 1.25rem 1.5rem; }
          .footer-brand-name { font-size: 1.6rem; }
          .footer-col-title { font-size: 0.9rem; }
          .footer-bottom p { font-size: 0.65rem; }
          .footer-bottom-links a { font-size: 0.65rem; }
          .footer-bottom-links { gap: 1rem; }
          .marquee-item span { font-size: 0.85rem; letter-spacing: 0.15em; }
          .marquee-item { gap: 1.5rem; padding: 0 1.5rem; }
          .nav-logo { font-size: 1.4rem; }
          .mobile-nav a { font-size: 1.6rem; }
        }
        @media (max-width: 360px) {
          .hero-title { font-size: 2rem; }
          .hero-content { padding: 5.5rem 1rem 2rem; }
          .hero-desc { font-size: 0.85rem; }
          .section-title { font-size: 1.6rem; }
          .about { padding: 2.5rem 1rem; }
          .about-img-main { height: 200px; }
          .about-img-secondary { height: 150px; }
          .about-stats { flex-direction: column; gap: 1rem; }
          .services { padding: 2.5rem 1rem; }
          .service-card { padding: 2rem 1.25rem; }
          .service-name { font-size: 1.2rem; }
          .service-desc { font-size: 0.8rem; }
          .service-price { font-size: 1.3rem; }
          .gallery { padding: 0 1rem 2.5rem; }
          .team { padding: 2.5rem 1rem; }
          .testimonials { padding: 2.5rem 1rem; }
          .testimonial-quote { font-size: 0.9rem; }
          .booking { padding: 2.5rem 1rem; }
          .booking-image { height: 180px; }
          .instagram-grid { grid-template-columns: repeat(2, 1fr); }
          .footer { padding: 2rem 1rem 1rem; }
          .nav { padding: 1rem; }
          .nav.scrolled { padding: 0.75rem 1rem; }
          .nav-logo { font-size: 1.2rem; }
        }
      `}</style>

      {/* Navigation */}
      <nav className="nav" id="nav">
        <a href="#top" className="nav-logo">
          Razor <span className="logo-ampersand">&amp;</span> CO.
        </a>

        <ul className="nav-links">
          <li>
            <a href="#about">Our Story</a>
          </li>
          <li>
            <a href="#services">Services</a>
          </li>
          <li>
            <a href="#gallery">Gallery</a>
          </li>
          <li>
            <a href="#team">Barbers</a>
          </li>
          <li>
            <a href="#testimonials">Reviews</a>
          </li>
        </ul>

        <a href="#booking" className="nav-cta">
          Book Now
        </a>

        <div className="nav-hamburger" id="hamburger">
          <span></span>
          <span></span>
          <span></span>
        </div>
      </nav>

      {/* Mobile Navigation */}
      <div className="mobile-nav" id="mobileNav">
        <a href="#about">Our Story</a>
        <a href="#services">Services</a>
        <a href="#gallery">Gallery</a>
        <a href="#team">Barbers</a>
        <a href="#testimonials">Reviews</a>
        <a href="#booking">Book Now</a>
      </div>

      {/* Hero Section */}
      <section className="hero" id="top">
        <div className="hero-content">
          <div className="hero-tag">
            <span className="hero-tag-line" />
            <span className="hero-tag-text">Est. 2018 — Premium Grooming</span>
          </div>

          <h1 className="hero-title">
            <span>WHERE CRAFT</span>
            <span>MEETS</span>
            <span className="title-stroke">&amp; TRADITION</span>
          </h1>

          <p className="hero-desc">
            Step into a world where every cut tells a story. Our master barbers
            blend time-honored techniques with contemporary artistry to craft
            your signature look.
          </p>

          <div className="hero-actions">
            <a href="#booking" className="btn-primary">
              <span>Reserve Your Chair</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
                role="img"
                width="1em"
                height="1em"
                viewBox="0 0 24 24"
              >
                <path
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="1.5"
                  d="M4 12h16m0 0l-6-6m6 6l-6 6"
                />
              </svg>
            </a>
            <a href="#services" className="btn-outline">
              <span>Explore Services</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
                role="img"
                width="1em"
                height="1em"
                viewBox="0 0 24 24"
              >
                <path
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="1.5"
                  d="M4 12h16m0 0l-6-6m6 6l-6 6"
                />
              </svg>
            </a>
          </div>
        </div>

        <div className="hero-image">
          <img
            src="https://images.unsplash.com/photo-1621605815971-fbc98d665033?w=1200&q=85&auto=format&fit=crop"
            alt="Master barber at work"
            loading="eager"
          />
        </div>
      </section>

      {/* Marquee */}
      <div className="marquee-section">
        <div className="marquee-track">
          {[0, 1].map((i) => (
            <div className="marquee-item" key={i}>
              <span>Premium Grooming</span>
              <div className="dot" />
              <span>Hot Towel Shaves</span>
              <div className="dot" />
              <span>Beard Sculpting</span>
              <div className="dot" />
              <span>Classic Cuts</span>
              <div className="dot" />
              <span>Hair Design</span>
              <div className="dot" />
              <span>Luxury Experience</span>
              <div className="dot" />
              <span>Gentleman's Club</span>
              <div className="dot" />
              <span>Straight Razor</span>
              <div className="dot" />
            </div>
          ))}
        </div>
      </div>

      {/* About Section */}
      <section className="about" id="about">
        <div className="about-images reveal">
          <img
            className="about-img-main"
            src="https://images.unsplash.com/photo-1503951914875-452162b0f3f1?w=800&q=85&auto=format&fit=crop"
            alt="Barbershop interior"
          />
          <img
            className="about-img-secondary"
            src="https://images.unsplash.com/photo-1599351431202-1e0f0137899a?w=600&q=85&auto=format&fit=crop"
            alt="Barber tools"
          />
          <div className="about-accent">B&C</div>
        </div>

        <div className="about-content">
          <div className="section-tag reveal">
            <span className="section-tag-line" />
            <span className="section-tag-text">Our Story</span>
          </div>

          <h2 className="section-title reveal reveal-delay-1">
            MORE THAN A
            <br />
            BARBERSHOP.
            <br />
            A <span className="italic">Legacy.</span>
          </h2>

          <p className="about-text reveal reveal-delay-2">
            Founded in the heart of the city, Razor &amp; Co. was born from a
            passion for authentic craftsmanship and the belief that every man
            deserves a grooming experience that goes beyond the ordinary. Our
            shop is a sanctuary — a place where tradition is honored,
            conversation flows freely, and every detail matters.
          </p>

          <p className="about-text reveal reveal-delay-3">
            From the warm towels to the final brush of talc, every visit is
            choreographed to perfection. We do not just cut hair; we build
            confidence, one client at a time.
          </p>

          <div className="about-stats reveal reveal-delay-4">
            <div>
              <div className="stat-number">7+</div>
              <div className="stat-label">Years of Excellence</div>
            </div>
            <div>
              <div className="stat-number">15K+</div>
              <div className="stat-label">Happy Clients</div>
            </div>
            <div>
              <div className="stat-number">6</div>
              <div className="stat-label">Master Barbers</div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="services" id="services">
        <div className="services-header">
          <div>
            <div className="section-tag reveal">
              <span className="section-tag-line" />
              <span className="section-tag-text">What We Offer</span>
            </div>
            <h2 className="section-title reveal reveal-delay-1">
              OUR <span className="italic">Premium</span>
              <br />
              SERVICES
            </h2>
          </div>
          <div className="services-header-right reveal reveal-delay-2">
            <p>
              Each service is crafted with precision and care, using only the
              finest products and time-tested techniques.
            </p>
          </div>
        </div>

        <div className="services-grid">
          <div className="service-card reveal">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
              role="img"
              width="1em"
              height="1em"
              viewBox="0 0 24 24"
              className="service-icon"
            >
              <path
                fill="currentColor"
                d="M6.654 1.633a.75.75 0 0 0-1.308.735l5.794 10.304l-2.708 4.815a3.751 3.751 0 1 0-.136 3.303L12 14.202l3.704 6.588a3.75 3.75 0 1 0-.136-3.303l-2.708-4.815l5.794-10.304a.75.75 0 0 0-1.308-.735L12 11.142z"
              />
            </svg>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
              role="img"
              width="1em"
              height="1em"
              viewBox="0 0 24 24"
              className="service-arrow"
            >
              <path
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="1.5"
                d="M6 18L18 6m0 0H9m9 0v9"
              />
            </svg>
            <h3 className="service-name">SIGNATURE CUT</h3>
            <p className="service-desc">
              A tailored haircut experience with consultation, hot towel
              treatment, and precision styling.
            </p>
            <div className="service-price-row">
              <span className="service-price">$45</span>
              <span className="service-duration">45 Min</span>
            </div>
          </div>

          <div className="service-card reveal reveal-delay-1">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
              role="img"
              width="1em"
              height="1em"
              viewBox="0 0 24 24"
              className="service-icon"
            >
              <path
                fill="currentColor"
                d="M12.832 21.801c3.126-.626 7.168-2.875 7.168-8.69c0-5.291-3.873-8.815-6.658-10.434c-.619-.36-1.342.113-1.342.828v1.828c0 1.442-.606 4.074-2.29 5.169c-.86.559-1.79-.278-1.894-1.298l-.086-.838c-.1-.974-1.092-1.565-1.87-.971C4.461 8.46 3 10.33 3 13.11C3 20.221 8.289 22 10.933 22q.232 0 .484-.015C10.111 21.874 8 21.064 8 18.444c0-2.05 1.495-3.435 2.631-4.11c.306-.18.663.055.663.41v.59c0 .45.175 1.155.59 1.637c.47.546 1.159-.026 1.214-.744c.018-.226.246-.37.442-.256c.641.375 1.46 1.175 1.46 2.473c0 2.048-1.129 2.99-2.168 3.357"
              />
            </svg>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
              role="img"
              width="1em"
              height="1em"
              viewBox="0 0 24 24"
              className="service-arrow"
            >
              <path
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="1.5"
                d="M6 18L18 6m0 0H9m9 0v9"
              />
            </svg>
            <h3 className="service-name">HOT TOWEL SHAVE</h3>
            <p className="service-desc">
              Traditional straight-razor shave with hot towel prep, premium
              lather, and aftershave balm.
            </p>
            <div className="service-price-row">
              <span className="service-price">$55</span>
              <span className="service-duration">50 Min</span>
            </div>
          </div>

          <div className="service-card reveal reveal-delay-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
              role="img"
              width="1em"
              height="1em"
              viewBox="0 0 24 24"
              className="service-icon"
            >
              <path
                fill="currentColor"
                d="m20.092 14.326l.193-1.894c.103-1.011.17-1.678.117-2.099h.02c.871 0 1.578-.746 1.578-1.666S21.293 7 20.421 7s-1.579.746-1.579 1.667c0 .416.145.797.384 1.089c-.343.223-.792.695-1.468 1.405c-.52.547-.78.82-1.07.863a.84.84 0 0 1-.473-.07c-.268-.124-.447-.462-.804-1.139L13.527 7.25c-.22-.417-.405-.766-.572-1.047c.683-.368 1.15-1.117 1.15-1.98C14.105 2.994 13.163 2 12 2s-2.105.995-2.105 2.222c0 .864.467 1.613 1.15 1.98c-.167.282-.351.631-.572 1.048L8.59 10.816c-.358.676-.537 1.014-.805 1.139a.84.84 0 0 1-.473.07c-.29-.043-.55-.317-1.07-.864c-.676-.71-1.125-1.182-1.468-1.405c.24-.292.384-.673.384-1.09C5.158 7.747 4.45 7 3.578 7C2.708 7 2 7.746 2 8.667c0 .92.707 1.666 1.579 1.666h.019c-.054.42.014 1.088.117 2.099l.193 1.894c.107 1.051.196 2.051.306 2.952h15.572c.11-.9.199-1.901.306-2.952M10.855 22h2.29c2.985 0 4.478 0 5.474-.94c.434-.412.71-1.152.908-2.116H4.473c.198.964.473 1.704.908 2.115C6.377 22 7.87 22 10.855 22"
              />
            </svg>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
              role="img"
              width="1em"
              height="1em"
              viewBox="0 0 24 24"
              className="service-arrow"
            >
              <path
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="1.5"
                d="M6 18L18 6m0 0H9m9 0v9"
              />
            </svg>
            <h3 className="service-name">BEARD SCULPTING</h3>
            <p className="service-desc">
              Expert beard shaping, trimming, and conditioning with premium oils
              and balms for the perfect profile.
            </p>
            <div className="service-price-row">
              <span className="service-price">$35</span>
              <span className="service-duration">30 Min</span>
            </div>
          </div>

          <div className="service-card reveal reveal-delay-3">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
              role="img"
              width="1em"
              height="1em"
              viewBox="0 0 24 24"
              className="service-icon"
            >
              <path
                fill="currentColor"
                d="M9.153 5.408C10.42 3.136 11.053 2 12 2s1.58 1.136 2.847 3.408l.328.588c.36.646.54.969.82 1.182s.63.292 1.33.45l.636.144c2.46.557 3.689.835 3.982 1.776c.292.94-.546 1.921-2.223 3.882l-.434.507c-.476.557-.715.836-.822 1.18c-.107.345-.071.717.001 1.46l.066.677c.253 2.617.38 3.925-.386 4.506s-1.918.051-4.22-1.009l-.597-.274c-.654-.302-.981-.452-1.328-.452s-.674.15-1.328.452l-.596.274c-2.303 1.06-3.455 1.59-4.22 1.01c-.767-.582-.64-1.89-.387-4.507l.066-.676c.072-.744.108-1.116 0-1.46c-.106-.345-.345-.624-.821-1.18l-.434-.508c-1.677-1.96-2.515-2.941-2.223-3.882S3.58 8.328 6.04 7.772l.636-.144c.699-.158 1.048-.237 1.329-.45s.46-.536.82-1.182z"
              />
            </svg>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
              role="img"
              width="1em"
              height="1em"
              viewBox="0 0 24 24"
              className="service-arrow"
            >
              <path
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="1.5"
                d="M6 18L18 6m0 0H9m9 0v9"
              />
            </svg>
            <h3 className="service-name">THE ROYAL</h3>
            <p className="service-desc">
              Our complete package: signature cut, hot shave, beard grooming,
              facial treatment, and scalp massage.
            </p>
            <div className="service-price-row">
              <span className="service-price">$95</span>
              <span className="service-duration">90 Min</span>
            </div>
          </div>

          <div className="service-card reveal">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
              role="img"
              width="1em"
              height="1em"
              viewBox="0 0 24 24"
              className="service-icon"
            >
              <path
                fill="currentColor"
                fillRule="evenodd"
                d="M10.847 21.934C5.867 21.362 2 17.133 2 12C2 6.477 6.477 2 12 2s10 4.477 10 10c0 5.157-3.283 4.733-6.086 4.37c-1.618-.209-3.075-.397-3.652.518c-.395.626.032 1.406.555 1.929a1.673 1.673 0 0 1 0 2.366c-.523.523-1.235.836-1.97.751M11.085 7a1.5 1.5 0 1 1-3 0a1.5 1.5 0 0 1 3 0M6.5 13a1.5 1.5 0 1 0 0-3a1.5 1.5 0 0 0 0 3m11 0a1.5 1.5 0 1 0 0-3a1.5 1.5 0 0 0 0 3m-3-4.5a1.5 1.5 0 1 0 0-3a1.5 1.5 0 0 0 0 3"
                clipRule="evenodd"
              />
            </svg>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
              role="img"
              width="1em"
              height="1em"
              viewBox="0 0 24 24"
              className="service-arrow"
            >
              <path
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="1.5"
                d="M6 18L18 6m0 0H9m9 0v9"
              />
            </svg>
            <h3 className="service-name">HAIR DESIGN</h3>
            <p className="service-desc">
              Creative fades, patterns, and artistic designs crafted by our most
              skilled stylists.
            </p>
            <div className="service-price-row">
              <span className="service-price">$60</span>
              <span className="service-duration">60 Min</span>
            </div>
          </div>

          <div className="service-card reveal reveal-delay-1">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
              role="img"
              width="1em"
              height="1em"
              viewBox="0 0 24 24"
              className="service-icon"
            >
              <path
                fill="currentColor"
                fillRule="evenodd"
                d="M11.612 22C6.855 22 3 18.057 3 13.193v-.265C3 8.317 5.729 4.163 9.903 2.421a5.43 5.43 0 0 1 4.194 0C18.272 4.163 21 8.317 21 12.928v.265C21 18.057 17.145 22 12.389 22zm.454-16.039a.75.75 0 0 1-.366.996c-1.545.715-2.793 2.168-3.37 3.993a.75.75 0 1 1-1.43-.453c.692-2.186 2.206-3.993 4.17-4.901a.75.75 0 0 1 .996.365"
                clipRule="evenodd"
              />
            </svg>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
              role="img"
              width="1em"
              height="1em"
              viewBox="0 0 24 24"
              className="service-arrow"
            >
              <path
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="1.5"
                d="M6 18L18 6m0 0H9m9 0v9"
              />
            </svg>
            <h3 className="service-name">SCALP TREATMENT</h3>
            <p className="service-desc">
              Deep cleansing scalp therapy with exfoliation, essential oils, and
              a relaxing pressure-point massage.
            </p>
            <div className="service-price-row">
              <span className="service-price">$40</span>
              <span className="service-duration">35 Min</span>
            </div>
          </div>

          <div className="service-card reveal reveal-delay-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
              role="img"
              width="1em"
              height="1em"
              viewBox="0 0 24 24"
              className="service-icon"
            >
              <path
                fill="currentColor"
                d="M3.845 3.845a2.883 2.883 0 0 0 0 4.077L5.432 9.51l.038-.04l4-4l.04-.038l-1.588-1.587a2.883 2.883 0 0 0-4.077 0m6.723 2.645l-.038.04l-4 4l-.04.038l9.588 9.588a2.884 2.884 0 0 0 4.078-4.078zM16.1 2.307a.483.483 0 0 1 .9 0l.43 1.095a.48.48 0 0 0 .272.274l1.091.432a.486.486 0 0 1 0 .903l-1.09.432a.5.5 0 0 0-.273.273L17 6.81a.483.483 0 0 1-.9 0l-.43-1.095a.5.5 0 0 0-.273-.273l-1.09-.432a.486.486 0 0 1 0-.903l1.09-.432a.5.5 0 0 0 .273-.274zm3.867 6.823a.483.483 0 0 1 .9 0l.156.399c.05.125.148.224.273.273l.398.158a.486.486 0 0 1 0 .902l-.398.158a.5.5 0 0 0-.273.273l-.156.4a.483.483 0 0 1-.9 0l-.157-.4a.5.5 0 0 0-.272-.273l-.398-.158a.486.486 0 0 1 0-.902l.398-.158a.5.5 0 0 0 .272-.273zM5.133 15.307a.483.483 0 0 1 .9 0l.157.4a.48.48 0 0 0 .272.273l.398.157a.486.486 0 0 1 0 .903l-.398.158a.48.48 0 0 0-.272.273l-.157.4a.483.483 0 0 1-.9 0l-.157-.4a.48.48 0 0 0-.272-.273l-.398-.158a.486.486 0 0 1 0-.903l.398-.157a.48.48 0 0 0 .272-.274z"
              />
            </svg>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
              role="img"
              width="1em"
              height="1em"
              viewBox="0 0 24 24"
              className="service-arrow"
            >
              <path
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="1.5"
                d="M6 18L18 6m0 0H9m9 0v9"
              />
            </svg>
            <h3 className="service-name">GREY BLENDING</h3>
            <p className="service-desc">
              Natural-looking grey camouflage using premium products for a
              refreshed, youthful appearance.
            </p>
            <div className="service-price-row">
              <span className="service-price">$50</span>
              <span className="service-duration">40 Min</span>
            </div>
          </div>

          <div className="service-card reveal reveal-delay-3">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
              role="img"
              width="1em"
              height="1em"
              viewBox="0 0 24 24"
              className="service-icon"
            >
              <g fill="currentColor" fillRule="evenodd" clipRule="evenodd">
                <path d="M10.801 2.57a.71.71 0 0 1-.555.838a8.78 8.78 0 0 0-6.838 6.838a.71.71 0 1 1-1.394-.283a10.2 10.2 0 0 1 7.949-7.949a.71.71 0 0 1 .838.556M2.57 13.199a.71.71 0 0 1 .838.555a8.78 8.78 0 0 0 6.838 6.838a.71.71 0 1 1-.283 1.394a10.2 10.2 0 0 1-7.948-7.949a.71.71 0 0 1 .555-.838M13.199 2.57a.71.71 0 0 1 .838-.556a10.2 10.2 0 0 1 7.949 7.949a.711.711 0 0 1-1.394.283a8.78 8.78 0 0 0-6.838-6.838a.71.71 0 0 1-.555-.838m8.231 10.629a.71.71 0 0 1 .556.838a10.2 10.2 0 0 1-7.949 7.949a.711.711 0 0 1-.283-1.394a8.78 8.78 0 0 0 6.838-6.838a.71.71 0 0 1 .838-.555" />
                <path d="M12 19.583a7.583 7.583 0 1 0 0-15.166a7.583 7.583 0 0 0 0 15.166m-3.06-5.044a.71.71 0 0 1 .995-.148c.59.437 1.3.69 2.065.69a3.45 3.45 0 0 0 2.065-.69a.71.71 0 1 1 .846 1.142a4.87 4.87 0 0 1-2.911.97a4.87 4.87 0 0 1-2.911-.97a.71.71 0 0 1-.148-.994m6.377-4.139c0 .688-.37 1.245-.829 1.245s-.83-.557-.83-1.245c0-.687.372-1.244.83-1.244s.83.557.83 1.244m-5.805 1.245c.458 0 .83-.557.83-1.245c0-.687-.372-1.244-.83-1.244s-.83.557-.83 1.244c0 .688.372 1.245.83 1.245" />
              </g>
            </svg>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
              role="img"
              width="1em"
              height="1em"
              viewBox="0 0 24 24"
              className="service-arrow"
            >
              <path
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="1.5"
                d="M6 18L18 6m0 0H9m9 0v9"
              />
            </svg>
            <h3 className="service-name">FACIAL GROOMING</h3>
            <p className="service-desc">
              Complete facial care including cleansing, exfoliation, mask, and
              moisturizing for healthy skin.
            </p>
            <div className="service-price-row">
              <span className="service-price">$45</span>
              <span className="service-duration">40 Min</span>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="gallery" id="gallery">
        <div className="gallery-header">
          <div
            className="section-tag reveal"
            style={{ justifyContent: "center" }}
          >
            <span className="section-tag-line" />
            <span className="section-tag-text">Our Work</span>
            <span className="section-tag-line" />
          </div>
          <h2 className="section-title reveal reveal-delay-1">
            THE <span className="italic">Craft</span> IN DETAIL
          </h2>
        </div>

        <div className="gallery-grid">
          <div className="gallery-item reveal">
            <img
              src="https://images.unsplash.com/photo-1622286342621-4bd786c2447c?w=700&q=85&auto=format&fit=crop"
              alt="Classic fade haircut"
            />
            <div className="gallery-overlay">
              <span className="gallery-overlay-text">PRECISION FADE</span>
            </div>
          </div>
          <div className="gallery-item reveal reveal-delay-1">
            <img
              src="https://images.unsplash.com/photo-1605497788044-5a32c7078486?w=700&q=85&auto=format&fit=crop"
              alt="Beard grooming"
            />
            <div className="gallery-overlay">
              <span className="gallery-overlay-text">BEARD ARTISTRY</span>
            </div>
          </div>
          <div className="gallery-item reveal reveal-delay-2">
            <img
              src="https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?w=700&q=85&auto=format&fit=crop"
              alt="Hot towel shave"
            />
            <div className="gallery-overlay">
              <span className="gallery-overlay-text">HOT TOWEL RITUAL</span>
            </div>
          </div>
          <div className="gallery-item reveal reveal-delay-1">
            <img
              src="https://images.unsplash.com/photo-1633681926022-84c23e8cb2d6?w=900&q=85&auto=format&fit=crop"
              alt="Barbershop atmosphere"
            />
            <div className="gallery-overlay">
              <span className="gallery-overlay-text">THE EXPERIENCE</span>
            </div>
          </div>
          <div className="gallery-item reveal reveal-delay-2">
            <img
              src="https://images.unsplash.com/photo-1493256338651-d82f7acb2b38?w=900&q=85&auto=format&fit=crop"
              alt="Styling details"
            />
            <div className="gallery-overlay">
              <span className="gallery-overlay-text">FINISHING TOUCHES</span>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="team hidden" id="team">
        <div className="team-header">
          <div>
            <div className="section-tag reveal">
              <span className="section-tag-line" />
              <span className="section-tag-text">The Team</span>
            </div>
            <h2 className="section-title reveal reveal-delay-1">
              MEET OUR <span className="italic">Master</span>
              <br />
              BARBERS
            </h2>
          </div>
        </div>

        <div className="team-grid">
          <div className="team-card reveal">
            <div className="team-card-img">
              <img
                src="https://images.unsplash.com/photo-1557862921-37829c790f19?w=800&q=80"
                alt="James Rivera"
                className="object-cover bg-center"
              />
            </div>
            <div className="team-card-info">
              <div>
                <div className="team-card-name">JAMES RIVERA</div>
                <div className="team-card-role">Founder &amp; Head Barber</div>
              </div>
              <div className="team-card-socials">
                <a href="#">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    aria-hidden="true"
                    role="img"
                    width="1em"
                    height="1em"
                    viewBox="0 0 24 24"
                  >
                    <defs>
                      <mask id="chat-james">
                        <g fill="none">
                          <path
                            fill="#fff"
                            d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2S2 6.477 2 12c0 1.6.376 3.112 1.043 4.453c.178.356.237.763.134 1.148l-.595 2.226a1.3 1.3 0 0 0 1.591 1.592l2.226-.596a1.63 1.63 0 0 1 1.149.133A9.96 9.96 0 0 0 12 22"
                          />
                          <path
                            fill="#000"
                            d="M15 12a1 1 0 1 0 2 0a1 1 0 0 0-2 0m-4 0a1 1 0 1 0 2 0a1 1 0 0 0-2 0m-4 0a1 1 0 1 0 2 0a1 1 0 0 0-2 0"
                          />
                        </g>
                      </mask>
                    </defs>
                    <path
                      fill="currentColor"
                      d="M0 0h24v24H0z"
                      mask="url(#chat-james)"
                    />
                  </svg>
                </a>
              </div>
            </div>
          </div>

          <div className="team-card reveal reveal-delay-1">
            <div className="team-card-img">
              <img
                src="https://images.unsplash.com/photo-1597116648852-75764ecaf6f5?w=800&q=80"
                alt="Marcus Chen"
                className="object-cover bg-center"
              />
            </div>
            <div className="team-card-info">
              <div>
                <div className="team-card-name">MARCUS CHEN</div>
                <div className="team-card-role">Senior Stylist</div>
              </div>
              <div className="team-card-socials">
                <a href="#">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    aria-hidden="true"
                    role="img"
                    width="1em"
                    height="1em"
                    viewBox="0 0 24 24"
                  >
                    <defs>
                      <mask id="chat-marcus">
                        <g fill="none">
                          <path
                            fill="#fff"
                            d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2S2 6.477 2 12c0 1.6.376 3.112 1.043 4.453c.178.356.237.763.134 1.148l-.595 2.226a1.3 1.3 0 0 0 1.591 1.592l2.226-.596a1.63 1.63 0 0 1 1.149.133A9.96 9.96 0 0 0 12 22"
                          />
                          <path
                            fill="#000"
                            d="M15 12a1 1 0 1 0 2 0a1 1 0 0 0-2 0m-4 0a1 1 0 1 0 2 0a1 1 0 0 0-2 0m-4 0a1 1 0 1 0 2 0a1 1 0 0 0-2 0"
                          />
                        </g>
                      </mask>
                    </defs>
                    <path
                      fill="currentColor"
                      d="M0 0h24v24H0z"
                      mask="url(#chat-marcus)"
                    />
                  </svg>
                </a>
              </div>
            </div>
          </div>

          <div className="team-card reveal reveal-delay-2">
            <div className="team-card-img">
              <img
                src="https://images.unsplash.com/photo-1600180758890-6b94519a8ba6?w=800&q=80"
                alt="David Okafor"
                className="object-cover bg-center"
              />
            </div>
            <div className="team-card-info">
              <div>
                <div className="team-card-name">DAVID OKAFOR</div>
                <div className="team-card-role">Beard Specialist</div>
              </div>
              <div className="team-card-socials">
                <a href="#">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    aria-hidden="true"
                    role="img"
                    width="1em"
                    height="1em"
                    viewBox="0 0 24 24"
                  >
                    <defs>
                      <mask id="chat-david">
                        <g fill="none">
                          <path
                            fill="#fff"
                            d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2S2 6.477 2 12c0 1.6.376 3.112 1.043 4.453c.178.356.237.763.134 1.148l-.595 2.226a1.3 1.3 0 0 0 1.591 1.592l2.226-.596a1.63 1.63 0 0 1 1.149.133A9.96 9.96 0 0 0 12 22"
                          />
                          <path
                            fill="#000"
                            d="M15 12a1 1 0 1 0 2 0a1 1 0 0 0-2 0m-4 0a1 1 0 1 0 2 0a1 1 0 0 0-2 0m-4 0a1 1 0 1 0 2 0a1 1 0 0 0-2 0"
                          />
                        </g>
                      </mask>
                    </defs>
                    <path
                      fill="currentColor"
                      d="M0 0h24v24H0z"
                      mask="url(#chat-david)"
                    />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="testimonials" id="testimonials">
        <div className="testimonial-bg-text">REVIEWS</div>

        <div className="testimonials-header">
          <div
            className="section-tag reveal"
            style={{ justifyContent: "center" }}
          >
            <span className="section-tag-line" />
            <span className="section-tag-text">Testimonials</span>
            <span className="section-tag-line" />
          </div>
          <h2 className="section-title reveal reveal-delay-1">
            WHAT OUR <span className="italic">Clients</span> SAY
          </h2>
        </div>

        <div className="testimonial-slider">
          <div className="testimonial-item">
            <div className="testimonial-stars">
              {Array.from({ length: 5 }).map((_, i) => (
                <svg
                  key={i}
                  xmlns="http://www.w3.org/2000/svg"
                  aria-hidden="true"
                  role="img"
                  width="1em"
                  height="1em"
                  viewBox="0 0 24 24"
                >
                  <path
                    fill="currentColor"
                    d="M9.153 5.408C10.42 3.136 11.053 2 12 2s1.58 1.136 2.847 3.408l.328.588c.36.646.54.969.82 1.182s.63.292 1.33.45l.636.144c2.46.557 3.689.835 3.982 1.776c.292.94-.546 1.921-2.223 3.882l-.434.507c-.476.557-.715.836-.822 1.18c-.107.345-.071.717.001 1.46l.066.677c.253 2.617.38 3.925-.386 4.506s-1.918.051-4.22-1.009l-.597-.274c-.654-.302-.981-.452-1.328-.452s-.674.15-1.328.452l-.596.274c-2.303 1.06-3.455 1.59-4.22 1.01c-.767-.582-.64-1.89-.387-4.507l.066-.676c.072-.744.108-1.116 0-1.46c-.106-.345-.345-.624-.821-1.18l-.434-.508c-1.677-1.96-2.515-2.941-2.223-3.882S3.58 8.328 6.04 7.772l.636-.144c.699-.158 1.048-.237 1.329-.45s.46-.536.82-1.182z"
                  />
                </svg>
              ))}
            </div>
            <p className="testimonial-quote">
              &quot;Razor &amp; Co. is not just a barbershop — it&apos;s an
              experience. From the moment you walk in, you feel the attention
              to detail. James and his team are true artists. I wouldn&apos;t
              trust anyone else with my hair.&quot;
            </p>
            <div className="testimonial-author-name">MICHAEL THORNTON</div>
            <div className="testimonial-author-title">Client since 2019</div>
          </div>

          <div className="testimonial-item">
            <div className="testimonial-stars">
              {Array.from({ length: 5 }).map((_, i) => (
                <svg
                  key={i}
                  xmlns="http://www.w3.org/2000/svg"
                  aria-hidden="true"
                  role="img"
                  width="1em"
                  height="1em"
                  viewBox="0 0 24 24"
                >
                  <path
                    fill="currentColor"
                    d="M9.153 5.408C10.42 3.136 11.053 2 12 2s1.58 1.136 2.847 3.408l.328.588c.36.646.54.969.82 1.182s.63.292 1.33.45l.636.144c2.46.557 3.689.835 3.982 1.776c.292.94-.546 1.921-2.223 3.882l-.434.507c-.476.557-.715.836-.822 1.18c-.107.345-.071.717.001 1.46l.066.677c.253 2.617.38 3.925-.386 4.506s-1.918.051-4.22-1.009l-.597-.274c-.654-.302-.981-.452-1.328-.452s-.674.15-1.328.452l-.596.274c-2.303 1.06-3.455 1.59-4.22 1.01c-.767-.582-.64-1.89-.387-4.507l.066-.676c.072-.744.108-1.116 0-1.46c-.106-.345-.345-.624-.821-1.18l-.434-.508c-1.677-1.96-2.515-2.941-2.223-3.882S3.58 8.328 6.04 7.772l.636-.144c.699-.158 1.048-.237 1.329-.45s.46-.536.82-1.182z"
                  />
                </svg>
              ))}
            </div>
            <p className="testimonial-quote">
              &quot;The Royal package is worth every penny. Hot towel shave, the
              perfect fade, and a scalp massage that melts your stress away.
              This is what premium grooming should feel like. Best barbershop
              in the city, hands down.&quot;
            </p>
            <div className="testimonial-author-name">ROBERT CASTELLANO</div>
            <div className="testimonial-author-title">Client since 2020</div>
          </div>

          <div className="testimonial-item">
            <div className="testimonial-stars">
              {Array.from({ length: 5 }).map((_, i) => (
                <svg
                  key={i}
                  xmlns="http://www.w3.org/2000/svg"
                  aria-hidden="true"
                  role="img"
                  width="1em"
                  height="1em"
                  viewBox="0 0 24 24"
                >
                  <path
                    fill="currentColor"
                    d="M9.153 5.408C10.42 3.136 11.053 2 12 2s1.58 1.136 2.847 3.408l.328.588c.36.646.54.969.82 1.182s.63.292 1.33.45l.636.144c2.46.557 3.689.835 3.982 1.776c.292.94-.546 1.921-2.223 3.882l-.434.507c-.476.557-.715.836-.822 1.18c-.107.345-.071.717.001 1.46l.066.677c.253 2.617.38 3.925-.386 4.506s-1.918.051-4.22-1.009l-.597-.274c-.654-.302-.981-.452-1.328-.452s-.674.15-1.328.452l-.596.274c-2.303 1.06-3.455 1.59-4.22 1.01c-.767-.582-.64-1.89-.387-4.507l.066-.676c.072-.744.108-1.116 0-1.46c-.106-.345-.345-.624-.821-1.18l-.434-.508c-1.677-1.96-2.515-2.941-2.223-3.882S3.58 8.328 6.04 7.772l.636-.144c.699-.158 1.048-.237 1.329-.45s.46-.536.82-1.182z"
                  />
                </svg>
              ))}
            </div>
            <p className="testimonial-quote">
              &quot;I&apos;ve been to barbershops all over the world, and Razor
              &amp; Co. ranks among the very best. The atmosphere, the skill,
              the conversation — everything comes together perfectly. Marcus
              shaped my beard into a work of art.&quot;
            </p>
            <div className="testimonial-author-name">ALEXANDER HUNT</div>
            <div className="testimonial-author-title">Client since 2021</div>
          </div>
        </div>

        <div className="testimonial-nav" id="testimonialNav">
          <button className="testimonial-dot" data-index="0" />
          <button className="testimonial-dot" data-index="1" />
          <button className="testimonial-dot" data-index="2" />
        </div>
      </section>

      {/* Booking Section */}
      <section className="booking" id="booking">
        <div className="booking-inner">
          <div className="booking-image reveal">
            <img
              src="https://images.unsplash.com/photo-1633681926022-84c23e8cb2d6?w=800&q=85&auto=format&fit=crop"
              alt="Barbershop chair"
            />
          </div>

          <div className="booking-form-wrapper">
            <div className="section-tag reveal">
              <span className="section-tag-line" />
              <span className="section-tag-text">Reserve Your Spot</span>
            </div>
            <h2 className="section-title reveal reveal-delay-1">
              BOOK YOUR <span className="italic">Visit</span>
            </h2>

            <form
              className="booking-form reveal reveal-delay-2"
              onSubmit={(e) => e.preventDefault()}
            >
              <div className="form-row">
                <div className="form-group">
                  <label>First Name</label>
                  <input type="text" placeholder="John" />
                </div>
                <div className="form-group">
                  <label>Last Name</label>
                  <input type="text" placeholder="Doe" />
                </div>
              </div>

              <div className="form-row">
                <div className="form-group">
                  <label>Email</label>
                  <input type="email" placeholder="john@email.com" />
                </div>
                <div className="form-group">
                  <label>Phone</label>
                  <input type="tel" placeholder="+1 (555) 000-0000" />
                </div>
              </div>

              <div className="form-group">
                <label>Select Service</label>
                <select>
                  <option value="">Choose a service...</option>
                  <option value="signature">Signature Cut — $45</option>
                  <option value="shave">Hot Towel Shave — $55</option>
                  <option value="beard">Beard Sculpting — $35</option>
                  <option value="royal">The Royal — $95</option>
                  <option value="design">Hair Design — $60</option>
                  <option value="scalp">Scalp Treatment — $40</option>
                  <option value="grey">Grey Blending — $50</option>
                  <option value="facial">Facial Grooming — $45</option>
                </select>
              </div>

              <div className="form-group">
                <label>Preferred Barber</label>
                <select>
                  <option value="">No preference</option>
                  <option value="james">James Rivera</option>
                  <option value="marcus">Marcus Chen</option>
                  <option value="david">David Okafor</option>
                </select>
              </div>

              <div className="form-row">
                <div className="form-group">
                  <label>Date</label>
                  <input type="date" />
                </div>
                <div className="form-group">
                  <label>Time</label>
                  <input type="time" />
                </div>
              </div>

              <button type="submit" className="btn-submit">
                <span>Confirm Booking</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  aria-hidden="true"
                  role="img"
                  width="1em"
                  height="1em"
                  viewBox="0 0 24 24"
                >
                  <path
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="1.5"
                    d="M4 12h16m0 0l-6-6m6 6l-6 6"
                  />
                </svg>
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Instagram Section */}
      <section className="instagram">
        <div className="instagram-header">
          <div
            className="section-tag reveal"
            style={{ justifyContent: "center" }}
          >
            <span className="section-tag-line" />
            <span className="section-tag-text">Follow Us</span>
            <span className="section-tag-line" />
          </div>
          <h2 className="section-title reveal reveal-delay-1">
            ON <span className="italic">Instagram</span>
          </h2>
          <a
            href="#"
            className="instagram-handle reveal reveal-delay-2"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
              role="img"
              width="1em"
              height="1em"
              viewBox="0 0 24 24"
            >
              <path
                fill="currentColor"
                fillRule="evenodd"
                d="M9.778 21h4.444c3.121 0 4.682 0 5.803-.735a4.4 4.4 0 0 0 1.226-1.204c.749-1.1.749-2.633.749-5.697s0-4.597-.749-5.697a4.4 4.4 0 0 0-1.226-1.204c-.72-.473-1.622-.642-3.003-.702c-.659 0-1.226-.49-1.355-1.125A2.064 2.064 0 0 0 13.634 3h-3.268c-.988 0-1.839.685-2.033 1.636c-.129.635-.696 1.125-1.355 1.125c-1.38.06-2.282.23-3.003.702A4.4 4.4 0 0 0 2.75 7.667C2 8.767 2 10.299 2 13.364s0 4.596.749 5.697c.324.476.74.885 1.226 1.204C5.096 21 6.657 21 9.778 21M12 9.273c-2.301 0-4.167 1.831-4.167 4.09S9.7 17.456 12 17.456s4.167-1.832 4.167-4.091S14.3 9.273 12 9.273m0 1.636c-1.38 0-2.5 1.099-2.5 2.455c0 1.355 1.12 2.454 2.5 2.454s2.5-1.099 2.5-2.454s-1.12-2.455-2.5-2.455m4.722-.818c0-.452.373-.818.834-.818h1.11c.46 0 .834.366.834.818a.826.826 0 0 1-.833.818h-1.111a.826.826 0 0 1-.834-.818"
                clipRule="evenodd"
              />
            </svg>
            @Razorandco
          </a>
        </div>

        <div className="instagram-grid">
          <div className="instagram-item">
            <img
              src="https://images.unsplash.com/photo-1621605815971-fbc98d665033?w=400&q=80&auto=format&fit=crop"
              alt="Instagram post"
              loading="lazy"
            />
          </div>
          <div className="instagram-item">
            <img
              src="https://images.unsplash.com/photo-1622286342621-4bd786c2447c?w=400&q=80&auto=format&fit=crop"
              alt="Instagram post"
              loading="lazy"
            />
          </div>
          <div className="instagram-item">
            <img
              src="https://images.unsplash.com/photo-1599351431202-1e0f0137899a?w=400&q=80&auto=format&fit=crop"
              alt="Instagram post"
              loading="lazy"
            />
          </div>
          <div className="instagram-item">
            <img
              src="https://images.unsplash.com/photo-1503951914875-452162b0f3f1?w=400&q=80&auto=format&fit=crop"
              alt="Instagram post"
              loading="lazy"
            />
          </div>
          <div className="instagram-item">
            <img
              src="https://images.unsplash.com/photo-1605497788044-5a32c7078486?w=400&q=80&auto=format&fit=crop"
              alt="Instagram post"
              loading="lazy"
            />
          </div>
          <div className="instagram-item">
            <img
              src="https://images.unsplash.com/photo-1493256338651-d82f7acb2b38?w=400&q=80&auto=format&fit=crop"
              alt="Instagram post"
              loading="lazy"
            />
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="footer-top">
          <div>
            <div className="footer-brand-name">
              Razor <span className="gold">&amp;</span> CO.
            </div>
            <p className="footer-brand-desc">
              Where tradition meets modern craft. Premium grooming experiences
              for the distinguished gentleman since 2018.
            </p>
            <div className="footer-socials">
              <a href="#">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  aria-hidden="true"
                  role="img"
                  width="1em"
                  height="1em"
                  viewBox="0 0 24 24"
                >
                  <path
                    fill="currentColor"
                    fillRule="evenodd"
                    d="M9.778 21h4.444c3.121 0 4.682 0 5.803-.735a4.4 4.4 0 0 0 1.226-1.204c.749-1.1.749-2.633.749-5.697s0-4.597-.749-5.697a4.4 4.4 0 0 0-1.226-1.204c-.72-.473-1.622-.642-3.003-.702c-.659 0-1.226-.49-1.355-1.125A2.064 2.064 0 0 0 13.634 3h-3.268c-.988 0-1.839.685-2.033 1.636c-.129.635-.696 1.125-1.355 1.125c-1.38.06-2.282.23-3.003.702A4.4 4.4 0 0 0 2.75 7.667C2 8.767 2 10.299 2 13.364s0 4.596.749 5.697c.324.476.74.885 1.226 1.204C5.096 21 6.657 21 9.778 21M12 9.273c-2.301 0-4.167 1.831-4.167 4.09S9.7 17.456 12 17.456s4.167-1.832 4.167-4.091S14.3 9.273 12 9.273m0 1.636c-1.38 0-2.5 1.099-2.5 2.455c0 1.355 1.12 2.454 2.5 2.454s2.5-1.099 2.5-2.454s-1.12-2.455-2.5-2.455m4.722-.818c0-.452.373-.818.834-.818h1.11c.46 0 .834.366.834.818a.826.826 0 0 1-.833.818h-1.111a.826.826 0 0 1-.834-.818"
                    clipRule="evenodd"
                  />
                </svg>
              </a>
              <a href="#">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  aria-hidden="true"
                  role="img"
                  width="1em"
                  height="1em"
                  viewBox="0 0 24 24"
                >
                  <defs>
                    <mask id="chat-footer">
                      <g fill="none">
                        <path
                          fill="#fff"
                          d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2S2 6.477 2 12c0 1.6.376 3.112 1.043 4.453c.178.356.237.763.134 1.148l-.595 2.226a1.3 1.3 0 0 0 1.591 1.592l2.226-.596a1.63 1.63 0 0 1 1.149.133A9.96 9.96 0 0 0 12 22"
                        />
                        <path
                          fill="#000"
                          d="M15 12a1 1 0 1 0 2 0a1 1 0 0 0-2 0m-4 0a1 1 0 1 0 2 0a1 1 0 0 0-2 0m-4 0a1 1 0 1 0 2 0a1 1 0 0 0-2 0"
                        />
                      </g>
                    </mask>
                  </defs>
                  <path
                    fill="currentColor"
                    d="M0 0h24v24H0z"
                    mask="url(#chat-footer)"
                  />
                </svg>
              </a>
              <a href="#">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  aria-hidden="true"
                  role="img"
                  width="1em"
                  height="1em"
                  viewBox="0 0 24 24"
                >
                  <path
                    fill="currentColor"
                    fillRule="evenodd"
                    d="M13.803 5.333c0-1.84 1.5-3.333 3.348-3.333A3.34 3.34 0 0 1 20.5 5.333c0 1.841-1.5 3.334-3.349 3.334a3.35 3.35 0 0 1-2.384-.994l-4.635 3.156a3.34 3.34 0 0 1-.182 1.917l5.082 3.34a3.35 3.35 0 0 1 2.12-.753a3.34 3.34 0 0 1 3.348 3.334C20.5 20.507 19 22 17.151 22a3.34 3.34 0 0 1-3.348-3.333a3.3 3.3 0 0 1 .289-1.356L9.05 14a3.35 3.35 0 0 1-2.202.821A3.34 3.34 0 0 1 3.5 11.487a3.34 3.34 0 0 1 3.348-3.333c1.064 0 2.01.493 2.623 1.261l4.493-3.059a3.3 3.3 0 0 1-.161-1.023"
                    clipRule="evenodd"
                  />
                </svg>
              </a>
              <a href="#">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  aria-hidden="true"
                  role="img"
                  width="1em"
                  height="1em"
                  viewBox="0 0 24 24"
                >
                  <path
                    fill="currentColor"
                    d="M21.409 9.353a2.998 2.998 0 0 1 0 5.294L8.597 21.614C6.534 22.737 4 21.277 4 18.968V5.033c0-2.31 2.534-3.769 4.597-2.648z"
                  />
                </svg>
              </a>
            </div>
          </div>

          <div className="footer-col">
            <div className="footer-col-title">QUICK LINKS</div>
            <ul>
              <li>
                <a href="#about">Our Story</a>
              </li>
              <li>
                <a href="#services">Services</a>
              </li>
              <li>
                <a href="#gallery">Gallery</a>
              </li>
              <li>
                <a href="#team">Our Barbers</a>
              </li>
              <li>
                <a href="#booking">Book Online</a>
              </li>
            </ul>
          </div>

          <div className="footer-col">
            <div className="footer-col-title">SERVICES</div>
            <ul>
              <li>
                <a href="#services">Signature Cut</a>
              </li>
              <li>
                <a href="#services">Hot Towel Shave</a>
              </li>
              <li>
                <a href="#services">Beard Sculpting</a>
              </li>
              <li>
                <a href="#services">The Royal</a>
              </li>
              <li>
                <a href="#services">Hair Design</a>
              </li>
            </ul>
          </div>

          <div className="footer-col">
            <div className="footer-col-title">VISIT US</div>
            <div className="footer-contact-item">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
                role="img"
                width="1em"
                height="1em"
                viewBox="0 0 24 24"
              >
                <path
                  fill="currentColor"
                  fillRule="evenodd"
                  d="M12 2c-4.418 0-8 4.003-8 8.5c0 4.462 2.553 9.312 6.537 11.174a3.45 3.45 0 0 0 2.926 0C17.447 19.812 20 14.962 20 10.5C20 6.003 16.418 2 12 2m0 10a2 2 0 1 0 0-4a2 2 0 0 0 0 4"
                  clipRule="evenodd"
                />
              </svg>
              <p>
                742 Barber Lane, Suite 101
                <br />
                Downtown District, NY 10012
              </p>
            </div>
            <div className="footer-contact-item">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
                role="img"
                width="1em"
                height="1em"
                viewBox="0 0 24 24"
              >
                <path
                  fill="currentColor"
                  d="m16.556 12.906l-.455.453s-1.083 1.076-4.038-1.862s-1.872-4.014-1.872-4.014l.286-.286c.707-.702.774-1.83.157-2.654L9.374 2.86C8.61 1.84 7.135 1.705 6.26 2.575l-1.57 1.56c-.433.432-.723.99-.688 1.61c.09 1.587.808 5 4.812 8.982c4.247 4.222 8.232 4.39 9.861 4.238c.516-.048.964-.31 1.325-.67l1.42-1.412c.96-.953.69-2.588-.538-3.255l-1.91-1.039c-.806-.437-1.787-.309-2.417.317"
                />
              </svg>
              <p>+1 (555) 234-5678</p>
            </div>
            <div className="footer-contact-item">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
                role="img"
                width="1em"
                height="1em"
                viewBox="0 0 24 24"
              >
                <defs>
                  <mask id="clock-footer">
                    <g fill="none">
                      <path fill="#fff" d="M22 12c0 5.523-4.477 10-10 10S2 17.523 2 12S6.477 2 12 2s10 4.477 10 10" />
                      <path
                        fill="#000"
                        fillRule="evenodd"
                        d="M12 7.25a.75.75 0 0 1 .75.75v3.69l2.28 2.28a.75.75 0 1 1-1.06 1.06l-2.5-2.5a.75.75 0 0 1-.22-.53V8a.75.75 0 0 1 .75-.75"
                        clipRule="evenodd"
                      />
                    </g>
                  </mask>
                </defs>
                <path
                  fill="currentColor"
                  d="M0 0h24v24H0z"
                  mask="url(#clock-footer)"
                />
              </svg>
              <p>
                Mon-Fri: 9AM - 8PM
                <br />
                Sat: 9AM - 6PM
                <br />
                Sun: 10AM - 4PM
              </p>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <p>2025 Razor &amp; CO. All rights reserved.</p>
          <div className="footer-bottom-links">
            <a href="#">Privacy Policy</a>
            <a href="#">Terms of Service</a>
          </div>
        </div>
      </footer>
    </div>
  );
}

