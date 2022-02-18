import { useState } from 'react';
import { Outlet } from 'react-router-dom';
import Logo from '../../assets/logo.jpg';
import MenuBurger from '../../assets/menu-burger.svg';
import { SideBar, NavBar } from './Menu';
import { Button } from './Buttons';
import { Header, Burger, Main, Footer } from '../../styles/Layout';
import { useTranslation } from 'react-i18next';

export const Layout = () => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => {
    setOpen(!open);
  };
  return (
    <>
      <HeaderRender handleOpen={handleOpen} />

      <Main>
        <NavBar open={open} handleOpen={handleOpen} />
        <SideBar />
        <Outlet />
      </Main>

      <FooterRender />
    </>
  );
};

const HeaderRender = ({ handleOpen }) => {
  const { i18n } = useTranslation('global');
  const [showTranslations, setShowTranslations] = useState(false);
  const [language, setLanguage] = useState('Language');

  return (
    <Header>
      <div style={{ display: 'flex' }}>
        <img src={Logo} alt='Logo' style={{ height: 'max-content' }} />
        <div style={{ position: 'relative', marginLeft: 30 }}>
          <Button name={language} onClick={() => setShowTranslations(true)} />
          {showTranslations && (
            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                position: 'absolute',
                top: 0,
                right: 0,
                justifyContent: 'space-between',
                height: 130,
              }}
            >
              <Button
                name='en'
                onClick={() => {
                  i18n.changeLanguage('en');
                  setShowTranslations(false);
                  setLanguage('en');
                }}
              />
              <Button
                name='es'
                onClick={() => {
                  i18n.changeLanguage('es');
                  setShowTranslations(false);
                  setLanguage('es');
                }}
              />
              <Button
                name='pt'
                onClick={() => {
                  i18n.changeLanguage('pt');
                  setShowTranslations(false);
                  setLanguage('pt');
                }}
              />
            </div>
          )}
        </div>
      </div>

      <Burger src={MenuBurger} alt='Menu Burger' onClick={handleOpen} />
    </Header>
  );
};

const FooterRender = () => (
  <Footer>
    <ul style={{ display: 'flex' }}>
      <li style={{ marginRight: 10 }}>
        <a href='#'>Legal</a>
      </li>
      <li style={{ marginRight: 10 }}>
        <a href='#'>FAQ</a>
      </li>
      <li style={{ marginRight: 10 }}>
        <a href='#'>Support</a>
      </li>
    </ul>
  </Footer>
);
