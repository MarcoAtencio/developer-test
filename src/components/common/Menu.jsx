import ReactDOM from 'react-dom';
import useWindowDimensions from '../../hooks/useWindowDimension';

import {
  SideBarWrapper,
  ItemSideBar,
  NavBarWrapper,
  ItemNav,
  Close,
} from '../../styles/Menu';
import { useTranslation } from 'react-i18next';

import BankIcon from '../../assets/bank.svg';
import BellIcon from '../../assets/bell.svg';
import CardIcon from '../../assets/card.svg';
import MenuIcon from '../../assets/menu.svg';
import MoneyIcon from '../../assets/money.svg';
import UserIcon from '../../assets/user.svg';
import CloseIcon from '../../assets/close.png';

export const SideBar = () => {
  const { width } = useWindowDimensions();
  const { t } = useTranslation('global');
  if (width < 768) return null;
  return (
    <SideBarWrapper>
      <ItemSideBar>
        <img src={MenuIcon} alt='bank' />
        <span>{t('sidebar.overview')}</span>
      </ItemSideBar>
      <ItemSideBar>
        <img src={BankIcon} alt='bank' />
        <span>{t('sidebar.tribal-pay')}</span>
      </ItemSideBar>
      <ItemSideBar>
        <img src={CardIcon} alt='bank' />
        <span>{t('sidebar.tribal-credit')}</span>
      </ItemSideBar>
      <ItemSideBar>
        <img src={MoneyIcon} alt='bank' />
        <span>{t('sidebar.payments')}</span>
      </ItemSideBar>
      <ItemSideBar>
        <img src={BellIcon} alt='bank' />
        <span>{t('sidebar.notifications')}</span>
      </ItemSideBar>
      <ItemSideBar>
        <img src={UserIcon} alt='bank' />
        <span>{t('sidebar.users')}</span>
      </ItemSideBar>
    </SideBarWrapper>
  );
};

export const NavBar = ({ open, handleOpen }) => {
  const { width } = useWindowDimensions();
  const { t } = useTranslation('global');
  if (width >= 768) return null;

  return ReactDOM.createPortal(
    <NavBarWrapper open={open}>
      <Close src={CloseIcon} alt='Close' onClick={handleOpen} />
      <div>
        <ItemNav>
          <img src={MenuIcon} alt='bank' />
          <span>{t('sidebar.overview')}</span>
        </ItemNav>
        <ItemNav>
          <div>
            <img src={BankIcon} alt='bank' />
            <span>{t('sidebar.tribal-pay')}</span>
          </div>
        </ItemNav>
        <ItemNav>
          <img src={CardIcon} alt='bank' />
          <span>{t('sidebar.tribal-credit')}</span>
        </ItemNav>
        <ItemNav>
          <img src={MoneyIcon} alt='bank' />
          <span>{t('sidebar.payments')}</span>
        </ItemNav>
        <ItemNav>
          <img src={BellIcon} alt='bank' />
          <span>{t('sidebar.notifications')}</span>
        </ItemNav>
        <ItemNav>
          <img src={UserIcon} alt='bank' />
          <span>{t('sidebar.users')}</span>
        </ItemNav>
      </div>
    </NavBarWrapper>,
    document.getElementById('modal')
  );
};
