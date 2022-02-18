import { render } from 'react-dom';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './index.css';
import Businesses from './components/views/businesses';
import Business from './components/views/businesses/Business';
import { Layout } from './components/common';
import { Provider } from 'react-redux';
import { store } from './redux/store';
import { GlobalStyles } from './GlobalStyles';
import { I18nextProvider } from 'react-i18next';
import i18next from 'i18next';
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';
import { useNavigate } from 'react-router-dom';
import { Button } from './components/common/Buttons';
import { Title } from './styles/Common';

import global_es from './translations/es/global.json';
import global_en from './translations/en/global.json';
import global_pt from './translations/pt/global.json';

function Home() {
  const navigate = useNavigate();
  return (
    <div>
      <h1>Tribal Coding Challenge - Frontend </h1>
      <div style={{ padding: 30 }}>
        <Title style={{ marginBottom: 20 }}>Marco Antonio Atencio Maravi</Title>
        <Button
          name='App'
          mode='secondary'
          onClick={() => navigate('/business')}
        />
      </div>
    </div>
  );
}

function NotFound() {
  return <h1>Sent Invoices</h1>;
}

i18next.init({
  interpolation: { escapeValue: false },
  lng: 'es',
  resources: {
    es: {
      global: global_es,
    },
    en: {
      global: global_en,
    },
    pt: {
      global: global_pt,
    },
  },
});

render(
  <Provider store={store}>
    <I18nextProvider i18n={i18next}>
      <GlobalStyles />

      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Layout />}>
            <Route index element={<Home />} />
            <Route path='business' element={<Businesses />} />
            <Route path='business/:businessId' element={<Business />}>
              <Route path='persons' element={<Home />} />
            </Route>
            <Route path='sent' element={<Home />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </I18nextProvider>
  </Provider>,
  document.getElementById('root')
);
