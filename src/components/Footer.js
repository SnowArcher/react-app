import {Link} from 'react-router-dom';

function Footer() {
    return (
        <>
        <footer className='footer'>
            <div className='footer__info'>
                <h1>Запит на додаткову інформацію</h1>
                <p>Якщо ви не знайшли інформацію, яка вас цікавить, заповніть, будь ласка, форму за посиланням нижче. Ми надішлемо відповідь на вашу електронну пошту.</p>
                <Link to="/contacts">
                    <button>
                        Запит на додаткову інформацію
                    </button>
                </Link>
            </div>
            <div className='footer__contacts'>
                <h1>Контакти</h1>
                <div className="contacts__info">
                    <div className="info">
                        <p>Контактний номер</p>
                        <p>+380 (96) 052 72 91</p>
                    </div>
                    <div className="info">
                        <p>Email</p>
                        <p>3232605@gmail.com</p>
                    </div>
                    <div className="info">
                        <p>Адреса</p>
                        <p>м. Харків, вул. Повздовжня, 4</p>
                    </div>
                </div>
                <div className="social-media">
                    <a href='https://uk-ua.facebook.com/' target="_blank" rel="noopener noreferrer">
                        <button>
                            <img src="../img/footer/facebook.svg" alt='social' />
                        </button>
                    </a>
                    <a href='https://www.instagram.com/' target="_blank" rel="noopener noreferrer">
                        <button>
                            <img src="../img/footer/instagram.svg" alt='social'/>
                        </button>
                    </a>
                    <a href='https://web.telegram.org/' target="_blank" rel="noopener noreferrer">
                        <button>
                            <img src="../img/footer/telegram.svg" alt='social'/>
                        </button>
                    </a>
                    <a href='https://www.viber.com/' target="_blank" rel="noopener noreferrer">
                        <button>
                            <img src="../img/footer/viber.svg" alt='social'/>
                        </button>
                    </a>
                </div>
            </div>
        </footer>
        </>
    );
}

export default Footer;