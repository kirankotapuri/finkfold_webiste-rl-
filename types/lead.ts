export interface LeadFormData {
  full_name: string;
  whatsapp: string;
  business_name: string;
  country: string;
  monthly_revenue: string;
  biggest_challenge: string;
  referral_source: string;
  extra_details: string;
  utm_source: string;
  utm_medium: string;
  utm_campaign: string;
  page_url: string;
}

export interface LeadRecord extends LeadFormData {
  id: string;
  created_at: string;
  status: string;
  notes: string | null;
}

export interface ApiResponse {
  success: boolean;
  message: string;
  lead_id?: string;
  errors?: Record<string, string>;
}
