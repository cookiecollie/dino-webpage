import { DiscordLogo, TwitchLogo } from "@phosphor-icons/react"
import { Avatar, Fallback, Image } from "../../components/avatar"
import { Card } from "../../components/card"
import { IconButton } from "../../components/icon-button"
import { Separator } from "../../components/separator"
import { Anchor, Content, Tooltip } from "../../components/tooltip"

export const Home = () => {
    return (
        <Card>
            <div className="flex h-fit items-center gap-4">
                <div className="flex flex-col items-center gap-4 px-10 py-4">
                    <span className="w-48">
                        <Avatar>
                            <Image src="https://static-cdn.jtvnw.net/jtv_user_pictures/c86c8913-6cff-4d10-9482-cc4a648781fb-profile_image-300x300.png" />
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
                                        href="#"
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
                                        as={"a"}
                                        href="#"
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

                <div className="flex-1 self-stretch px-10 py-4">content</div>
            </div>
        </Card>
    )
}
