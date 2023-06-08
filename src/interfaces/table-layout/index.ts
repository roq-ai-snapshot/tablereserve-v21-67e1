import { ReservationInterface } from 'interfaces/reservation';
import { RestaurantInterface } from 'interfaces/restaurant';

export interface TableLayoutInterface {
  id?: string;
  name: string;
  restaurant_id: string;
  created_at?: Date;
  updated_at?: Date;
  reservation?: ReservationInterface[];
  restaurant?: RestaurantInterface;
  _count?: {
    reservation?: number;
  };
}
