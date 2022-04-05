import './widgets.scss';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import CurrencyRupeeIcon from '@mui/icons-material/CurrencyRupee';
import AccountBalanceIcon from '@mui/icons-material/AccountBalance';
const Widgets = ({ type }) => {
  let data;

  //temporary amount
  const amount = 100;
  const percentage = 20;

  switch (type) {
    case 'user':
      data = {
        title: 'USERS',
        isMoney: false,
        link: 'See all Users',
        icon: (
          <PersonOutlineIcon
            className='icon'
            style={{ color: 'crimson', backgroundColor: 'rgba(255,0,0,0.2)' }}
          />
        ),
      };
      break;
    case 'order':
      data = {
        title: 'ORDERS',
        isMoney: false,
        link: 'View all Users',
        icon: (
          <ShoppingCartIcon
            className='icon'
            style={{
              color: 'goldenrod',
              backgroundColor: 'rgba(218, 165, 32, 0.2)',
            }}
          />
        ),
      };
      break;
    case 'earnings':
      data = {
        title: 'EARNINGS',
        isMoney: true,
        link: 'View net earnings',
        icon: (
          <CurrencyRupeeIcon
            className='icon'
            style={{ backgroundColor: 'rgba(0, 128, 0, 0.2)', color: 'green' }}
          />
        ),
      };
      break;
    case 'balance':
      data = {
        title: 'BALANCE',
        isMoney: true,
        link: 'See Details',
        icon: (
          <AccountBalanceIcon
            className='icon'
            style={{
              color: 'purple',
              backgroundColor: 'rgba(128, 0, 128, 0.2)',
            }}
          />
        ),
      };
      break;

    default:
      break;
  }

  return (
    <div className='widget'>
      <div className='left'>
        <span className='title'>{data.title}</span>
        <span className='counter'>
          {data.isMoney && '₹'} {amount}
        </span>
        <span className='link'>{data.link}</span>
      </div>
      <div className='right'>
        <div className='percentage positive'>
          <KeyboardArrowUpIcon />
          {percentage}%
        </div>
        {data.icon}
      </div>
    </div>
  );
};

export default Widgets;
