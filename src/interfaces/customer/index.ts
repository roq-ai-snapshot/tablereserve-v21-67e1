import { ReservationInterface } from 'interfaces/reservation';
import { UserInterface } from 'interfaces/user';

export interface CustomerInterface {
  id?: string;
  user_id: string;
  preferences?: string;
  created_at?: Date;
  updated_at?: Date;
  reservation?: ReservationInterface[];
  user?: UserInterface;
  _count?: {
    reservation?: number;
  };
}
