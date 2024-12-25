import s from './ShareYourTour.module.css';
import Input from '../../components/Input/Input';
import ImgInput from '../../components/ImgInput/ImgInput';
import Button from '../../components/Button/Button';
import { useState } from 'react';

type TFormFields = 'title' | 'description' | 'location' | 'price';

interface IFormValue {
  title: string;
  description: string;
  photo: File | null;
  location: string;
  price: string;
}

const initFormValue: IFormValue = {
  title: '',
  description: '',
  photo: null,
  location: '',
  price: '',
};

const ShareYourTour = () => {
  const [formValue, setFormValue] = useState(initFormValue);

  const onChange = (field: TFormFields) => {
    return (value: string) =>
      setFormValue(s => {
        const newState = { ...s, [field]: value };
        return newState;
      });
  };

  const onFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files && e.target.files[0];

    setFormValue(s => {
      const newState = { ...s, photo: file };
      return newState;
    });
  };

  const onSubmit = () => {
    // submit tour
    console.log(formValue);
  };

  return (
    <section>
      <div className="container">
        <h2 className={s.title}>Share your tour</h2>

        <form className={s.form} onSubmit={e => e.preventDefault()}>
          <ImgInput onChange={onFileChange} />

          <div className={s.inp_wrap}>
            <label className={s.inp_label}>
              Title:
              <Input
                text="Write tour title..."
                value={formValue.title}
                setValue={onChange('title')}
              />
            </label>

            <label className={s.inp_label}>
              Description:
              <Input
                text="Write a description..."
                value={formValue.description}
                setValue={onChange('description')}
              />
            </label>

            <label className={s.inp_label}>
              Location:
              <Input
                text="Write a location..."
                value={formValue.location}
                setValue={onChange('location')}
              />
            </label>

            <label className={s.inp_label}>
              Price:
              <Input
                text="Write a price..."
                value={formValue.price}
                setValue={onChange('price')}
              />
            </label>
            <Button className={s.btn} onClick={onSubmit}>
              Share your tour
            </Button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default ShareYourTour;
