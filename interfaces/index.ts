export interface CardProps {
  title: string;
  imageSrc: string;
  description?: string;
  onClick?: () => void;
}

export interface ButtonProps {
  label: string;
  onClick: () => void;
  variant?: 'primary' | 'secondary';
}
export interface Review {
  name: string;
  avatar: string;
  rating: number; // from 1 to 5
  comment: string;
  date?: string;
}
export interface PropertyProps {
  name: string,
  description: string,
  address: {
    state: string,
    city: string,
    country: string
  },
  reviews?: Review[],
  category: string[],
  price: number
  offers: {
    bed: string,
    shower: string,
    occupants: string
  },
  image: string,
  discount: string
}