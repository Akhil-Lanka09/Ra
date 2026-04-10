import PantryCard from '@/components/PantryCard';
import { pantryProducts } from '@/data/pantry';
import WhatsAppIcon from '@/components/WhatsAppIcon';
import Link from 'next/link';
import styles from './page.module.css';

export const metadata = { title: 'Ghee — Raasa' };

const gheeFacts = [
  { icon: '🧈', label: 'Method', value: 'Traditional Bilona' },
  { icon: '🐄', label: 'Milk', value: 'A2 Gir Cow & Buffalo' },
  { icon: '🌿', label: 'Sourcing', value: 'Direct from farms' },
  { icon: '🚚', label: 'Delivery', value: 'Every Sat & Sun' },
];

export default function SpecialProductsPage() {
  const gheeProducts = pantryProducts.filter(p => p.category === 'ghee');

  return (
    <div className="page-enter">
      {/* Hero */}
      <div className={styles.hero} style={{ background: `linear-gradient(rgba(20,12,0,0.55), rgba(20,12,0,0.55)), url('/hero_ghee_page.png') center/cover no-repeat` }}>
        <div className="hero-deco">🧈</div>
        <div className="hero-rule" style={{ background: 'var(--saffron)' }} />
        <div className="hero-eyebrow">Pure & Traditional</div>
        <h1 className="hero-title">Premium Ghee</h1>
        <p className="hero-sub">
          Hand-churned using the ancient Bilona method from A2 milk — nothing added, nothing
          removed. The way ghee has been made for centuries.
        </p>
        <div className="hero-pill">
          <div className="hero-pill-line" />
          Bilona Method · A2 Milk · No Additives
        </div>
      </div>

      {/* Info strip */}
      <div className={styles.infoStrip}>
        {gheeFacts.map(f => (
          <div key={f.label} className={styles.infoItem}>
            <span className={styles.infoIcon}>{f.icon}</span>
            <div>
              <div className={styles.infoLabel}>{f.label}</div>
              <div className={styles.infoValue}>{f.value}</div>
            </div>
          </div>
        ))}
      </div>

      {/* Ghee Section */}
      <section className="page-section">
        <div className={styles.header}>
          <div className="section-eyebrow">Two Varieties</div>
          <h2 className="section-title">Our Ghee Range</h2>
          <div className="section-rule" style={{ background: 'var(--saffron)' }} />
          <p className={styles.headerNote}>
            Buffalo ghee for richness and depth. Cow ghee for lightness and everyday use.
            Both made using the Bilona method — hand-churned from farm-fresh curd.
          </p>
        </div>
        <div className={styles.productRow}>
          {gheeProducts.map(product => (
            <PantryCard key={product.id} product={product} />
          ))}
        </div>
      </section>

      {/* Honey cross-sell */}
      <section className={styles.crossSell}>
        <div className={styles.crossSellInner}>
          <span style={{ fontSize: '1.6rem' }}>🍯</span>
          <div>
            <strong>Looking for Honey?</strong> We&apos;ve got two raw varieties — Multiflora and
            limited-edition Litchi honey — on their own dedicated page.
          </div>
          <Link href="/honey" className="btn-primary" style={{ padding: '10px 22px', fontSize: '0.82rem', whiteSpace: 'nowrap' }}>
            Shop Honey →
          </Link>
        </div>
      </section>

      {/* Ordering note */}
      <div className={styles.orderNote}>
        <div className={styles.orderNoteInner}>
          <span style={{ fontSize: '1.4rem' }}>💬</span>
          <div>
            <strong>Bulk orders or gift packaging?</strong> WhatsApp us at{' '}
            <a href="https://wa.me/919849048999" target="_blank" rel="noopener noreferrer"
              style={{ color: 'var(--saffron)', fontWeight: 600 }}>
              <WhatsAppIcon size={16} /> +91 98490 48999
            </a>{' '}
            for custom pricing.
          </div>
        </div>
      </div>
    </div>
  );
}
