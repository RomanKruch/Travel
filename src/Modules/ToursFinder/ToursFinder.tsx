import s from './ToursFinder.module.css';
import tours from '../../data/tours.json';
import ITourItem from '../../types/ITourItem';
import TourItem from '../../components/TourItem/TourItem';
import { useState } from 'react';
import Input from '../../components/Input/Input';
import RangeInput from '../../components/RangeInput/RangeInput';
import Button from '../../components/Button/Button';

type TFormFields = 'title' | 'location' | 'price';

interface IFormValue {
  title: string;
  location: string;
  price: number;
}

const initFormValue: IFormValue = {
  title: '',
  location: '',
  price: 2500,
};

const ToursFinder = () => {
  const [filteredTours, setFilteredTours] = useState<ITourItem[]>(tours);
  const [formValue, setFormValue] = useState(initFormValue);

  const onChange = (field: TFormFields) => {
    return (value: string | number) =>
      setFormValue(s => {
        const newState = { ...s, [field]: value };
        return newState;
      });
  };

  // const filter = () => {
  //   setFilteredTours(() => {
  //     const filtered = tours.filter(tour =>
  //       tour.title.toLowerCase().includes(value.toLowerCase()),
  //     );
  //     return filtered;
  //   });
  // };

  const onSubmit = () => {
    const filtered = tours.filter(
      tour =>
        tour.title.toLowerCase().includes(formValue.title.toLowerCase()) &&
        tour.location
          .toLowerCase()
          .includes(formValue.location.toLowerCase()) &&
        tour.price <= formValue.price,
    );

    setFilteredTours(filtered);
  };

  const onReset = () => {
    setFilteredTours(tours);
    setFormValue(initFormValue);
  };

  return (
    <section className={s.section}>
      <div className={`container ${s.wrap}`}>
        <form onSubmit={e => e.preventDefault()} className={s.form}>
          <label className={s.label}>
            Filter by name:
            <Input
              text="Write name of tour..."
              value={formValue.title}
              setValue={onChange('title')}
            />
          </label>

          <label className={s.label}>
            Filter by location:
            <Input
              text="Write location of tour..."
              value={formValue.location}
              setValue={onChange('location')}
            />
          </label>

          <label className={s.label}>
            Filter by price:
            <Input
              value={formValue.price}
              setValue={onChange('price')}
              number={true}
            />
            <RangeInput
              value={formValue.price}
              setValue={onChange('price')}
              maxValue={2500}
            />
          </label>

          <div className={s.btn_wrap}>
            <Button onClick={onReset}>Reset</Button>
            <Button onClick={onSubmit}>Find</Button>
          </div>
        </form>

        <ul className={s.list}>
          {filteredTours.map(item => (
            <TourItem item={item} key={item.id} />
          ))}
        </ul>
      </div>
    </section>
  );
};

export default ToursFinder;
