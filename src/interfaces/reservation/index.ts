import { CustomerInterface } from 'interfaces/customer';
import { TableLayoutInterface } from 'interfaces/table-layout';

export interface ReservationInterface {
  id?: string;
  customer_id: string;
  table_layout_id: string;
  status: string;
  reservation_time: Date;
  created_at?: Date;
  updated_at?: Date;

  customer?: CustomerInterface;
  table_layout?: TableLayoutInterface;
  _count?: {};
}
