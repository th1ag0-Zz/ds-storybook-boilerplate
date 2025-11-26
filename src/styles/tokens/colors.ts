const primary = {
  50: "var(--color-primary-50) /* #ECFDF5 */",
  100: "var(--color-primary-100) /* #D1FAE5 */",
  200: "var(--color-primary-200) /* #A7F3D0 */",
  300: "var(--color-primary-300) /* #6EE7B7 */",
  400: "var(--color-primary-400) /* #34D399 */",
  500: "var(--color-primary-500) /* #10B981 */",
  600: "var(--color-primary-600) /* #059669 */",
  700: "var(--color-primary-700) /* #047857 */",
  800: "var(--color-primary-800) /* #065F46 */",
  900: "var(--color-primary-900) /* #064E3B */",
} as const;

const neutral = {
  50: "var(--color-secondary-50) /* #F5F3F6 */",
  100: "var(--color-secondary-100) /* #E5E7EB */",
  200: "var(--color-secondary-200) /* #D1D5DB */",
  300: "var(--color-secondary-300) /* #9CA3AF */",
  400: "var(--color-secondary-400) /* #6B7280 */",
  500: "var(--color-secondary-500) /* #4B5563 */",
  600: "var(--color-secondary-600) /* #374151 */",
  700: "var(--color-secondary-700) /* #1F2937 */",
  800: "var(--color-secondary-800) /* #111827 */",
  900: "var(--color-secondary-900) /* #0F172A */",
} as const;

const colors = {
  primary,
  neutral,
};

export default colors;
