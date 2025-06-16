import { useEffect, useRef } from 'react';
import { useTranslation } from 'react-i18next';
import './About.scss';
// import MyPoster from '@assets/images/avatars/MyPoster.jpg';
import MyPoster from '@assets/images/avatars/MyAvatar.jpg';
import SpotlightCard from '@components/common/SpotlightCard';

const About = () => {
  const { t } = useTranslation();

  return (
    <section className="about-section">
        <div className="about-container">
          <div className="about-title">{t('about.myPortfolio')}</div>
          <div className="about-content">
            <div className='about-description'>{t('about.detail')}</div>
            <div className='about-image'>
              <SpotlightCard>
                <img src={MyPoster} alt="About Me" />
              </SpotlightCard>
            </div>
          </div>
        </div>
    </section>
  );
};
export default About;
