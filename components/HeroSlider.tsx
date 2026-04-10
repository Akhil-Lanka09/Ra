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
    cta: 'Shop Mangoes',
  },
  {
    href: '/pickles',
    src: '/hero_pickles_page.png',
    accent: '#c8860a',
    label: 'Andhra Pickles',
    cta: 'Shop Pickles',
  },
  {
    href: '/honey',
    src: '/hero_honey_page.png',
    accent: '#e8a020',
    label: 'Raw Honey',
    cta: 'Shop Honey',
  },
  {
    href: '/special-products',
    src: '/hero_ghee_page.png',
    accent: '#c8860a',
    label: 'Premium Ghee',
    cta: 'Shop Ghee',
  },
  {
    href: '/juices',
    src: '/hero_juices_page.png',
    accent: '#3a9e6f',
    label: 'Raw Juices',
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

      {/* CTA bottom-left */}
      <div className={`${styles.cta} ${visible ? styles.ctaVisible : styles.ctaHidden}`}>
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
