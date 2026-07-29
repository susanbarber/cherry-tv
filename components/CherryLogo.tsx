interface Props {
  className?: string;
}

export default function CherryLogo({ className = "" }: Props) {
  return (
    <span
      className={`font-black tracking-tight leading-none ${className}`}
      style={{ fontFamily: "'Nunito', 'Arial Rounded MT Bold', system-ui, sans-serif" }}
    >
      <span className="text-white">cherry</span>
      <span style={{ color: "#d41e3a" }}>..</span>
    </span>
  );
}
