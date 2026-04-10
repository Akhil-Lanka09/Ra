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
    label: 'Summer Specials',
    subtitle: 'Farm-fresh Andhra mangoes — naturally ripened, handpicked, delivered.',
    cta: 'Shop Mangoes',
  },
  {
    href: '/pickles',
    src: '/hero_pickles_page.png',
    accent: '#c8860a',
    label: 'Andhra Pickles',
    subtitle: 'Handmade with cold-pressed oil, whole spices & zero preservatives.',
    cta: 'Shop Pickles',
  },
  {
    href: '/honey',
    src: '/hero_honey_page.png',
    accent: '#e8a020',
    label: 'Raw Honey',
    subtitle: 'Pure, unfiltered & unprocessed — straight from the hive to your home.',
    cta: 'Shop Honey',
  },
  {
    href: '/special-products',
    src: '/hero_ghee_page.png',
    accent: '#c8860a',
    label: 'Premium Ghee',
    subtitle: 'Hand-churned A2 Bilona ghee — traditional, pure & unadulterated.',
    cta: 'Shop Ghee',
  },
  {
    href: '/juices',
    src: '/hero_juices_page.png',
    accent: '#3a9e6f',
    label: 'Raw Juices',
    subtitle: 'Cold-pressed. No sugar. No preservatives. Just pure fruit.',
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
        <div className={styles.eyebrow} style={{ color: slide.accent }}>Raasa Harvest</div>
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
