interface ICords {
    lat: number;
    lng: number;
}

interface ITourItem {
    title: string;
    description: string;
    photo: string;
    location: string;
    price: number;
    _id: string;
    cords: ICords
}

export default ITourItem;