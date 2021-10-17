import React, { useCallback, useEffect, useRef, useState } from "react";

const SimpleHabit = (props) => {
  // --- Class case
  // state = {
  //   count: 0,
  // };
  const [count, setCount] = useState(0);
  const spanRef = useRef();

  // --- Class case
  // handleIncrement = () => {
  //   this.setState({ count: this.state.count + 1 });
  // };
  const handleIncrement = useCallback(() => {
    setCount(count + 1);
  });

  useEffect(() => {
    console.log(`test : ${count}`);
  }, [count]);
  // 두번째 인자에 넣은 값이 변경될 떄에만 업데이트. 만약 값이 없이[] 이렇게 쓰면 최초1회만 업뎃

  return (
    <li className="habit">
      <span ref={spanRef} className="habit-name">
        Reading
      </span>
      <span className="habit-count">{count}</span>
      <button className="habit-button habit-increase" onClick={handleIncrement}>
        <i className="fas fa-plus-square"></i>
      </button>
    </li>
  );
};

export default SimpleHabit;
