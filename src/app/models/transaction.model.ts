import { KindType } from './kind';

export interface Transaction {
  id: number;
  'beneficiary-name': string;
  date: Date;
  direction: 'd' | 'c';
  amount: string;
  description: string;
  currency: 'USD';
  mcc: number;
  kind: KindType;
  category: string;
}
