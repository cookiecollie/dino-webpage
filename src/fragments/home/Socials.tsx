import { AspectRatio } from "../../components/aspect-ratio"
import { SocialCard } from "../../components/social-card"
import {
    SocialCardContent,
    SocialCardInfo,
    SocialCardLinkButton,
} from "../../components/social-card/SocialCard"

const TwitchMessage = (props: { message: string }) => {
    const { message } = props

    return (
        <div className="flex items-center gap-1 py-2 pl-8">
            <span className="aspect-square w-5">
                <img src="/resources/img/TwitchBroadcaster.png" />
            </span>

            <span className="aspect-square w-5">
                <img src="/resources/img/TwitchSub.png" />
            </span>

            <p className="font-bold text-[rgb(0,235,147)]">CookieCollie:</p>

            <p>{message}</p>
        </div>
    )
}

export const Socials = () => {
    return (
        <>
            <div id="socials" />

            <div className="mb-36 mt-24 flex w-full flex-col items-center gap-16">
                <h1>Socials</h1>

                <div className="flex w-[50%] flex-col gap-8">
                    <div className="flex w-full gap-8">
                        <SocialCard
                            href="https://www.twitch.tv/cookiecollie"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <AspectRatio ratio={1}>
                                <div className="flex h-full flex-col gap-6">
                                    <SocialCardInfo
                                        displayName="CookieCollie"
                                        pfpSrc="/resources/img/TwitchAvatar.png"
                                        pfpFallback="CC"
                                    />

                                    <SocialCardContent>
                                        <div className="flex h-full w-[120%] flex-col bg-white shadow-md">
                                            <div className="flex-1">
                                                <TwitchMessage message="Hey there!" />
                                                <TwitchMessage message="You're cool! :D" />
                                            </div>

                                            <div className="m-4 mt-0 flex h-10 gap-4 rounded-lg border border-[rgba(0,0,0,.7)] p-2">
                                                <span className="aspect-square h-full">
                                                    <img src="/resources/svg/TwitchNoSub-Light.svg" />
                                                </span>

                                                <input
                                                    className="w-full bg-transparent text-[0.9rem] focus:outline-none"
                                                    placeholder="Send a message"
                                                    disabled
                                                />
                                            </div>
                                        </div>
                                    </SocialCardContent>

                                    <SocialCardLinkButton>
                                        Visit My Twitch
                                    </SocialCardLinkButton>
                                </div>
                            </AspectRatio>
                        </SocialCard>

                        <SocialCard
                            href="https://bsky.app/profile/nikko-scribblo.bsky.social"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <AspectRatio ratio={1}>
                                <div className="flex h-full flex-col gap-6">
                                    <SocialCardInfo
                                        displayName="⭐ Nikko ⭐"
                                        pfpSrc="/resources/img/BlueskyAvatar.jpg"
                                        pfpFallback="NS"
                                        username="@nikko-scribblo.bsky.social"
                                    />

                                    <SocialCardContent>
                                        <div className="flex flex-col gap-2 text-h5">
                                            <p>Catch me up on Bluesky!</p>
                                            <p>Artworks and what not!</p>
                                            <p className="text-default-primary">
                                                #yourecute
                                            </p>
                                        </div>
                                    </SocialCardContent>

                                    <SocialCardLinkButton>
                                        Visit My Bluesky
                                    </SocialCardLinkButton>
                                </div>
                            </AspectRatio>
                        </SocialCard>
                    </div>

                    <SocialCard noHoverFx>
                        <iframe
                            id="kofiframe"
                            src="https://ko-fi.com/cookiecollie/?hidefeed=true&widget=true&embed=true&preview=true"
                            style={{
                                border: "none",
                                width: "100%",
                                background: "#f9f9f9",
                            }}
                            height="712"
                            title="cookiecollie"
                        />
                    </SocialCard>
                </div>
            </div>
        </>
    )
}
