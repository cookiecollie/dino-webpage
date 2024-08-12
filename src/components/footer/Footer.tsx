import {
    Butterfly,
    GithubLogo,
    IconContext,
    TwitchLogo,
} from "@phosphor-icons/react"
import { IconLink } from "../icon-link"
import { Separator } from "../separator"

export const Footer = () => {
    return (
        <div className="px-8">
            <Separator />
            <div className="dino-footer">
                <p>Designed and implemented by Nikko</p>

                <div className="dino-footer-icons">
                    <IconContext.Provider value={{ size: 24, weight: "fill" }}>
                        <IconLink
                            label="Bluesky"
                            href="https://bsky.app/profile/nikko-scribblo.bsky.social"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <Butterfly />
                        </IconLink>

                        <IconLink
                            label="Twitch"
                            href="https://www.twitch.tv/cookiecollie"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <TwitchLogo />
                        </IconLink>

                        <IconLink
                            label="Github"
                            href="https://github.com/cookiecollie"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <GithubLogo />
                        </IconLink>
                    </IconContext.Provider>
                </div>
            </div>
        </div>
    )
}
