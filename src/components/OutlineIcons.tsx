type IconProps = {
  className?: string;
  size?: number;
  strokeWidth?: number;
};

const base = (size: number, strokeWidth: number) => ({
  width: size,
  height: size,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
});

export function PinIcon({ className, size = 26, strokeWidth = 1.8 }: IconProps) {
  return (
    <svg {...base(size, strokeWidth)} className={className}>
      <path d="M12 21s-6.5-5.2-6.5-10.2A6.5 6.5 0 0 1 12 4.4a6.5 6.5 0 0 1 6.5 6.4C18.5 15.8 12 21 12 21z" />
      <circle cx="12" cy="11" r="2.6" />
    </svg>
  );
}

export function PhoneIcon({ className, size = 26, strokeWidth = 1.8 }: IconProps) {
  return (
    <svg {...base(size, strokeWidth)} className={className}>
      <path d="M5.9 4.5h3l1.4 3.4-2 1.6a12.6 12.6 0 0 0 5.2 5.2l1.6-2 3.4 1.4v3c0 1-.8 1.9-1.9 1.9A14.5 14.5 0 0 1 4 6.4c0-1.1.9-1.9 1.9-1.9z" />
    </svg>
  );
}

export function ClockIcon({ className, size = 26, strokeWidth = 1.8 }: IconProps) {
  return (
    <svg {...base(size, strokeWidth)} className={className}>
      <circle cx="12" cy="12" r="8.2" />
      <path d="M12 7.5V12l3 2" />
    </svg>
  );
}

export function ScooterIcon({ className, size = 30, strokeWidth = 1.8 }: IconProps) {
  return (
    <svg {...base(size, strokeWidth)} className={className}>
      <path d="M8.5 18.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5z" />
      <path d="M18.5 18.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5z" />
      <path d="M8.5 18.5h7.2l3-8.5H10.7" />
      <path d="M10.7 10H16" />
      <path d="M4.5 18.5H8.5" />
      <path d="M12.5 6.5h3.5" />
      <path d="M13 6.5a1.8 1.8 0 1 0 0-3.6 1.8 1.8 0 0 0 0 3.6z" />
    </svg>
  );
}

export function BoxIcon({ className, size = 30, strokeWidth = 1.8 }: IconProps) {
  return (
    <svg {...base(size, strokeWidth)} className={className}>
      <path d="M12.1 2.6 3.8 6.3a.6.6 0 0 0 0 1.1l8.3 3.7 8.3-3.7a.6.6 0 0 0 0-1.1z" />
      <path d="M6 8.3v6.6a1.6 1.6 0 0 0 1 1.5l4.4 1.9v-7" />
      <path d="M12.6 11.3v7l4.4-1.9a1.6 1.6 0 0 0 1-1.5V8.3" />
    </svg>
  );
}

export function HandIcon({ className, size = 26, strokeWidth = 1.8 }: IconProps) {
  return (
    <svg {...base(size, strokeWidth)} className={className}>
      <path d="M8 11.5V6.8a1.6 1.6 0 0 1 3.2 0v4.4" />
      <path d="M11.2 9.6V5.6a1.6 1.6 0 0 1 3.2 0v4.4" />
      <path d="M14.4 10.4V7a1.6 1.6 0 0 1 3.2 0v6.4c0 3.2-2 6-5.6 6-2.6 0-4.4-1.3-5.5-3.6L4.8 12c-.5-1 .1-2.1 1.2-2.4a1.6 1.6 0 0 1 1.8.6l1 1.3" />
    </svg>
  );
}