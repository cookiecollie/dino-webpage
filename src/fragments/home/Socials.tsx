import { AspectRatio } from "../../components/aspect-ratio"
import { Avatar, AvatarFallback, AvatarImage } from "../../components/avatar"
import { SocialCard } from "../../components/social-card"

const TwitchMessage = (props: { message: string }) => {
    const { message } = props

    return (
        <div className="flex items-center gap-1 py-2 pl-8">
            <span className="aspect-square w-5">
                <img src="./public/resources/img/TwitchBroadcaster.png" />
            </span>

            <span className="aspect-square w-5">
                <img src="./public/resources/img/TwitchSub.png" />
            </span>

            <p className="font-bold text-[rgb(0,235,147)]">CookieCollie:</p>

            <p>{message}</p>
        </div>
    )
}

export const Socials = () => {
    return (
        <div className="my-36 flex w-full flex-col items-center gap-16">
            <h1>Socials</h1>

            <div className="flex w-[50%] flex-col gap-8">
                <div className="flex w-full gap-8">
                    <SocialCard>
                        <AspectRatio ratio={1}>
                            <div className="flex h-full flex-col gap-6">
                                <div className="flex items-center gap-4">
                                    <Avatar>
                                        <AvatarImage src="./public/resources/img/TwitchAvatar.png" />
                                        <AvatarFallback>CC</AvatarFallback>
                                    </Avatar>

                                    <p className="font-bold">CookieCollie</p>
                                </div>

                                <div className="flex w-[120%] flex-1 flex-col shadow-md">
                                    <div className="flex-1">
                                        <TwitchMessage message="Hey there!" />
                                        <TwitchMessage message="You're cool! :D" />
                                    </div>

                                    <div className="m-4 mt-0 flex h-10 gap-4 rounded-lg border border-[rgba(0,0,0,.7)] p-2">
                                        <span className="aspect-square h-full">
                                            <img src="./public/resources/svg/TwitchNoSub-Light.svg" />
                                        </span>

                                        <input
                                            className="w-full bg-transparent text-[0.9rem] focus:outline-none"
                                            placeholder="Send a message"
                                            disabled
                                        />
                                    </div>
                                </div>

                                <div className="flex h-10 w-full items-center justify-center rounded-full border">
                                    Visit My Twitch
                                </div>
                            </div>
                        </AspectRatio>
                    </SocialCard>

                    <SocialCard>
                        <AspectRatio ratio={1}>Bluesky</AspectRatio>
                    </SocialCard>
                </div>
            </div>
        </div>
    )
}
