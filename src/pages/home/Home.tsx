import {
    AddressBook,
    DiscordLogo,
    IconContext,
    Palette,
    PawPrint,
    TwitchLogo,
    User,
} from "@phosphor-icons/react"
import { ReactElement } from "react"
import { Link } from "react-router-dom"
import { Avatar, Fallback, Image } from "../../components/avatar"
import { Button } from "../../components/button"
import { Card } from "../../components/card"
import { IconButton } from "../../components/icon-button"
import { MagnetGroup } from "../../components/magnet-group"
import { MagnetItem } from "../../components/magnet-group/MagnetGroup"
import { Separator } from "../../components/separator"
import { Anchor, Content, Tooltip } from "../../components/tooltip"
import texts from "../../static/texts.json"

export const Home = () => {
    const cardLinks: { key: string; label: string; icon: ReactElement }[] = [
        {
            key: "about-me",
            label: "About me",
            icon: <PawPrint />,
        },

        {
            key: "artworks",
            label: "My artworks",
            icon: <Palette />,
        },

        {
            key: "contacts",
            label: "Contacts",
            icon: <AddressBook />,
        },

        {
            key: "viewers",
            label: "Stream viewers",
            icon: <User />,
        },
    ]

    const test = () => {
        throw new Error("test")
    }

    return (
        <Card>
            <div className="flex h-fit items-center gap-4">
                <div className="flex flex-col items-center gap-4 px-10 py-4">
                    <span className="w-48">
                        <Avatar>
                            <Image src="./img/eepy-resized.png" />
                            <Fallback delayMs={600}>NS</Fallback>
                        </Avatar>
                    </span>

                    <div className="flex flex-col items-center gap-4">
                        <p className="text-2xl font-bold">Nikko Scribblo</p>

                        <div className="flex gap-2">
                            <Tooltip>
                                <Anchor>
                                    <IconButton
                                        label="Twitch Logo"
                                        as="a"
                                        href="https://www.twitch.tv/cookiecollie"
                                        target="_blank"
                                        rel="noreferrer"
                                    >
                                        <TwitchLogo />
                                    </IconButton>
                                </Anchor>

                                <Content>Visit Twitch</Content>
                            </Tooltip>

                            <Tooltip>
                                <Anchor>
                                    <IconButton
                                        label="Discord Logo"
                                        as="a"
                                        href="#"
                                        target="_blank"
                                        rel="noreferrer"
                                    >
                                        <DiscordLogo />
                                    </IconButton>
                                </Anchor>

                                <Content>Message me</Content>
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
                        <Button onClick={test}>Test</Button>
                    </div>

                    <MagnetGroup>
                        <IconContext.Provider
                            value={{ size: 16, weight: "bold" }}
                        >
                            <div className="flex gap-4">
                                {cardLinks.map((l) => (
                                    <MagnetItem key={l.key}>
                                        <Link
                                            to={l.key}
                                            className="inline-flex h-10 items-center gap-2 px-4"
                                        >
                                            <span>{l.icon}</span>
                                            <span>{l.label}</span>
                                        </Link>
                                    </MagnetItem>
                                ))}
                            </div>
                        </IconContext.Provider>
                    </MagnetGroup>
                </div>
            </div>
        </Card>
    )
}
