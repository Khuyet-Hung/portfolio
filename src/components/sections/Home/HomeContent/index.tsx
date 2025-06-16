import { useTranslation } from "react-i18next";
import "../Home.scss";
const HomeContent = () => {
  const { t } = useTranslation();
  return (
    <div className="home-content">
      <div className="home-avatar">
        <img src="/src/assets/images/avatars/MyAvatar.jpg" alt="Avatar" />
      </div>
      <div className="home-info">
        <div className="home-name">{t("home.name")}</div>
        <div className="home-divider"></div>
        <div className="home-role">{t("home.role")}</div>
      </div>
    </div>
  );
};

export default HomeContent;
