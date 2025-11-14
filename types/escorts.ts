export interface Escort {
  id: string
  name: string
  age: number
  description: string
  location: {
    city: string
    state: string
    neighborhood?: string
  }
  photos: string[]
  videos?: string[]
  services: string[]
  pricing: {
    hour: number
    halfHour?: number
    night?: number
    weekend?: number
  }
  physicalAttributes: {
    height?: string
    weight?: string
    bodyType?: string
    hairColor?: string
    eyeColor?: string
    ethnicity?: string
    footSize?: string
    hasSilicone?: boolean
    hasTattoos?: boolean
    hasPiercings?: boolean
    gender?: string
    genitalia?: string
    sexualPreference?: string
    hairStyle?: string
    hairSize?: string
    smoker?: string
  }
  rating: number
  reviewCount: number
  verified: boolean
  premium: boolean
  available: boolean
  languages?: string[]
  // Aluguel por temporada
  rentalAvailable?: boolean
  rentalPricing?: {
    perNight?: number
    perWeek?: number
    perMonth?: number
  }
  rentalAmenities?: string[]
  rentalRules?: string[]
}

export interface EscortFilters {
  location?: string
  priceMin?: number
  priceMax?: number
  verified?: boolean
  premium?: boolean
  available?: boolean
  services?: string[]
  physicalAttributes?: {
    bodyType?: string
    hairColor?: string
  }
}

