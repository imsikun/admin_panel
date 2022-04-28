import Sidebar from '../../components/sidebar/Sidebar';
import Navbar from '../../components/navbar/Navbar';
import FileUploadIcon from '@mui/icons-material/FileUpload';
import './new.scss';
import { useState } from 'react';
import {
  addDoc,
  collection,
  doc,
  serverTimestamp,
  setDoc,
} from 'firebase/firestore';
import { db } from '../../firebase';

function New({ inputs, title }) {
  const [file, setFile] = useState('');

  const handleAdd = async (e) => {
    e.preventDefault();
    try {
      const res = await addDoc(collection(db, 'cities'), {
        name: 'Los Angeles',
        state: 'CA',
        country: 'USA',
        timeStamp: serverTimestamp(),
      });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className='new'>
      <Sidebar />
      <div className='newContainer'>
        <Navbar />
        <div className='top'>
          <h1>{title}</h1>
        </div>
        <div className='bottom'>
          <div className='left'>
            <img
              src={
                file
                  ? URL.createObjectURL(file)
                  : 'https://icon-library.com/images/no-image-icon/no-image-icon-0.jpg'
              }
              alt=''
            />
          </div>
          <div className='right'>
            <form onSubmit={handleAdd}>
              <div className='formInput'>
                <label htmlFor='file'>
                  Image : <FileUploadIcon className='icon' />
                </label>
                <input
                  type='file'
                  id='file'
                  onChange={(e) => setFile(e.target.files[0])}
                  style={{ display: 'none' }}
                />
              </div>

              {inputs.map((input) => (
                <div className='formInput' key={input.id}>
                  <label>{input.label}</label>
                  <input type={input.type} placeholder={input.placeholder} />
                </div>
              ))}

              <button type='submit'>Send</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default New;
