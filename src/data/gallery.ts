export interface GalleryImage {
  src: string
  alt: string
  title: string
  category: string
}

export const galleryImages: GalleryImage[] = [
  {
    src: '/gallery/model-01.jpg',
    alt: 'Hyderabad Escort Service - Professional High Profile Model',
    title: 'Elite Escort Model',
    category: 'high-profile'
  },
  {
    src: '/gallery/model-02.jpg',
    alt: 'VIP Escort Service Hyderabad - Beautiful Independent Woman',
    title: 'VIP Independent Escort',
    category: 'vip'
  },
  {
    src: '/gallery/model-03.jpg',
    alt: 'Premium Escort Hyderabad - Sophisticated Companion',
    title: 'Premium Companion',
    category: 'premium'
  },
  {
    src: '/gallery/model-04.jpg',
    alt: 'Hyderabad Call Girls - Professional Escort Service',
    title: 'Professional Escort',
    category: 'high-profile'
  },
  {
    src: '/gallery/model-05.jpg',
    alt: 'Elite Escort Service - Luxury Companion Hyderabad',
    title: 'Luxury Elite Model',
    category: 'elite'
  },
  {
    src: '/gallery/model-06.jpg',
    alt: 'High Class Escort Hyderabad - Beautiful Model',
    title: 'High Class Beauty',
    category: 'high-profile'
  },
  {
    src: '/gallery/model-07.jpg',
    alt: 'VIP Call Girls Hyderabad - Premium Service',
    title: 'VIP Premium Model',
    category: 'vip'
  },
  {
    src: '/gallery/model-08.jpg',
    alt: 'Independent Escort Hyderabad - Professional Companion',
    title: 'Independent Professional',
    category: 'independent'
  },
  {
    src: '/gallery/model-09.jpg',
    alt: 'Hyderabad Escort Girls - Elite Service Provider',
    title: 'Elite Service Model',
    category: 'elite'
  },
  {
    src: '/gallery/model-10.jpg',
    alt: 'Premium Call Girls - High Profile Escort Hyderabad',
    title: 'Premium High Profile',
    category: 'premium'
  },
  {
    src: '/gallery/model-11.jpg',
    alt: 'Luxury Escort Service - Beautiful Companion Hyderabad',
    title: 'Luxury Companion',
    category: 'luxury'
  },
  {
    src: '/gallery/model-12.jpg',
    alt: 'High Profile Escort - VIP Service Hyderabad',
    title: 'VIP High Profile',
    category: 'vip'
  },
  {
    src: '/gallery/model-13.jpg',
    alt: 'Elite Call Girls Hyderabad - Premium Escort Service',
    title: 'Elite Premium Model',
    category: 'elite'
  },
  {
    src: '/gallery/model-14.jpg',
    alt: 'Professional Escort Hyderabad - High Class Service',
    title: 'Professional High Class',
    category: 'professional'
  },
  {
    src: '/gallery/model-15.jpg',
    alt: 'VIP Escort Girls - Luxury Service Hyderabad',
    title: 'VIP Luxury Model',
    category: 'vip'
  },
  {
    src: '/gallery/model-16.jpg',
    alt: 'Independent Call Girls - Premium Escort Hyderabad',
    title: 'Independent Premium',
    category: 'independent'
  },
  {
    src: '/gallery/model-17.jpg',
    alt: 'High Profile Call Girls - Elite Escort Hyderabad',
    title: 'High Profile Elite',
    category: 'high-profile'
  },
  {
    src: '/gallery/model-18.jpg',
    alt: 'Luxury Call Girls - VIP Escort Service Hyderabad',
    title: 'Luxury VIP Model',
    category: 'luxury'
  },
  {
    src: '/gallery/model-19.jpg',
    alt: 'Premium Escort Girls - High Class Service Hyderabad',
    title: 'Premium High Class',
    category: 'premium'
  },
  {
    src: '/gallery/model-20.jpg',
    alt: 'Elite Escort Models - Professional Service Hyderabad',
    title: 'Elite Professional',
    category: 'elite'
  }
]

export const getImagesByCategory = (category: string) => {
  return galleryImages.filter(image => image.category === category)
}

export const getFeaturedImages = (count: number = 8) => {
  return galleryImages.slice(0, count)
}