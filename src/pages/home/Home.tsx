import { Butterfly, GithubLogo, TwitchLogo } from "@phosphor-icons/react"
import { Carousel, Slide } from "../../components/carousel"
import { IconGroup, IconGroupItem } from "../../components/icon-group"
import { Separator } from "../../components/Separator"

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

    const drawings: { key: string; src: string }[] = [
        {
            key: "sketch-shellby",
            src: "https://cdn.bsky.app/img/feed_fullsize/plain/did:plc:zwvrinmsejg2lw6yfkk5dgxm/bafkreih6am3pdhhbaem44p4gzz5i5xmlzbm7ik6jsp7zgee4w374p6o2w4@jpeg",
        },

        {
            key: "emote-shellby",
            src: "https://cdn.bsky.app/img/feed_fullsize/plain/did:plc:zwvrinmsejg2lw6yfkk5dgxm/bafkreib3eiyuezs24jdgiqkvubx6flgbuduloia7o7tohilmhqwglfcjbq@jpeg",
        },

        {
            key: "ref-shellby",
            src: "https://cdn.bsky.app/img/feed_fullsize/plain/did:plc:zwvrinmsejg2lw6yfkk5dgxm/bafkreid5ggjc65fc6is3a5ndlijoakef22ossv3rkflovsj2i77xlb3dmq@jpeg",
        },

        {
            key: "gift-midori",
            src: "https://cdn.bsky.app/img/feed_fullsize/plain/did:plc:zwvrinmsejg2lw6yfkk5dgxm/bafkreidbnezbb5ztdgrz7ayadoy4tm6k264ea7a2fm4bf77cqqw6ghxtia@jpeg",
        },

        {
            key: "gift-fenme",
            src: "https://cdn.bsky.app/img/feed_fullsize/plain/did:plc:zwvrinmsejg2lw6yfkk5dgxm/bafkreifmi7kfe7t2su3vummv5hscuko3r6nwy5gxityvey6lcgl5vmlsym@jpeg",
        },

        {
            key: "gift-orb",
            src: "https://cdn.bsky.app/img/feed_fullsize/plain/did:plc:zwvrinmsejg2lw6yfkk5dgxm/bafkreid6dexkbkp4pwbsnxrcwlzi2fuq7imu3y3ohfcrrk73vplc7m4gjy@jpeg",
        },

        {
            key: "meme-pool",
            src: "https://cdn.bsky.app/img/feed_fullsize/plain/did:plc:zwvrinmsejg2lw6yfkk5dgxm/bafkreihilzrlqpsi6arsrh3ygqnefqinegi4xyqvi6xf6clksfypnx3ipi@jpeg",
        },
    ]

    return (
        <div className="mt-36 grid grid-cols-4 gap-4 [&>div]:rounded-xl [&>div]:bg-shellby-brown-50 [&>div]:p-8">
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
                        className="text-shellby-brown-300"
                    />
                </div>

                <img
                    src="/resources/webp/about.webp"
                    alt=""
                    className="w-full rounded-xl object-cover"
                />
            </div>

            <div className="col-span-4 flex flex-col gap-10">
                <div>
                    <h5>Artworks</h5>
                    <p>Some of the pieces I made</p>
                    <a
                        className="mt-4 flex w-fit items-center gap-1 text-sm text-shellby-brown-300 hover:text-shellby-brown-500"
                        href="https://bsky.app/profile/nikkoscribblo.bsky.social"
                        target="_blank"
                        rel="noreferrer"
                        style={{
                            transition:
                                "var(--dino-global-transition-duration) var(--dino-global-transition-timing-func)",
                        }}
                    >
                        Wanna see more of these? Check this link out! &raquo;
                    </a>
                    <Separator className="mt-4" />
                </div>

                <Carousel slidesInView={4} align={"start"} skipSnaps loop>
                    {drawings.map((d) => (
                        <Slide key={d.key}>
                            <img
                                src={d.src}
                                loading="lazy"
                                className="rounded-2xl"
                            />
                        </Slide>
                    ))}
                </Carousel>
            </div>
        </div>
    )
}
