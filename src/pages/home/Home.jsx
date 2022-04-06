import './home.scss';
import Sidebar from '../../components/sidebar/Sidebar';
import Navbar from '../../components/navbar/Navbar';
import Widgets from '../../components/widgets/Widgets';
import Featured from '../../components/featured/Featured';
import Chart from '../../components/chart/Chart';
function Home() {
  return (
    <div className='home'>
      <Sidebar />
      <div className='homeContainer'>
        <Navbar />
        <div className='widgets'>
          <Widgets type='user' />
          <Widgets type={'order'} />
          <Widgets type={'earnings'} />
          <Widgets type={'balance'} />
        </div>
        <div className='charts'>
          <Featured />
          <Chart />
        </div>
      </div>
    </div>
  );
}

export default Home;
