type Props = {
  href: string
  label: string
  className?: string
}

export function BackLink({ href, label, className }: Props) {
  return (
    <a className={`back-link${className ? ` ${className}` : ''}`} href={href}>
      <svg className="back-link-arrow" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M19 12H5M11 6l-6 6 6 6" />
      </svg>
      {label}
    </a>
  )
}
