import s from './TourModal.module.css';
import { Map, AdvancedMarker, Pin, ColorScheme } from '@vis.gl/react-google-maps';
import Modal from '../Modal/Modal';
import { useNavigate, useParams, useLocation, Navigate } from 'react-router-dom';
import data from '../../data/tours';
import { useAppSelector } from '../../redux/hooks';
import LikeBtn from '../LikeBtn/LikeBtn';

const TourModal = () => {
  const { id } = useParams();
  const tour = data.find(tour => tour.id === id);
  const navigate = useNavigate();

  // const { description, location, photo, price, title, cords } = tour;

  const routeLocation = useLocation();
  const path = routeLocation.state?.from || '/';

  const isDark = useAppSelector(s => s.theme.isDark);

  const theme = isDark ? ColorScheme.DARK : ColorScheme.LIGHT;

  const onClose = () => {
    navigate(path);
  };

  return tour ? (
    <Modal onClose={onClose}>
      <div className={s.wrap}>
        <div className={s.img_wrap}>
          <img src={tour.photo} alt={tour.title} className={s.img} />
          <LikeBtn id={id!} classname={s.like} />
        </div>

        <div className={s.content_wrap}>
          <h3 className={s.title}>{tour.title}</h3>
          <p className={s.description}>{tour.description}</p>
          <p className={s.description}>Location: {tour.location}.</p>
          <div className={s.map_wrap}>
            <Map
              className={s.map}
              defaultCenter={tour.cords}
              defaultZoom={8}
              disableDefaultUI={true}
              mapId={'39680ac205a82f46'}
              colorScheme={theme}
            >
              <AdvancedMarker position={tour.cords}>
                <Pin
                  background={'var(--hover)'}
                  borderColor={'var(--text_color)'}
                  glyphColor={'var(--background_color)'}
                />
              </AdvancedMarker>
            </Map>
          </div>
          <p className={s.price}>${tour.price}</p>
        </div>
      </div>
    </Modal>
  ) : (
    <Navigate to="/" />
  );
};

export default TourModal;
