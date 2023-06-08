import * as yup from 'yup';

export const reservationValidationSchema = yup.object().shape({
  status: yup.string().required(),
  reservation_time: yup.date().required(),
  customer_id: yup.string().nullable().required(),
  table_layout_id: yup.string().nullable().required(),
});
