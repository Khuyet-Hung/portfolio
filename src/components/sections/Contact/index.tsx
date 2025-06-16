import { useEffect, useRef, useState } from 'react';
import { useTranslation } from 'react-i18next';
import './Contact.scss';

const Contact = () => {
  const { t } = useTranslation();
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [sent, setSent] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const onScroll = () => {
      const rect = el.getBoundingClientRect();
      if (rect.top < window.innerHeight - 80) {
        el.classList.add('is-visible');
      } else {
        el.classList.remove('is-visible');
      }
    };
    window.addEventListener('scroll', onScroll);
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSent(true);
    // Thực tế sẽ gửi form qua API hoặc email service
  };

  return (
    <section className="contact-section" data-animate ref={ref}>
        <div className="contact-container">
      <h2>{t('contact.title')}</h2>
      <div className="contact-info">
        <p>Email: nguyenvana@email.com</p>
        <p>Facebook: <a href="#">facebook.com/nguyenvana</a></p>
        <p>LinkedIn: <a href="#">linkedin.com/in/nguyenvana</a></p>
      </div>
      <form className="contact-form" onSubmit={handleSubmit}>
        <input name="name" placeholder={t('contact.form.name')} value={form.name} onChange={handleChange} required />
        <input name="email" type="email" placeholder={t('contact.form.email')} value={form.email} onChange={handleChange} required />
        <textarea name="message" placeholder={t('contact.form.message')} value={form.message} onChange={handleChange} required />
        <button type="submit">{t('contact.form.send')}</button>
        {sent && <div className="sent-msg">{t('contact.form.sent')}</div>}
      </form>
      </div>
    </section>
  );
};
export default Contact;
