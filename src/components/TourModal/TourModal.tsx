import s from './TourModal.module.css';
// import ITourItem from '../../types/ITourItem';
import {
  Map,
  AdvancedMarker,
  Pin,
  ColorScheme,
} from '@vis.gl/react-google-maps';
import Modal from '../Modal/Modal';
import { useNavigate, useParams } from 'react-router-dom';

import data from '../../data/tours.json';

const TourModal = () => {
  const { id } = useParams();

  const tour = data.find(tour => tour.id === id)!;

  const { description, location, photo, price, title, cords } = tour;

  const navigate = useNavigate();

  const onClose = () => {
    navigate('/tours');
  };

  return (
    <Modal onClose={onClose}>
      <div className={s.wrap}>
        <img src={photo} alt={title} className={s.img} />

        <div className={s.content_wrap}>
          <h3 className={s.title}>{title}</h3>
          <p className={s.description}>{description}</p>
          <p className={s.description}>Location: {location}.</p>
          <div className={s.map_wrap}>
            <Map
              className={s.map}
              defaultCenter={cords}
              defaultZoom={8}
              disableDefaultUI={true}
              mapId={'39680ac205a82f46'}
              colorScheme={ColorScheme.LIGHT}
            >
              <AdvancedMarker position={cords}>
                <Pin
                  background={'var(--hover)'}
                  borderColor={'var(--text_color)'}
                  glyphColor={'var(--background_color)'}
                />
              </AdvancedMarker>
            </Map>
          </div>
          <p className={s.price}>${price}</p>
        </div>
      </div>
    </Modal>
  );
};

export default TourModal;
