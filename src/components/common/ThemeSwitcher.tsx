import { useEffect, useState } from 'react';

const sun = (
  <svg
    width="22"
    height="22"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <circle cx="12" cy="12" r="5" />
    <path d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42" />
  </svg>
);
const moon = (
  <svg
    width="22"
    height="22"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M21 12.79A9 9 0 1 1 11.21 3a7 7 0 0 0 9.79 9.79z" />
  </svg>
);

const ThemeSwitcher = () => {
  const [theme, setTheme] = useState(() => document.documentElement.getAttribute('data-theme') || 'dark');

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark');
  };

  // Hiệu ứng màu nền và icon phù hợp theme
  const isDark = theme === 'dark';
  const bg = isDark ? 'rgba(255,255,255,0.12)' : 'rgba(79,140,255,0.12)';
  const color = isDark ? '#FFD600' : '#222';
  const hoverBg = isDark ? 'rgba(255,255,255,0.22)' : 'rgba(79,140,255,0.22)';

  return (
    <button
      onClick={toggleTheme}
      aria-label="Toggle theme"
      style={{
        background: bg,
        border: 'none',
        cursor: 'pointer',
        marginRight: 8,
        padding: 6,
        display: 'flex',
        alignItems: 'center',
        fontSize: 20,
        borderRadius: '50%',
        color,
        transition: 'background 0.3s, color 0.3s',
      }}
      onMouseOver={e => (e.currentTarget.style.background = hoverBg)}
      onMouseOut={e => (e.currentTarget.style.background = bg)}
    >
      {isDark ? sun : moon}
    </button>
  );
};

export default ThemeSwitcher;
