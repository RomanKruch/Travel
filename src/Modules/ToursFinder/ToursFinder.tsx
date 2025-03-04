import s from './ToursFinder.module.css';
import ITourItem from '../../types/ITourItem';
import { useEffect, useState } from 'react';
import Input from '../../components/Input/Input';
import RangeInput from '../../components/RangeInput/RangeInput';
import Button from '../../components/Button/Button';
import Pagination from '../../components/Pagination/Pagination';
import { useSearchParams } from 'react-router-dom';
import axios from 'axios';
import ToursList from '../../components/ToursList/ToursList';
import Loader from '../../components/Loader/Loader';

type TFormFields = 'title' | 'location' | 'price';

interface IParams {
  title: string;
  location: string;
  price: number;
}

const initParams: IParams = {
  title: '',
  location: '',
  price: 2500,
};

const ToursFinder = () => {
  const [tours, setTours] = useState<ITourItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [totalPages, setTotalPages] = useState(1);

  const [params, setParams] = useState(initParams);
  const [page, setPage] = useState(1);

  const [query] = useSearchParams();

  useEffect(() => {
    const des = query.get('des');
    const loc = query.get('loc');
    const localParams = initParams;

    if (des) {
      localParams.title = des;
      onChange('title')(des);
    }
    if (loc) {
      localParams.location = loc;
      onChange('location')(loc);
    }

    fetchTours(page, localParams);
  }, []);

  useEffect(() => {
    fetchTours(page, params);
  }, [page]);

  const fetchTours = async (page = 1, params: IParams) => {
    try {
      setLoading(true);
      const { data } = await axios.get('/tours', { params: { page, ...params } });
      setTours(data.tours);
      setTotalPages(data.totalPages);
    } catch (error) {
      console.error('Error fetching tours:', error);
    } finally {
      setLoading(false);
    }
  };

  const onChange = (field: TFormFields) => {
    return (value: string | number) =>
      setParams(s => {
        const newState = { ...s, [field]: value };
        return newState;
      });
  };

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    fetchTours(page, params);
  };

  const onReset = () => {
    setParams(initParams);
    fetchTours(page, initParams);
  };

  return (
    <section className={s.section}>
      <div className={`container ${s.wrap}`}>
        <form onSubmit={onSubmit} className={s.form}>
          <label className={s.label}>
            Filter by name:
            <Input text="Write name of tour..." value={params.title} setValue={onChange('title')} />
          </label>

          <label className={s.label}>
            Filter by location:
            <Input
              text="Write location of tour..."
              value={params.location}
              setValue={onChange('location')}
            />
          </label>

          <label className={s.label}>
            Filter by price:
            <Input value={params.price} setValue={onChange('price')} number={true} />
            <RangeInput value={params.price} setValue={onChange('price')} maxValue={2500} />
          </label>

          <div className={s.btn_wrap}>
            <Button onClick={onReset}>Reset</Button>
            <Button type="submit">Find</Button>
          </div>
        </form>

        {loading ? <Loader /> : <ToursList tours={tours} />}

        <Pagination page={page} setPage={setPage} totalPages={totalPages} />
      </div>
    </section>
  );
};

export default ToursFinder;
