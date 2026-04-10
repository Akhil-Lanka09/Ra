import Link from 'next/link';
import WhatsAppIcon from './WhatsAppIcon';

export default function Footer() {
  return (
    <footer className="cat-footer">
      <div>
        <div className="cf-logo-m">Raasa</div>
        <div className="cf-logo-s">Farm · Fresh · Delivered in Hyderabad</div>
      </div>
      <div style={{ display: 'flex', gap: '20px', flexWrap: 'wrap' }}>
        <a href="https://wa.me/919849048999" target="_blank" rel="noopener noreferrer" className="cf-link">
          <WhatsAppIcon /> WhatsApp Us
        </a>
        <Link href="/contact" className="cf-link">📞 Contact</Link>
      </div>
      <div className="cf-tag">Every Sat & Sun · Hyderabad</div>
    </footer>
  );
}
