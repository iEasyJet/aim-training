import { useState } from 'react';
import './Stage1.scss';

function Stage1() {
  const [next, setNext] = useState(false);

  const nextStage = () => {
    setNext(true);
  };

  return (
    <div className={`screen ${next ? 'up' : ' '}`}>
      <h1 className='screen_title'>Aim Training</h1>
      <button type='button' className='screen_btn' onClick={nextStage}>
        Продолжить
      </button>
    </div>
  );
}

export default Stage1;
