/**
 * SectionTitle — renders the template animated underline bar.
 * align: 'center' (default) | 'left'
 */
export default function SectionTitle({ label, title, subtitle, align = 'center' }) {
  return (
    <div className={`section-header${align === 'left' ? ' text-left' : ''}`}>
      {label && <span className="section-label">{label}</span>}
      <h2 className={`section-title${align === 'left' ? ' section-title-left' : ''}`}>
        {title}
      </h2>
      {subtitle && <p className="section-subtitle">{subtitle}</p>}
    </div>
  );
}
