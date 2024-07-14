import { AspectRatio } from "@radix-ui/react-aspect-ratio"
import {
    Carousel,
    Content,
    NavigationButtons,
    Slide,
} from "../../components/carousel"

export const Artworks = () => {
    return (
        <>
            <div id="artworks" />
            <div className="mt-24 flex w-full flex-col items-center gap-16 pb-36">
                <h1>Artworks</h1>

                <div className="flex w-full flex-col gap-8">
                    <Carousel
                        slidesNumber={4}
                        loop
                        slidesGap={"1rem"}
                        scale={1.1}
                    >
                        <NavigationButtons />

                        <Content>
                            <Slide>
                                <AspectRatio ratio={1}>1</AspectRatio>
                            </Slide>
                            <Slide>
                                <AspectRatio ratio={1}>2</AspectRatio>
                            </Slide>
                            <Slide>
                                <AspectRatio ratio={1}>3</AspectRatio>
                            </Slide>
                            <Slide>
                                <AspectRatio ratio={1}>4</AspectRatio>
                            </Slide>
                            <Slide>
                                <AspectRatio ratio={1}>5</AspectRatio>
                            </Slide>
                        </Content>
                    </Carousel>
                </div>
            </div>
        </>
    )
}
