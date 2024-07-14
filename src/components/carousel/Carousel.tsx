import { CaretLeft, CaretRight, IconContext } from "@phosphor-icons/react"
import { EmblaCarouselType } from "embla-carousel"
import useEmblaCarousel, { UseEmblaCarouselType } from "embla-carousel-react"
import {
    createContext,
    CSSProperties,
    PropsWithChildren,
    useCallback,
    useContext,
    useEffect,
    useState,
} from "react"
import { getCSSVal, ItemList, useListItem } from "../../utils"

interface CarouselProps extends PropsWithChildren {
    slidesGap?: number | string
    slidesNumber?: number
    loop?: boolean
    scale?: number
}

interface CarouselContextType {
    inViewIndex: number | null
    emblaRef: UseEmblaCarouselType[0]
    emblaAPI: EmblaCarouselType | undefined
}
const CarouselContext = createContext<CarouselContextType>(
    {} as CarouselContextType
)

export const Carousel = (props: CarouselProps) => {
    const {
        children,
        slidesGap = "1rem",
        slidesNumber = 1,
        loop = false,
        scale = 1,
    } = props

    const [currentIndex, setCurrentIndex] = useState<number | null>(null)

    const [emblaRef, emblaAPI] = useEmblaCarousel({ loop, inViewThreshold: 1 })

    const handleCurrentIndex = useCallback((emblaAPI: EmblaCarouselType) => {
        setCurrentIndex(emblaAPI.selectedScrollSnap())
    }, [])

    useEffect(() => {
        if (emblaAPI) {
            emblaAPI.on("select", handleCurrentIndex)
            emblaAPI.on("init", handleCurrentIndex)
        }
    }, [emblaAPI, handleCurrentIndex])

    return (
        <div
            className="dino-carousel"
            style={
                {
                    "--dino-carousel-slide-gap": getCSSVal(slidesGap),
                    "--dino-carousel-slide-number": slidesNumber,
                    "--dino-carousel-slide-scale": scale,
                } as CSSProperties
            }
        >
            <CarouselContext.Provider
                value={{ inViewIndex: currentIndex, emblaAPI, emblaRef }}
            >
                {children}
            </CarouselContext.Provider>
        </div>
    )
}

interface ContentProps extends PropsWithChildren {}

export const Content = (props: ContentProps) => {
    const { children } = props

    const { emblaRef } = useContext(CarouselContext)

    return (
        <div className="dino-carousel-wrapper" ref={emblaRef}>
            <div className="dino-carousel-container">
                <ItemList>{children}</ItemList>
            </div>
        </div>
    )
}

interface SlideProps extends PropsWithChildren {}

export const Slide = (props: SlideProps) => {
    const { children } = props

    const { index, ref } = useListItem()
    const { inViewIndex } = useContext(CarouselContext)

    return (
        <div className="dino-carousel-slide">
            <div className="p-8">
                <div
                    className="dino-carousel-content"
                    data-active={index === inViewIndex}
                    ref={ref}
                >
                    {children}
                </div>
            </div>
        </div>
    )
}

export const NavigationButtons = () => {
    const { emblaAPI } = useContext(CarouselContext)

    const handlePrev = useCallback(() => {
        if (emblaAPI) emblaAPI.scrollPrev()
    }, [emblaAPI])

    const handleNext = useCallback(() => {
        if (emblaAPI) emblaAPI.scrollNext()
    }, [emblaAPI])

    return (
        <div className="dino-carousel-nav-buttons">
            <IconContext.Provider value={{ size: 24, weight: "bold" }}>
                <button className="btn" onClick={handlePrev}>
                    <CaretLeft />
                </button>

                <button className="btn" onClick={handleNext}>
                    <CaretRight />
                </button>
            </IconContext.Provider>
        </div>
    )
}
