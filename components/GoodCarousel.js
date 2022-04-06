import {React,useEffect} from 'react'
import useEmblaCarousel from 'embla-carousel-react'

export default function GoodCarousel(props){
    const [viewportRef,embla] = useEmblaCarousel({
        dragFree: false,
        containScroll: "trimSnaps",
        align: 'center'
    })
    

  return (
    <div className="embla good-carousel">
      <div className="embla__viewport" ref={viewportRef}>
        <div className="embla__container">
          {props.children}
        </div>
      </div>
    </div>
  )
}