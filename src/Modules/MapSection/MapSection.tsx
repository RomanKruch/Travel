import s from './MapSection.module.css';
import { Map, AdvancedMarker, Pin, ColorScheme } from '@vis.gl/react-google-maps';
import { useAppSelector } from '../../redux/hooks';
import { useNavigate } from 'react-router-dom';
import Title from '../../components/Title/Title';
import { useEffect, useState } from 'react';
import axios from 'axios';

interface ICords {
  _id: string;
  cords: {
    lat: number;
    lng: number;
  };
}

const MapSection = () => {
  const [cords, setCords] = useState<ICords[]>([]);

  useEffect(() => {
    fetchCords();
  }, []);

  const fetchCords = async () => {
    try {
      const { data } = await axios.get('/tours/cords');
      setCords(data);
    } catch (error) {
      console.error('Error fetching tours:', error);
    }
  };

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
        {cords.map(item => (
          <AdvancedMarker position={item.cords} onClick={onPinClick(item._id)} key={item._id}>
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
