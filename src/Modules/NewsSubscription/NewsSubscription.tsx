import Input from '../../components/Input/Input';
import Button from '../../components/Button/Button';
import s from './NewsSubscription.module.css';
import { useState } from 'react';
import Title from '../../components/Title/Title';
import { addNotification } from '../../redux/notifications/notificationsSlice';
import { useAppDispatch } from '../../redux/hooks';
import { validateEmail } from '../../helpers/validation';
import axios from 'axios';

const NewsSubscription = () => {
  const [inpValue, setInpValue] = useState('');
  const dispatch = useAppDispatch();

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (validateEmail(inpValue)) return;
    try {
      const { data } = await axios.post('subscribe', { email: inpValue });
      const { message } = data;
      dispatch(addNotification({ message, type: 'success' }));
    } catch (err: any) {
      const { message } = err?.response.data;
      dispatch(addNotification({ message, type: 'error' }));
    }
  };

  return (
    <section>
      <div className="container">
        <Title>Subscription to the news</Title>
        <form onSubmit={onSubmit} className={s.form}>
          <Input text="Your email..." value={inpValue} setValue={setInpValue} className={s.input} />
          <Button className={s.btn} type="submit">
            Subscribe
          </Button>
        </form>
      </div>
    </section>
  );
};

export default NewsSubscription;
