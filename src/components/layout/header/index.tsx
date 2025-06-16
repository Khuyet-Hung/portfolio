import ThemeSwitcher from '@components/common/ThemeSwitcher';
import LanguageSwitcher from '@components/common/LanguageSwitcher';
import { useTranslation } from 'react-i18next';
import { useState } from 'react';
import MenuIcon from '@assets/icons/MenuIcon.svg?react';
import './style.scss';

const navs = [
  { id: 'home', labelKey: 'title', keyNumber: 0 },
  { id: 'about', labelKey: 'about.title', keyNumber: 1 },
  { id: 'projects', labelKey: 'projects.heading', keyNumber: 2 },
  { id: 'skills', labelKey: 'skills.title', keyNumber: 3 },
  { id: 'contact', labelKey: 'contact.title', keyNumber: 4 },
];

interface HeaderProps {
  lang: string;
  onLangChange: (l: string) => void;
  onScrollToSection?: (offset: number) => void;
}

const Header: React.FC<HeaderProps> = ({ lang, onLangChange, onScrollToSection }) => {
    const { t } = useTranslation();
    const [showMenu, setShowMenu] = useState(false);

  const handleMenuToggle = (offset: number) => {
    onScrollToSection?.(offset);
    setShowMenu(false); // Ẩn menu sau khi click
  };

    return(
    <header className="header">
      <div className="main-nav">
        <div className="nav-left">
          <span className="logo">Portfolio</span>
        </div>
        <div className={`nav-center`}>
          {navs.map(n => (
            <button key={n.id} className="nav-btn" onClick={() => onScrollToSection?.(n.keyNumber)}>{t(n.labelKey)}</button>
          ))}
        </div>
        <div className="nav-right">
          <ThemeSwitcher />
          <LanguageSwitcher value={lang} onChange={onLangChange} />
        </div>
        <button className="menu-toggle" aria-label="Open menu" onClick={() => setShowMenu(s => !s)}>
          {/* <img className="menu-icon" src={MenuIcon} alt="Menu" /> */}
          <MenuIcon className="menu-icon" />
        </button>
        <div className={`nav-center-mobile ${showMenu ? ' show' : ''}`}>
          {navs.map(n => (
            <button key={n.id} className="nav-btn" onClick={() => handleMenuToggle(n.keyNumber)}>{t(n.labelKey)}</button>
          ))}
        </div>
      </div>
      <div className='header-overlay-top'></div>
    </header>
  );
}
export default Header;