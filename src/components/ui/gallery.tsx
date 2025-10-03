"use client"

import Image from 'next/image'
import { useState } from 'react'
import { Dialog, DialogContent, DialogTrigger } from '@/components/ui/dialog'
import { ChevronLeft, ChevronRight, X } from 'lucide-react'

interface GalleryProps {
  images: {
    src: string
    alt: string
    title?: string
  }[]
  columns?: number
  className?: string
}

export default function Gallery({ images, columns = 4, className = "" }: GalleryProps) {
  const [selectedImage, setSelectedImage] = useState<number | null>(null)

  const nextImage = () => {
    if (selectedImage !== null) {
      setSelectedImage((selectedImage + 1) % images.length)
    }
  }

  const prevImage = () => {
    if (selectedImage !== null) {
      setSelectedImage((selectedImage - 1 + images.length) % images.length)
    }
  }

  const gridCols = {
    2: 'grid-cols-2',
    3: 'grid-cols-2 md:grid-cols-3',
    4: 'grid-cols-2 md:grid-cols-3 lg:grid-cols-4',
    5: 'grid-cols-2 md:grid-cols-3 lg:grid-cols-5'
  }[columns] || 'grid-cols-2 md:grid-cols-3 lg:grid-cols-4'

  return (
    <div className={`space-y-4 ${className}`}>
      <div className={`grid gap-4 ${gridCols}`}>
        {images.map((image, index) => (
          <Dialog key={index}>
            <DialogTrigger asChild>
              <div 
                className="relative aspect-square cursor-pointer overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 group"
                onClick={() => setSelectedImage(index)}
              >
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                  sizes="(max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300 flex items-center justify-center">
                  <div className="text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-center">
                    <p className="text-sm font-medium">{image.title || 'View Image'}</p>
                  </div>
                </div>
              </div>
            </DialogTrigger>
            <DialogContent className="max-w-4xl max-h-[90vh] p-0 bg-black/90 border-none">
              <div className="relative w-full h-full flex items-center justify-center">
                <button
                  onClick={prevImage}
                  className="absolute left-4 z-10 p-2 text-white hover:bg-white/20 rounded-full transition-colors"
                  aria-label="Previous image"
                >
                  <ChevronLeft className="h-6 w-6" />
                </button>
                <button
                  onClick={nextImage}
                  className="absolute right-4 z-10 p-2 text-white hover:bg-white/20 rounded-full transition-colors"
                  aria-label="Next image"
                >
                  <ChevronRight className="h-6 w-6" />
                </button>
                <button
                  onClick={() => setSelectedImage(null)}
                  className="absolute top-4 right-4 z-10 p-2 text-white hover:bg-white/20 rounded-full transition-colors"
                  aria-label="Close"
                >
                  <X className="h-6 w-6" />
                </button>
                <div className="relative w-full h-[80vh]">
                  <Image
                    src={images[selectedImage || 0].src}
                    alt={images[selectedImage || 0].alt}
                    fill
                    className="object-contain"
                    sizes="90vw"
                  />
                </div>
                <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 text-white text-center">
                  <p className="text-sm opacity-80">
                    {(selectedImage || 0) + 1} / {images.length}
                  </p>
                  {images[selectedImage || 0].title && (
                    <p className="text-lg font-medium mt-1">
                      {images[selectedImage || 0].title}
                    </p>
                  )}
                </div>
              </div>
            </DialogContent>
          </Dialog>
        ))}
      </div>
    </div>
  )
}