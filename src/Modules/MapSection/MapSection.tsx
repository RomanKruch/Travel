import s from './MapSection.module.css';
import data from '../../data/tours.json';
import { Map, AdvancedMarker, Pin, ColorScheme } from '@vis.gl/react-google-maps';
import { useAppSelector } from '../../redux/hooks';
import { useNavigate } from 'react-router-dom';
import Title from '../../components/Title/Title';

const MapSection = () => {
  const navigate = useNavigate();

  const isDark = useAppSelector(s => s.theme.isDark);

  const theme = isDark ? ColorScheme.DARK : ColorScheme.LIGHT;

  const onPinClick = (id: string) => {
    return () => navigate(`/${id}`, { state: { from: '/' } });
  };
  return (
    <section>
      <Title>All tours on MAP</Title>

      <Map
        className={s.map}
        defaultCenter={{
          lat: 0,
          lng: 0,
        }}
        defaultZoom={3}
        disableDefaultUI={true}
        mapId={'39680ac205a82f46'}
        colorScheme={theme}
      >
        {data.map(tour => (
          <AdvancedMarker position={tour.cords} onClick={onPinClick(tour.id)} key={tour.id}>
            <Pin
              background={'var(--hover)'}
              borderColor={'var(--text_color)'}
              glyphColor={'var(--background_color)'}
            />
          </AdvancedMarker>
        ))}
      </Map>
    </section>
  );
};

export default MapSection;
