import { ImageCarousel } from '@/components'


const slides = [
  'https://picsum.photos/id/666/1080/480',
  'https://picsum.photos/id/76/1080/480',
  'https://picsum.photos/id/66/1080/480',
]


export const CarouselArrowDots = () => {

  return (
   <ImageCarousel slides={slides} />
  )
}
