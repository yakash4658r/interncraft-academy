export default function SectionTitle({ title, subtitle, center = true }) {
  return (
    <div className={center ? "mb-10 text-center" : "mb-10"}>
      <h2 className="text-3xl font-bold tracking-tight text-slate-900 md:text-4xl">
        {title}
      </h2>
      {subtitle && (
        <p className="mt-3 text-base leading-7 text-slate-600 md:text-lg">
          {subtitle}
        </p>
      )}
    </div>
  );
}