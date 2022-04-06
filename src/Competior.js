import React from 'react';


const Competior = ({ name, wins, losses }) => {
  return (
    <div className='Competitor-box'>
        <p className='Competitor-box-item Competitor-box-item-name'>{ name }</p>
        <p className='Competitor-box-item'>{ wins }-{ losses }</p>
    </div>
  )
}

export default Competior
