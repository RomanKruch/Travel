import ImgIcon from '../../icons/ImgIcon';
import CheckMarkIcon from '../../icons/CheckMarkIcon';
import s from './ImgInput.module.css';
import { useState } from 'react';

interface IProps {
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const ImgInput = ({ onChange }: IProps) => {
  const [isFile, setIsFile] = useState(false);

  const onFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      setIsFile(true);
      onChange(e);
    }
  };

  return (
    <label className={s.label}>
      {isFile ? (
        <CheckMarkIcon classname={s.img_icon} />
      ) : (
        <ImgIcon classname={s.img_icon} />
      )}
      <input type="file" className={s.input} onChange={onFileChange} />
    </label>
  );
};

export default ImgInput;
