export function SectionTitle({
  kicker,
  title,
  subtitle,
  align = "center",
}: {
  kicker?: string;
  title: string;
  subtitle?: string;
  align?: "center" | "left";
}) {
  const alignment =
    align === "left" ? "mx-0 text-left" : "mx-auto text-center";
  return (
    <div className={`max-w-3xl ${alignment}`}>
      {kicker ? (
        <p className="text-sm font-medium text-[var(--muted)]">{kicker}</p>
      ) : null}
      <h2 className="mt-2 text-3xl font-semibold tracking-tight text-[var(--ink)] md:text-4xl">
        {title}
      </h2>
      {subtitle ? (
        <p className="mt-3 text-base text-[var(--muted)] md:text-lg">{subtitle}</p>
      ) : null}
    </div>
  );
}
