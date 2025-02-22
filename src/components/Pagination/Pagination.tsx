import Button from '../Button/Button';
import s from './Pagination.module.css';

interface IProps {
  page: number;
  totalPages: number;
  setPage: React.Dispatch<React.SetStateAction<number>>;
}

const Pagination = ({ page, totalPages, setPage }: IProps) => {
  const onPagination = (count: number) => {
    return () =>
      setPage(s => {
        if (s + count > 0 && s + count <= totalPages) {
          return s + count;
        }
        return s;
      });
  };

  return (
    <div className={s.wrap}>
      <Button onClick={onPagination(-1)} disabled={page - 1 === 0}>
        {'<'}
      </Button>
      <Button disabled={true}>{`${page}`}</Button>
      <Button onClick={onPagination(1)} disabled={page === totalPages}>
        {'>'}
      </Button>
    </div>
  );
};

export default Pagination;
