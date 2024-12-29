import { useEffect, useState, useRef } from 'react';
import s from './RangeInput.module.css';

interface IProps {
  value: number;
  setValue: (v: number) => void;
  maxValue: number;
}

const RangeInput = ({ value, setValue, maxValue }: IProps) => {
  const [width, setWidth] = useState(0);

  const markStartWidth = useRef<number>();

  useEffect(() => {
    const markRef = document.querySelector(`.${s.mark}`) as Element;
    markStartWidth.current = markRef.getBoundingClientRect().x;
    const LineRef = document.querySelector(`.${s.line}`) as Element;

    setWidth(LineRef.getBoundingClientRect().width);
  }, []);



  const onMouseMove = (e: MouseEvent) => {
    const x = e.pageX;

    if (
      x >= (markStartWidth.current || 0) &&
      x <= width + (markStartWidth.current || 0)
    ) {
      setValue(
        Math.round((x - (markStartWidth.current || 0)) * (maxValue / width)),
      );
    }
    return;
  };

  const onMouseUp = () => {
    window.removeEventListener('mousemove', onMouseMove);
    window.removeEventListener('mouseup', onMouseUp);
  };

  const onMouseDown = () => {
    window.addEventListener('mousemove', onMouseMove);
    window.addEventListener('mouseup', onMouseUp);
  };

  const left = (value + 5 - (markStartWidth.current || 0)) / (maxValue / width);

  return (
    <div className={s.line}>
      <div className={s.mark} onMouseDown={onMouseDown} style={{ left }}></div>
    </div>
  );
};

export default RangeInput;
