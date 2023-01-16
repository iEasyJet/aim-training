import './Stage2.scss';
import Input from './Input';
import { useRef, useState } from 'react';

function Stage2() {
  const [next, setNext] = useState(false);
  const [showScore, setShowScore] = useState(false);
  const [score, setScore] = useState(0);
  const [size, setSize] = useState('mix');
  const [color, setColor] = useState('mix');
  const [timeGame, setTimeGame] = useState(0);
  const [startGameBtn, setStartGameBtn] = useState(true);
  //let size = 'mix';
  //let color = 'mix';
  //let score = 0;

  const colors = [
    '#e8eea4',
    '#e59ec8',
    '#461973',
    '#6113e6',
    '#77ee96',
    '#fcf95c',
    '#bc1f85',
    '#d2ed38',
    '#49acb0',
  ];

  const timeRef = useRef();
  const sizeRef = useRef();
  const whiteRef = useRef();
  const redRef = useRef();
  const greenRef = useRef();
  const yellowRef = useRef();
  const oliveRef = useRef();
  const orangeRef = useRef();
  const tealRef = useRef();
  const blueRef = useRef();
  const violetRef = useRef();
  const purpleRef = useRef();
  const pinkRef = useRef();
  const mixRef = useRef();

  const boardRef = useRef();
  const taimerRef = useRef();
  let taimer;

  function createRandomCircle(color, size) {
    let colorCircle = color;
    const circle = document.createElement('div');
    circle.classList.add('circle');

    const { width, height } = boardRef.current.getBoundingClientRect();

    if (size === 'mix') {
      const sizeCircle = getRandomNumber(10, 30);

      const x = getRandomNumber(0, width - sizeCircle);
      const y = getRandomNumber(0, height - sizeCircle);

      circle.style.width = `${sizeCircle}px`;
      circle.style.height = `${sizeCircle}px`;

      circle.style.top = `${y}px`;
      circle.style.left = `${x}px`;
    }

    const sizeCircle = size;

    const x = getRandomNumber(0, width - sizeCircle);
    const y = getRandomNumber(0, height - sizeCircle);

    circle.style.top = `${y}px`;
    circle.style.left = `${x}px`;

    circle.style.width = `${sizeCircle}px`;
    circle.style.height = `${sizeCircle}px`;

    if (colorCircle === 'mix') {
      colorCircle = getRandomColor();
      circle.style.background = colorCircle;
    }

    circle.style.background = colorCircle;

    boardRef.current.append(circle);
  }

  function getRandomColor() {
    return colors[Math.floor(Math.random() * colors.length)];
  }

  function getRandomNumber(min, max) {
    return Math.round(Math.random() * (max - min) + min); //?
  }

  function nextStage() {
    if (whiteRef.current.checked) {
      setColor(whiteRef.current.value);
    }
    if (redRef.current.checked) {
      setColor(redRef.current.value);
    }
    if (greenRef.current.checked) {
      setColor(greenRef.current.value);
    }
    if (yellowRef.current.checked) {
      setColor(yellowRef.current.value);
    }
    if (oliveRef.current.checked) {
      setColor(oliveRef.current.value);
    }
    if (orangeRef.current.checked) {
      setColor(orangeRef.current.value);
    }
    if (tealRef.current.checked) {
      setColor(tealRef.current.value);
    }
    if (blueRef.current.checked) {
      setColor(blueRef.current.value);
    }
    if (violetRef.current.checked) {
      setColor(violetRef.current.value);
    }
    if (purpleRef.current.checked) {
      setColor(purpleRef.current.value);
    }
    if (pinkRef.current.checked) {
      setColor(pinkRef.current.value);
    }
    if (mixRef.current.checked) {
      setColor(mixRef.current.value);
    }

    setSize(sizeRef.current.value);
    setTimeGame(Number(timeRef.current.value));

    setNext(true);
  }

  function startGame() {
    createRandomCircle(color, size);
    let time = timeGame;

    taimer = setInterval(() => {
      if (time === 0) {
        finishGame();
        clearInterval(taimer);
      } else {
        time--;
        setTimeGame((prev) => prev - 1);
      }
    }, 1000);
    setStartGameBtn(false);
  }

  function click(event) {
    if (event.target.classList.contains('circle')) {
      setScore(score + 1);
      event.target.remove();
      createRandomCircle(color, size);
    }
  }

  function finishGame() {
    boardRef.current.children[0].remove();
    setShowScore(true);
    taimerRef.current.parentNode.classList.add('hide');
  }

  return (
    <>
      <div className={`screen ${next ? 'up' : ''}`}>
        <div className='box'>
          <div className='time'>
            <h2 className='time__title'>Время игры:</h2>
            <input
              type='text'
              className='time__input'
              placeholder='От 10 до 100 секунд'
              min='10'
              max='100'
              ref={timeRef}
            />
          </div>

          <div className='colors'>
            <h2>Цвет мишеней:</h2>

            <Input
              id='white'
              value='#fff'
              className='white'
              colorRef={whiteRef}
            />
            <Input id='red' value='#db2828' className='red' colorRef={redRef} />
            <Input
              id='green'
              value='#21ba45'
              className='green'
              colorRef={greenRef}
            />
            <Input
              id='yellow'
              value='#f8f405'
              className='yellow'
              colorRef={yellowRef}
            />
            <Input
              id='olive'
              value='#b5cc18'
              className='olive'
              colorRef={oliveRef}
            />
            <Input
              id='orange'
              value='#f2711c'
              className='orange'
              colorRef={orangeRef}
            />
            <Input
              id='teal'
              value='#00b5ad'
              className='teal'
              colorRef={tealRef}
            />
            <Input
              id='blue'
              value='#2185d0'
              className='blue'
              colorRef={blueRef}
            />
            <Input
              id='violet'
              value='#6435c9'
              className='violet'
              colorRef={violetRef}
            />
            <Input
              id='purple'
              value='#a333c8'
              className='purple'
              colorRef={purpleRef}
            />
            <Input
              id='pink'
              value='#e03997'
              className='pink'
              colorRef={pinkRef}
            />
            <Input id='mix' value='mix' className='mix' colorRef={mixRef} />
          </div>

          <div className='size'>
            <h2>Размер мишеней:</h2>
            <input
              type='text'
              className='time__input size__input'
              placeholder='От 1 до 50 или mix'
              min='1'
              max='50'
              ref={sizeRef}
            />
          </div>

          <button type='button' className='screen_btn' onClick={nextStage}>
            Продолжить
          </button>
        </div>
      </div>

      <div className='screen'>
        <h3>
          Осталось <span ref={taimerRef}>{timeGame}</span>
        </h3>
        <div className='board' ref={boardRef} onClick={click}>
          {showScore ? <p className='time__input'>Счет: {score}</p> : ''}
          {startGameBtn ? (
            <p className='screen_btn' onClick={startGame}>
              Начать!
            </p>
          ) : (
            ''
          )}
        </div>
      </div>
    </>
  );
}

export default Stage2;
