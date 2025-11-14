export interface Room {
  id: string
  title: string
  description: string
  location: {
    city: string
    state: string
    address: string
  }
  pricePerNight: number
  images: string[]
  amenities: string[]
  bedrooms: number
  bathrooms: number
  maxGuests: number
  propertyType: string
  rating: number
  reviewCount: number
  host: {
    name: string
    avatar: string
    isSuperHost: boolean
  }
  availableDates: string[]
  rules: string[]
}

export interface RoomFilters {
  location?: string
  checkIn?: Date
  checkOut?: Date
  priceMin?: number
  priceMax?: number
  bedrooms?: number
  bathrooms?: number
  amenities?: string[]
  propertyType?: string
}

