import clsx from "clsx";

type Props = {
  children: React.ReactNode;
  variant?: "primary" | "secondary";
  href?: string;
};

export default function Button({
  children,
  variant = "primary",
  href,
}: Props) {
  const base =
    "inline-flex items-center justify-center px-5 py-3 rounded-xl text-sm font-medium transition";

  const styles = {
    primary:
      "bg-[var(--primary)] text-white hover:bg-[var(--primary-hover)]",
    secondary:
      "border border-[var(--border)] bg-transparent hover:bg-[var(--surface)]",
  };

  if (href) {
    return (
      <a href={href} className={clsx(base, styles[variant])}>
        {children}
      </a>
    );
  }

  return <button className={clsx(base, styles[variant])}>{children}</button>;
}