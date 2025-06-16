import { useState, useRef, useEffect } from 'react';
import vnFlag from '../../assets/icons/VietNamFlag.svg';
import ukFlag from '../../assets/icons/UnitedKingdomFlag.svg';

const languages: Record<'vi' | 'en', { label: string; icon: string }> = {
  vi: { label: 'Tiếng Việt', icon: vnFlag },
  en: { label: 'English', icon: ukFlag },
};

const LanguageSwitcher = ({ onChange, value }: { onChange: (lang: string) => void; value: string }) => {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  const langKey = (value === 'vi' || value === 'en') ? value : 'en';

  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false);
    };
    document.addEventListener('mousedown', handleClick);
    return () => document.removeEventListener('mousedown', handleClick);
  }, []);

  return (
    <div className="lang-dropdown" ref={ref}>
      <button
        className="lang-dropdown-btn"
        onClick={() => setOpen(o => !o)}
        aria-haspopup="listbox"
        aria-expanded={open}
      >
        <img
          src={languages[langKey].icon}
          alt={languages[langKey].label}
          className="lang-flag"
          style={{ width: 22, height: 16, marginRight: 6, borderRadius: 3, boxShadow: '0 1px 4px #0001', verticalAlign: 'middle' }}
        />
        <span className="lang-label">{languages[langKey].label}</span>
        <span style={{ marginLeft: 8, fontSize: 12 }}>▼</span>
      </button>
      {open && (
        <ul className="lang-dropdown-list" role="listbox">
          {Object.entries(languages).map(([key, { label, icon }]) => (
            <li
              key={key}
              className={`lang-dropdown-item${key === value ? ' selected' : ''}`}
              role="option"
              aria-selected={key === value}
              onClick={() => { onChange(key); setOpen(false); }}
            >
              <img
                src={icon}
                alt={label}
                className="lang-flag"
                style={{ width: 22, height: 16, marginRight: 6, borderRadius: 3, verticalAlign: 'middle' }}
              />
              {label}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default LanguageSwitcher;
