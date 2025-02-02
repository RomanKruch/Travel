import Input from '../../components/Input/Input';
import Button from '../../components/Button/Button';
import s from './NewsSubscription.module.css';
import { useState } from 'react';
import Title from '../../components/Title/Title';

const NewsSubscription = () => {
  const [inpValue, setInpValue] = useState('');

  const onSubmit = () => {
    console.log(inpValue);
  };

  return (
    <section>
      <div className="container">
        <Title>Subscription to the news</Title>
        <form onSubmit={e => e.preventDefault()} className={s.form}>
          <Input
            text="Your email..."
            value={inpValue}
            setValue={setInpValue}
            className={s.input}
          />
          <Button className={s.btn} onClick={onSubmit}>
            Subscribe
          </Button>
        </form>
      </div>
    </section>
  );
};

export default NewsSubscription;
