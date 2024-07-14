export const About = () => {
    return (
        <>
            <span className="h-0" id="about" />
            <div className="mt-36 grid grid-cols-5 px-64 pb-36">
                <div className="col-span-3 flex flex-col gap-12 px-8">
                    <h2>About</h2>

                    <div className="flex flex-col gap-8 text-h5">
                        <p>
                            Hey, welcome to my little site! I&apos;m Nikko, a
                            self-employed artist who draws cute furry critters,
                            and also an occasional streamer.
                        </p>

                        <p>
                            I started my journey back in 2020, when I got my
                            very first Wacom tablet.
                        </p>

                        <p>
                            I love what I&apos;m doing. Seeing all my friends
                            happy is the motivation that keeps me moving. Love
                            y&apos;all, and thanks for visiting!
                        </p>
                    </div>
                </div>

                <div className="col-span-2 flex items-center px-8">
                    <div className="aspect-[3/4] w-full bg-surface-primary" />
                </div>
            </div>
        </>
    )
}
