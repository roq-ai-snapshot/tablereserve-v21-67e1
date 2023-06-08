import * as yup from 'yup';
import { reservationValidationSchema } from 'validationSchema/reservations';

export const customerValidationSchema = yup.object().shape({
  preferences: yup.string(),
  user_id: yup.string().nullable().required(),
  reservation: yup.array().of(reservationValidationSchema),
});
