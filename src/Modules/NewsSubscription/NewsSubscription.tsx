import Input from '../../components/Input/Input';
import Button from '../../components/Button/Button';
import s from './NewsSubscription.module.css';
import { useState } from 'react';

const NewsSubscription = () => {
  const [inpValue, setInpValue] = useState('');

  const onSubmit = () => {
    console.log(inpValue);
  };

  return (
    <section>
      <div className="container">
        <h2 className={s.title}>Subscription to the news</h2>
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
