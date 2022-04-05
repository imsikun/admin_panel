import './sidebar.scss';
import DashboardIcon from '@mui/icons-material/Dashboard';
import PersonIcon from '@mui/icons-material/Person';
import InventoryIcon from '@mui/icons-material/Inventory';
import ProductionQuantityLimitsIcon from '@mui/icons-material/ProductionQuantityLimits';
import BarChartIcon from '@mui/icons-material/BarChart';
import NotificationsActiveIcon from '@mui/icons-material/NotificationsActive';
import HealthAndSafetyIcon from '@mui/icons-material/HealthAndSafety';
import SettingsIcon from '@mui/icons-material/Settings';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import LogoutIcon from '@mui/icons-material/Logout';
import StackedBarChartIcon from '@mui/icons-material/StackedBarChart';
function Sidebar() {
  return (
    <div className='sidebar'>
      <div className='top'>
        <span className='logo'>Admin</span>
      </div>
      <hr />
      <div className='center'>
        <ul>
          <p className='title'>MAIN</p>
          <li>
            <DashboardIcon className='icon' />
            <span>Dashboard</span>
          </li>
          <p className='title'>LISTS</p>
          <li>
            <PersonIcon className='icon' />
            <span>Users</span>
          </li>
          <li>
            <InventoryIcon className='icon' />
            <span>Products</span>
          </li>
          <li>
            <ProductionQuantityLimitsIcon className='icon' />
            <span>Orders</span>
          </li>
          <p className='title'>USEFUL LINKS</p>
          <li>
            <BarChartIcon className='icon' />
            <span>Stats</span>
          </li>
          <li>
            <NotificationsActiveIcon className='icon' />
            <span>Notification</span>
          </li>
          <p className='title'>SERVICE</p>
          <li>
            <HealthAndSafetyIcon className='icon' />
            <span>System Health</span>
          </li>
          <li>
            <StackedBarChartIcon className='icon' />
            <span>Logs</span>
          </li>
          <li>
            <SettingsIcon className='icon' />
            <span>Settings</span>
          </li>
          <p className='title'>USER</p>
          <li>
            <AccountCircleIcon className='icon' />
            <span>Profile</span>
          </li>
          <li>
            <LogoutIcon className='icon' />
            <span>Logout</span>
          </li>
        </ul>
      </div>
      <div className='bottom'>
        <div className='colorOption'></div>
        <div className='colorOption'></div>
      </div>
    </div>
  );
}

export default Sidebar;
