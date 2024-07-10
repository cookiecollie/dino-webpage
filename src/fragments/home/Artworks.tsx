import {
    Carousel,
    Content,
    NavigationButtons,
    Slide,
} from "../../components/carousel"

export const Artworks = () => {
    return (
        <>
            <span id="artworks" />
            <div className="flex w-full flex-col items-center gap-16 py-36">
                <h1>Artworks</h1>

                <div className="flex w-full flex-col gap-8">
                    <Carousel
                        slidesNumber={4}
                        loop
                        slidesGap={"1rem"}
                        scale={1.2}
                    >
                        <NavigationButtons
                            nextCallback={() => {}}
                            prevCallback={() => {}}
                        />

                        <Content>
                            <Slide>
                                <div className="aspect-square w-full">1</div>
                            </Slide>
                            <Slide>2</Slide>
                            <Slide>3</Slide>
                            <Slide>4</Slide>
                            <Slide>5</Slide>
                        </Content>
                    </Carousel>
                </div>
            </div>
        </>
    )
}
