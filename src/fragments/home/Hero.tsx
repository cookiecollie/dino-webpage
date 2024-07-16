import { ArrowRight } from "@phosphor-icons/react"
import { CSSProperties, useState } from "react"
import { DynamicIsland } from "../../components/dynamic-island"

const CTA = ({ islandFixed }: { islandFixed: boolean }) => {
    return (
        <a
            className="dino-hero-cta relative flex w-32 justify-between overflow-hidden"
            href={`#${islandFixed ? "" : "about"}`}
            style={
                {
                    "--dino-cta-fixed": islandFixed ? 1 : 0,
                } as CSSProperties
            }
        >
            <span className="cta-text absolute [&>p]:flex [&>p]:h-10 [&>p]:items-center [&>p]:justify-center">
                <p>Let&apos;s Start</p>
                <p>Back To Top</p>
            </span>

            <span />

            <span className="cta-icon flex h-10 items-center">
                <ArrowRight size={18} weight="bold" />
            </span>
        </a>
    )
}

export const Hero = () => {
    const [dynaIslandPinned, setDynaIslandPinned] = useState(false)

    return (
        <div className="flex h-[100vh] flex-col items-center justify-center gap-12">
            <div className="flex flex-col items-center gap-4">
                <h1>
                    Hi there, I&apos;m{" "}
                    <span className="text-default-primary">Nikko!</span>
                </h1>

                <h4>Fancy seeing you here!</h4>
            </div>

            <DynamicIsland
                cta={<CTA islandFixed={dynaIslandPinned} />}
                paddingTop={32}
                contentWidth="16rem"
                onFixed={() => setDynaIslandPinned(true)}
                onUnfixed={() => setDynaIslandPinned(false)}
            >
                <a href="#about">About</a>
                <a href="#artworks">Artworks</a>
                <a href="#socials">Socials</a>
            </DynamicIsland>
        </div>
    )
}
