import { useState } from 'react';
import Input from '../../components/Input/Input';
import s from './Hero.module.css';
import Button from '../../components/Button/Button';
import Modal from '../../components/Modal/Modal';
import LoginModal from '../../components/LoginModal/LoginModal';

interface IProps {
  isDark: boolean;
}

const Hero = ({ isDark }: IProps) => {
  const [inpValue, setInpValue] = useState('');

  const [isOpen, setIsOpen] = useState(false);

  return (
    <section className={isDark ? `${s.hero} ${s.hero_dark}` : s.hero}>
      <div>
        <div className={s.title_wrap}>
          <h1 className={s.title}>
            top budget <br /> destinations
          </h1>
          <p className={s.subtitle}>
            Explore the world's best destinations and create unforgettable
            memories.
          </p>
        </div>

        <div className={s.input_wrap}>
          <Input text="Destinations" value={inpValue} setValue={setInpValue} />
          <Input text="Date" value="" setValue={setInpValue} />
          <Button onClick={() => setIsOpen(true)}>Find</Button>

          {isOpen && (
            <Modal setIsOpen={setIsOpen}>
              <LoginModal />
            </Modal>
          )}
        </div>
      </div>
    </section>
  );
};

export default Hero;
