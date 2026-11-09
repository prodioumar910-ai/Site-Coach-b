export interface Program {
  id: string;
  title: string;
  tagline: string;
  description: string;
  features: string[];
  duration: string;
  image: string;
  popular?: boolean;
}

export interface TipArticle {
  id: string;
  category: 'FITNESS TIPS' | 'NUTRITION TIPS' | 'WELLNESS TIPS';
  title: string;
  subtitle: string;
  readTime: string;
  excerpt: string;
  keyPoints: string[];
}

export interface TransformationStory {
  id: string;
  clientName: string;
  role: string;
  achievement: string;
  timeframe: string;
  quote: string;
  details: string;
}

export interface BookingFormData {
  fullName: string;
  email: string;
  phone: string;
  coachingInterest: string;
  preferredTime: string;
  message: string;
}
