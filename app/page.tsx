import Link from 'next/link';
import WhatsAppIcon from '@/components/WhatsAppIcon';
import HeroSlider from '@/components/HeroSlider';
import styles from './page.module.css';

const features = [
  { icon: '🌾', title: 'Direct from Farms',    desc: 'We partner directly with farmers and artisans across Andhra Pradesh, Telangana, Punjab and Kerala.' },
  { icon: '🚚', title: 'Hyderabad Delivery',   desc: 'Fresh produce and pantry staples delivered to your doorstep every weekend.' },
  { icon: '✅', title: 'Quality Guaranteed',   desc: 'Every batch is hand-sorted and quality-checked before it leaves the farm.' },
  { icon: '💚', title: 'Fair Prices',          desc: 'Farmers earn more. You pay less. No middlemen, no markups, no compromises.' },
];

const categories = [
  {
    href: '/summer-specials',
    emoji: '🥭',
    title: 'Summer Specials',
    desc: 'Nine mango varieties from Andhra orchards — Banganapalli, Rumani, Rasalu and more. Seasonal and short-lived.',
    cta: 'Shop Mangoes',
    bg: 'linear-gradient(135deg, #3b0d0d 0%, #5c1a1a 100%)',
    accent: '#c8860a',
  },
  {
    href: '/special-products',
    emoji: '🧈',
    title: 'Premium Ghee',
    desc: 'Pure A2 Buffalo Ghee made using the traditional Bilona method. Hand-churned, never adulterated.',
    cta: 'Shop Ghee',
    bg: 'linear-gradient(135deg, #2a1500 0%, #4a2800 100%)',
    accent: '#c8860a',
  },
  {
    href: '/honey',
    emoji: '🍯',
    title: 'Raw Honey',
    desc: 'Multiflora raw honey and limited-edition Litchi honey — never heated, never filtered, straight from the hive.',
    cta: 'Shop Honey',
    bg: 'linear-gradient(135deg, #1e1200 0%, #3d2800 100%)',
    accent: '#e8a020',
  },
  {
    href: '/pickles',
    emoji: '🫙',
    title: 'Andhra Pickles',
    desc: 'Nine varieties — Allam, Gongura, Mulakai, Tomato, Mixed Veg, Gummadi Kaya, Mango, Magaya and Koru Pachadi.',
    cta: 'Shop Pickles',
    bg: 'linear-gradient(135deg, #1e0a00 0%, #400f00 100%)',
    accent: '#c8860a',
  },
  {
    href: '/juices',
    emoji: '🧃',
    title: 'Raw Juices',
    desc: 'Cold-pressed Mango Pulp and Black Grape Juice. No sugar, no additives, no preservatives. Freeze and enjoy for 20 days.',
    cta: 'Shop Juices',
    bg: 'linear-gradient(135deg, #001a0e 0%, #003320 100%)',
    accent: '#3a9e6f',
  },
];

export default function Home() {
  return (
    <div className="page-enter">

      {/* ── HERO SLIDER ── */}
      <HeroSlider />

      {/* ── PHILOSOPHY ── */}
      <section className={styles.philosophy}>
        <div className="section-eyebrow">Who We Are</div>
        <h2 className="section-title">Our Philosophy</h2>
        <div className="section-rule" />
        <p className={styles.philosophyText}>
          At Raasa, we believe the best food doesn&apos;t come from a factory — it comes straight
          from the earth. We partner directly with farmers, artisans, and forest communities
          across Andhra Pradesh, Telangana, Punjab, and Kerala so that you get food that&apos;s
          genuinely fresh, genuinely pure, and genuinely good for you.
        </p>
      </section>

      {/* ── FEATURE STRIP ── */}
      <section className={styles.features}>
        {features.map(f => (
          <div key={f.title} className={styles.featureTile}>
            <div className={styles.featureIcon}>{f.icon}</div>
            <h3 className={styles.featureTitle}>{f.title}</h3>
            <p className={styles.featureDesc}>{f.desc}</p>
          </div>
        ))}
      </section>

      {/* ── CATEGORIES ── */}
      <section className={styles.categories}>
        <div style={{ textAlign: 'center', marginBottom: '44px' }}>
          <div className="section-eyebrow">Explore Our Range</div>
          <h2 className="section-title" style={{ margin: '0 auto' }}>What We Offer</h2>
          <div className="section-rule" style={{ margin: '12px auto 0' }} />
        </div>
        <div className={styles.catGrid}>
          {categories.map(cat => (
            <Link key={cat.href} href={cat.href} className={styles.catCard} style={{ background: cat.bg }}>
              <div className={styles.catEmoji}>{cat.emoji}</div>
              <h3 className={styles.catTitle}>{cat.title}</h3>
              <p className={styles.catDesc}>{cat.desc}</p>
              <div className={styles.catCta} style={{ color: cat.accent, borderColor: `${cat.accent}55` }}>
                {cat.cta} →
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* ── CTA BANNER ── */}
      <section className={styles.ctaBanner}>
        <div className={styles.ctaBannerInner}>
          <div className="hero-eyebrow" style={{ textAlign: 'center' }}>Ready to Order?</div>
          <h2 className={styles.ctaBannerTitle}>Place your order via WhatsApp</h2>
          <p className={styles.ctaBannerSub}>
            Browse our catalogue, pick what you need, and message us directly.
            Fast, personal, reliable delivery every Saturday and Sunday.
          </p>
          <a
            href="https://wa.me/919849048999"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary"
            style={{ fontSize: '1rem', padding: '16px 40px' }}
          >
            <WhatsAppIcon /> &nbsp;WhatsApp Us Now
          </a>
        </div>
      </section>

    </div>
  );
}
