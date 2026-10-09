import { Link } from 'react-router-dom';

/**
 * Button / Link button with template inset-shadow hover animation.
 * variant: 'primary' | 'secondary' | 'outline' | 'outline-white' | 'ghost'
 * size:    'sm' | 'md' | 'lg'
 * If `to` is provided, renders a React Router <Link>.
 * If `href` is provided, renders an <a>.
 * Otherwise renders a <button>.
 */
export default function Button({
  children,
  variant = 'primary',
  size = 'md',
  to,
  href,
  full = false,
  className = '',
  ...rest
}) {
  const cls = [
    'btn',
    `btn-${variant}`,
    size === 'lg' ? 'btn-lg' : size === 'sm' ? 'btn-sm' : '',
    full ? 'btn-full' : '',
    className,
  ]
    .filter(Boolean)
    .join(' ');

  if (to) {
    return <Link to={to} className={cls} {...rest}>{children}</Link>;
  }
  if (href) {
    return <a href={href} className={cls} rel="noopener noreferrer" {...rest}>{children}</a>;
  }
  return <button className={cls} {...rest}>{children}</button>;
}
