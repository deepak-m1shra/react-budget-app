import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';

const Currency = () => {
  const { dispatch, currency } = useContext(AppContext);

  const changeCurrency = (val) => {
    dispatch({
      type: 'CHG_CURRENCY',
      payload: val,
    });
  };

  const backgroundStyle = {
    backgroundColor: 'lightgreen',
    color: 'white',
    fontSize: '18px',
    // appearance: 'none',
    border: 'none',
    background: 'lightgreen'
  }

  return (
    <div className='alert alert-success'
      onChange={(event) => changeCurrency(event.target.value)}
      style={backgroundStyle}
    >
      <div style={backgroundStyle}>
        Currency( <select style={backgroundStyle} value={currency}>
          <option value='$' style={backgroundStyle}>$ Dollar</option>
          <option value='£' style={backgroundStyle}>£ Pound</option>
          <option value='€' style={backgroundStyle}>€ Euro</option>
          <option value='₹' style={backgroundStyle}>₹ Rupee</option>
        </select>)
      </div>
    </div >
  );
};

export default Currency;
