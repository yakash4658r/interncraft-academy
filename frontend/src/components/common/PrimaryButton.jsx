export default function PrimaryButton({
  children,
  href = "#",
  className = "",
}) {
  return (
    <a
      href={href}
      className={`inline-block rounded-full bg-slate-900 px-6 py-3 text-sm font-semibold text-white transition hover:bg-slate-700 ${className}`}
    >
      {children}
    </a>
  );
}