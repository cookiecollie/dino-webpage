import { Butterfly, GithubLogo, TwitchLogo } from "@phosphor-icons/react"
import { IconGroup, IconGroupItem } from "../../components/icon-group"

export const Home = () => {
    const links: IconGroupItem[] = [
        {
            children: (
                <a
                    href="https://bsky.app/profile/nikkoscribblo.bsky.social"
                    target="_blank"
                    rel="noreferrer"
                >
                    <Butterfly />
                </a>
            ),
            key: "bluesky-link",
            label: "Bluesky Link",
        },

        {
            children: (
                <a
                    href="https://www.twitch.tv/cookiecollie"
                    target="_blank"
                    rel="noreferrer"
                >
                    <TwitchLogo />
                </a>
            ),
            key: "twitch-link",
            label: "Twitch Link",
        },

        {
            children: (
                <a
                    href="https://github.com/cookiecollie"
                    target="_blank"
                    rel="noreferrer"
                >
                    <GithubLogo />
                </a>
            ),
            key: "github-link",
            label: "Github Link",
        },
    ]

    return (
        <div className="[&>div]:bg-shellby-brown-50 mt-36 grid grid-cols-4 [&>div]:rounded-xl [&>div]:p-8">
            <div className="col-span-4 flex gap-8">
                <div className="flex flex-col gap-8">
                    <div>
                        <h5>Hi there, I&apos;m Berry!</h5>
                        <p className="font-semibold">
                            Digital Artist | Occasional Streamer
                        </p>
                    </div>

                    <div className="flex flex-col gap-4">
                        <p>
                            Welcome to my little site! I&apos;m Berry, a
                            self-employed artist who draws cute furry critters,
                            and also an occasional streamer.
                        </p>

                        <p>
                            Feel free to take look around if you wanna know more
                            about me!
                        </p>
                    </div>

                    <IconGroup
                        items={links}
                        className="text-shellby-brown-400"
                    />
                </div>

                <img
                    src="/resources/webp/about.webp"
                    alt=""
                    className="w-full rounded-xl object-cover"
                />
            </div>
            <p>test</p>
            <p>test</p>
            <p>test</p>
        </div>
    )
}
