import Sidebar from '../../components/sidebar/Sidebar';
import Navbar from '../../components/navbar/Navbar';
import FileUploadIcon from '@mui/icons-material/FileUpload';
import './new.scss';
function New() {
  return (
    <div className='new'>
      <Sidebar />
      <div className='newContainer'>
        <Navbar />
        <div className='top'>
          <h1>Add New User</h1>
        </div>
        <div className='bottom'>
          <div className='left'>
            <img
              src='https://icon-library.com/images/no-image-icon/no-image-icon-0.jpg'
              alt=''
            />
          </div>
          <div className='right'>
            <form>
              <div className='formInput'>
                <label htmlFor='file'>
                  <FileUploadIcon />
                </label>
                <input type='file' id='file' />
              </div>
              <div className='formInput'>
                <label htmlFor='userName'>UserName</label>
                <input type='text' placeholder='john' />
              </div>
              <div className='formInput'>
                <label htmlFor='name'>Name and Surname</label>
                <input type='text' placeholder='John Doe' />
              </div>
              <div className='formInput'>
                <label htmlFor='email'>Email</label>
                <input type='email' placeholder='john@gmail.com' />
              </div>
              <div className='formInput'>
                <label htmlFor='phone'>Phone</label>
                <input type='text' placeholder='+91-7809588548' />
              </div>
              <div className='formInput'>
                <label htmlFor='password'>Password</label>
                <input type='password' placeholder='john' />
              </div>
              <div className='formInput'>
                <label htmlFor='address'>Address</label>
                <input type='text' placeholder='Elton St. 216 NewYork' />
              </div>
              <div className='formInput'>
                <label htmlFor='country'>Country</label>
                <input type='text' placeholder='USA' />
              </div>
              <button>Send</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default New;
