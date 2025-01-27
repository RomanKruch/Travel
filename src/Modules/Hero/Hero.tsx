import { useState } from 'react';
import Input from '../../components/Input/Input';
import s from './Hero.module.css';
import Button from '../../components/Button/Button';
import { useAppSelector } from '../../redux/hooks';
import { createSearchParams, useNavigate } from 'react-router-dom';

type TFormFields = 'destination' | 'location';

interface IFormValue {
  destination: string;
  location: string;
}

const initialFormValue: IFormValue = {
  destination: '',
  location: '',
};

const Hero = () => {
  const [formValue, setFormValue] = useState(initialFormValue);

  const navigate = useNavigate();

  const isDark = useAppSelector(s => s.theme.isDark);

  const onChange = (field: TFormFields) => {
    return (value: string) =>
      setFormValue(s => {
        const newState = { ...s, [field]: value };
        return newState;
      });
  };

  const onClick = () => {
    if (formValue.destination || formValue.location) {
      navigate({
        pathname: '/tours',
        search: `?${createSearchParams({
          des: formValue.destination,
          loc: formValue.location,
        })}`,
      });
    }
  };

  return (
    <section className={isDark ? `${s.hero} ${s.hero_dark}` : s.hero}>
        <div className={s.title_wrap}>
          <h1 className={s.title}>
            top budget <br /> destinations
          </h1>
          <p className={s.subtitle}>
            Explore the world's best destinations and create unforgettable memories.
          </p>
        </div>

        <div className={s.input_wrap}>
          <Input
            text="Destinations..."
            value={formValue.destination}
            setValue={onChange('destination')}
          />
          <Input text="Location..." value={formValue.location} setValue={onChange('location')} />
          <Button onClick={onClick}>Find</Button>
        </div>
    </section>
  );
};

export default Hero;
