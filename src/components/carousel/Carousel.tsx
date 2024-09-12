import { EmblaOptionsType } from "embla-carousel"
import useEmbleCarousel from "embla-carousel-react"
import { Children, CSSProperties, PropsWithChildren } from "react"

interface CarouselProps
    extends PropsWithChildren,
        Pick<EmblaOptionsType, "align" | "loop" | "skipSnaps"> {
    slidesInView?: number
}

export const Carousel = (props: CarouselProps) => {
    const {
        children,
        slidesInView = 1,
        align = "center",
        loop = false,
        skipSnaps = false,
    } = props
    const [carouselRef] = useEmbleCarousel({ align, loop, skipSnaps })

    const childrenCount = Children.count(children)

    return (
        <div
            className="dino-carousel"
            ref={carouselRef}
            style={
                {
                    "--slides-in-view":
                        slidesInView < childrenCount
                            ? slidesInView
                            : childrenCount,
                } as CSSProperties
            }
        >
            <div className="dino-carousel-container">{children}</div>
        </div>
    )
}

interface CarouselSlideProps extends PropsWithChildren {}

export const Slide = (props: CarouselSlideProps) => {
    const { children } = props
    return <div className="dino-carousel-slide">{children}</div>
}
