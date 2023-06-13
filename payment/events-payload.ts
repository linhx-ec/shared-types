import { PaymentStatus } from './payment.types';

export interface PaymentPaidEvent {
  status: PaymentStatus;
  orderId: string;
  id: string;
}
