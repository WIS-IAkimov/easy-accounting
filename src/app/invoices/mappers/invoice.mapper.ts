export interface IInvoiceResponse {
  id: string;
  company_name: string;
  company_address: string;
  billing_company_name: string;
  billing_address: string;
  subTotal: number;
  tax: number;
  paid_amount: number;
  total: number;

  billing_note?: string;
}

export interface IInvoice {
  companyName: string;
  companyAddress: string;
  billingCompanyName: string;
  billingAddress: string;
  subTotal: number;
  tax: number;
  paidAmount: number;
  total: number;

  id?: string;
  billingNote?: string;
}

export class InvoiceMapper {
  public static fromJson(data: IInvoiceResponse): IInvoice {
    return ({
      id: data.id,
      companyName: data.company_name,
      companyAddress: data.company_address,
      billingCompanyName: data.billing_company_name,
      billingAddress: data.billing_address,
      billingNote: data.billing_note,
      subTotal: data.subTotal,
      tax: data.tax,
      paidAmount: data.paid_amount,
      total: data.total,
    })
  }
}
