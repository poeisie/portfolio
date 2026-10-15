import React, { useState } from 'react';
import { useT } from '../prefs.jsx';

const WHATSAPP_URL = 'https://wa.me/5581981654408';

const links = [
  { label: 'Email', href: 'mailto:calielfeijo@gmail.com' },
  { label: 'GitHub', href: 'https://github.com/poeisie', external: true },
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/calielfeijo/', external: true },
];

const ContactPage = () => {
  const t = useT();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  // Sem backend: o formulário abre o WhatsApp com a mensagem já escrita
  const handleSubmit = (e) => {
    e.preventDefault();
    const intro = t({
      pt: `Olá! Sou ${formData.name} (${formData.email}).`,
      en: `Hi! I'm ${formData.name} (${formData.email}).`,
    });
    const text = `${intro}\n\n${formData.message}`;
    window.open(`${WHATSAPP_URL}?text=${encodeURIComponent(text)}`, '_blank', 'noopener,noreferrer');
  };

  return (
    <section className="page">
      <header className="page-head">
        <p className="eyebrow">{t({ pt: 'contato', en: 'contact' })}</p>
        <h1 className="page-title">{t({ pt: 'Contato', en: 'Contact' })}</h1>
        <p className="page-lede">
          {t({
            pt: 'Quer encomendar uma arte, tirar um projeto do papel ou só trocar uma ideia? Me manda uma mensagem!',
            en: 'Want to commission a piece, build something together or just say hi? Send me a message!',
          })}
        </p>
      </header>

      <form className="form" onSubmit={handleSubmit}>
        <div className="field">
          <label htmlFor="contact-name">{t({ pt: 'Nome', en: 'Name' })}</label>
          <input id="contact-name" type="text" name="name" value={formData.name} onChange={handleChange} required />
        </div>
        <div className="field">
          <label htmlFor="contact-email">Email</label>
          <input id="contact-email" type="email" name="email" value={formData.email} onChange={handleChange} required />
        </div>
        <div className="field">
          <label htmlFor="contact-message">{t({ pt: 'Mensagem', en: 'Message' })}</label>
          <textarea id="contact-message" name="message" value={formData.message} onChange={handleChange} required rows="6" />
        </div>
        <button type="submit" className="btn">{t({ pt: 'Enviar pelo WhatsApp', en: 'Send via WhatsApp' })}</button>
      </form>

      <div className="contact-alt">
        <p>{t({ pt: 'Ou me encontre por aqui:', en: 'Or find me here:' })}</p>
        <ul className="link-list">
          {links.map((link) => (
            <li key={link.label}>
              <a
                href={link.href}
                {...(link.external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default ContactPage;
