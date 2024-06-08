import { TwitchLogo } from "@phosphor-icons/react"
import { Avatar, Fallback, Image } from "../../components/avatar"
import { Button } from "../../components/button"
import { IconButton } from "../../components/icon-button"
import { Separator } from "../../components/separator"
import { Anchor, Content, Tooltip } from "../../components/tooltip"
import texts from "../../static/texts.json"
import { InCardFragment } from "../InCardFragment"

export const Home = () => {
    return (
        <InCardFragment>
            <div className="flex items-center gap-4">
                <div className="flex flex-col items-center gap-4 px-10 py-4">
                    <span className="w-48">
                        <Avatar>
                            <Image src="./img/eepy-resized.png" />
                            <Fallback delayMs={600}>NS</Fallback>
                        </Avatar>
                    </span>

                    <div className="flex flex-col items-center gap-4">
                        <p className="text-2xl font-bold">Nikko Scribblo</p>

                        <div className="flex">
                            <Tooltip>
                                <Anchor>
                                    <IconButton
                                        label="Twitch Logo"
                                        as="a"
                                        href="https://www.twitch.tv/cookiecollie"
                                        target="_blank"
                                        rel="noreferrer"
                                        colorScheme="neutral"
                                    >
                                        <TwitchLogo />
                                    </IconButton>
                                </Anchor>

                                <Content>Visit Twitch</Content>
                            </Tooltip>
                        </div>
                    </div>
                </div>

                <span className="self-stretch">
                    <Separator orientation="vertical" />
                </span>

                <div className="flex flex-1 flex-col gap-8 self-stretch px-10 py-4 text-lg">
                    <p className="text-4xl font-bold">
                        {texts.pages.home.card.content.title}
                    </p>

                    <div className="flex flex-1 flex-col justify-center gap-2">
                        <p>{texts.pages.home.card.content.description[0]}</p>
                        <p>{texts.pages.home.card.content.description[1]}</p>
                    </div>

                    <div className="flex flex-wrap">
                        <Button>Twitch</Button>
                        <Button>Bluesky</Button>
                        <Button>Bluesky</Button>
                    </div>
                </div>
            </div>
        </InCardFragment>
    )
}
