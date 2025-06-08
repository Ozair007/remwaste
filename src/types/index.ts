export interface RawSkip {
  id: number;
  size: number;
  price_before_vat: number;
  short_description?: string;
  vat: number;
  hire_period_days: number;
}

export interface Skip {
  id: number;
  name: string;
  price: number;
  days_included: number;
  short_description: string;
  size: number;
  price_before_vat: number;
  vat: number;
}
