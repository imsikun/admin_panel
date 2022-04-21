import Sidebar from '../../components/sidebar/Sidebar';
import Navbar from '../../components/navbar/Navbar';
import Chart from '../../components/chart/Chart';
import './single.scss';
import Tables from '../../components/table/Table';
function Single() {
  return (
    <div className='single'>
      <Sidebar />
      <div className='singleContainer'>
        <Navbar />
        <div className='top'>
          <div className='left'>
            <div className='editButton'>Edit</div>
            <h1 className='title'>Information</h1>
            <div className='item'>
              <img
                src='https://images.pexels.com/photos/733872/pexels-photo-733872.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260'
                alt='person'
                className='itemImg'
              />
              <div className='details'>
                <h1 className='itemTitle'>Jane Doe</h1>
                <div className='detailItem'>
                  <span className='itemKey'>Email:</span>
                  <span className='itemValue'>jane@gmail.com</span>
                </div>
                <div className='detailItem'>
                  <span className='itemKey'>Pone:</span>
                  <span className='itemValue'>+91-7978912977</span>
                </div>
                <div className='detailItem'>
                  <span className='itemKey'>Address:</span>
                  <span className='itemValue'>HSR Layout, Bangalore</span>
                </div>
                <div className='detailItem'>
                  <span className='itemKey'>Country:</span>
                  <span className='itemValue'>India</span>
                </div>
              </div>
            </div>
          </div>
          <div className='right'>
            <Chart aspect={5 / 1} title='User Spending (Last 6 months)' />
          </div>
        </div>
        <div className='bottom'>
          <h1 className='title'>Last Transactions</h1>
          <Tables />
        </div>
      </div>
    </div>
  );
}

export default Single;
