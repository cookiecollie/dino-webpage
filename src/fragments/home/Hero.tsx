import { ArrowRight } from "@phosphor-icons/react"
import { DynamicIsland } from "../../components/dynamic-island"

export const Hero = () => {
    const CTA = () => {
        return (
            <a className="flex items-center gap-2" href="#about">
                <p>Let&apos;s Start</p>
                <span>
                    <ArrowRight size={18} weight="bold" />
                </span>
            </a>
        )
    }

    return (
        <div className="dino-page-home-hero">
            <div className="section-1">
                <h1 className="heading">Hi there, I&apos;m Nikko!</h1>
                <p className="subheading">Fancy seeing you here!</p>
            </div>

            <DynamicIsland cta={<CTA />} paddingTop={32} contentWidth="16rem">
                <a href="#about">About</a>
                <a href="#">My arts</a>
                <a href="#">Contact</a>
            </DynamicIsland>
        </div>
    )
}
