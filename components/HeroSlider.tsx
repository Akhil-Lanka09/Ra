'use client';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import styles from './HeroSlider.module.css';

const slides = [
  {
    href: '/summer-specials',
    src: '/hero_mango_page.png',
    accent: '#c8860a',
    eyebrow: 'Summer Specials',
    label: 'The Mango Festival',
    subtitle: 'Experience the authentic taste of Indian summers. 9 premium varieties of naturally ripened, farm-fresh mangoes directly from the best orchards.',
    cta: 'Shop Mangoes',
  },
  {
    href: '/pickles',
    src: '/hero_pickles_page.png',
    accent: '#c8860a',
    eyebrow: 'Handmade & Authentic',
    label: 'Andhra Pickles',
    subtitle: 'Made fresh in small batches using cold-pressed peanut oil, whole spices, zero preservatives. The real taste of Andhra on your table.',
    cta: 'Shop Pickles',
  },
  {
    href: '/honey',
    src: '/hero_honey_page.png',
    accent: '#e8a020',
    eyebrow: 'Pure · Raw · Unprocessed',
    label: 'Raasa Honey',
    subtitle: 'Real honey straight from the hive — never heated, never filtered, never adulterated. Two exquisite varieties, each with its own character.',
    cta: 'Shop Honey',
  },
  {
    href: '/special-products',
    src: '/hero_ghee_page.png',
    accent: '#c8860a',
    eyebrow: 'Pure & Traditional',
    label: 'Premium Ghee',
    subtitle: 'Hand-churned using the ancient Bilona method from A2 milk — nothing added, nothing removed. The way ghee has been made for centuries.',
    cta: 'Shop Ghee',
  },
  {
    href: '/juices',
    src: '/hero_juices_page.png',
    accent: '#3a9e6f',
    eyebrow: 'Cold-Pressed · Pure · Natural',
    label: 'Raw Juices',
    subtitle: 'Just fruit. Nothing else. No sugar, no preservatives, no additives — cold-pressed and frozen fresh to lock in every bit of flavour.',
    cta: 'Shop Juices',
  },
];

const INTERVAL = 3500;

export default function HeroSlider() {
  const [current, setCurrent] = useState(0);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const t = setInterval(() => {
      setVisible(false);
      setTimeout(() => {
        setCurrent(c => (c + 1) % slides.length);
        setVisible(true);
      }, 350);
    }, INTERVAL);
    return () => clearInterval(t);
  }, []);

  const goTo = (i: number) => {
    if (i === current) return;
    setVisible(false);
    setTimeout(() => { setCurrent(i); setVisible(true); }, 300);
  };

  const slide = slides[current];

  return (
    <div className={styles.slider}>
      {/* Image layer */}
      <div className={`${styles.imgWrap} ${visible ? styles.imgVisible : styles.imgHidden}`}>
        <Image
          src={slide.src}
          alt={slide.label}
          fill
          priority
          sizes="100vw"
          style={{ objectFit: 'cover', objectPosition: 'center' }}
        />
      </div>

      {/* Dark gradient overlay for text readability */}
      <div className={styles.overlay} />

      {/* Text content */}
      <div className={`${styles.textContent} ${visible ? styles.ctaVisible : styles.ctaHidden}`}>
        <div className={styles.eyebrow} style={{ color: slide.accent }}>{slide.eyebrow}</div>
        <h2 className={styles.slideTitle}>{slide.label}</h2>
        <p className={styles.slideSubtitle}>{slide.subtitle}</p>
        <Link href={slide.href} className={styles.ctaBtn} style={{ borderColor: slide.accent, color: slide.accent }}>
          {slide.cta} →
        </Link>
      </div>

      {/* Dot indicators */}
      <div className={styles.dots}>
        {slides.map((s, i) => (
          <button
            key={s.href}
            onClick={() => goTo(i)}
            className={`${styles.dot} ${i === current ? styles.dotActive : ''}`}
            style={i === current ? { background: slide.accent, borderColor: slide.accent } : {}}
            aria-label={`Go to ${s.label}`}
          />
        ))}
      </div>

      {/* Progress bar */}
      <div className={styles.progressBar}>
        <div key={`${current}-bar`} className={styles.progressFill} style={{ background: slide.accent }} />
      </div>
    </div>
  );
}
