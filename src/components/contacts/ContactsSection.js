const contacts = [
  { name: "Адреса", footnote: "м. Харків, вул. Повздовжня, 4" },
  { name: "Контактний номер", footnote: "+380 (96) 052 72 91" },
  { name: "Email", footnote: "3232605@gmail.com" },
];

export default function ContactsSection() {
  return (
    <div className="conteiner">
      <div className="conteiner_connection">
        <img src="../img/img_contact/img-contact.png" alt="" />
        <div className="conteiner_connection_table">
          {contacts.map(({ name, footnote }) => (
            <div className="conteiner_connection_table_card" key={name}>
              <div className="conteiner_connection_table_card_name">{name}</div>
              <div className="conteiner_connection_table_card_footnote">
                {footnote}
              </div>
            </div>
          ))}
        </div>
        <div className="conteiner_connection_icon-link">
          <img src="../img/contact/fb.png" alt="" />
          <img src="../img/contact/inst.png" alt="" />
          <img src="../img/contact/tg.png" alt="" />
          <img src="../img/contact/vb.png" alt="" />
        </div>
      </div>
      <iframe
        title="google_map"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2561.9771161608433!2d36.28615311571691!3d50.049259979422054!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4127a6fdc42942d3%3A0x461820e85ec748e9!2z0J_RgNC-0LTQvtC70YzQvdCw0Y8g0YPQuy4sIDQsINCl0LDRgNGM0LrQvtCyLCDQpdCw0YDRjNC60L7QstGB0LrQsNGPINC-0LHQu9Cw0YHRgtGMLCA2MTAwMA!5e0!3m2!1sru!2sua!4v1677078035368!5m2!1sru!2sua"
        width="862"
        height="536"
        style={{ border: 0 }}
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>
  );
}

