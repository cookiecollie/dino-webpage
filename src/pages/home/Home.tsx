import { Butterfly, GithubLogo, TwitchLogo } from "@phosphor-icons/react"
import { Bento, BentoSlot } from "../../components/bento"
import { Button } from "../../components/button"
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
        <Bento
            columnsTemplate="repeat(4, 1fr)"
            rowsTemplate="repeat(2, auto) repeat(2, 1fr)"
            areaTemplate={`
                    "about about about about"
                    "artworks artworks artworks artworks"
                    "socials socials tips tips"
                    "credits credits tips tips"
                `}
            className="mt-36 gap-4 [&>div]:rounded-2xl [&>div]:bg-shellby-brown-50 [&>div]:p-8"
        >
            <BentoSlot slotName="about">
                <div className="flex justify-between gap-8">
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
                                self-employed artist who draws cute furry
                                critters, and also an occasional streamer.
                            </p>

                            <p>
                                Feel free to take look around if you wanna know
                                more about me!
                            </p>
                        </div>

                        <IconGroup
                            items={links}
                            className="text-shellby-brown-300"
                        />
                    </div>

                    <img
                        loading="lazy"
                        src="/resources/webp/about.webp"
                        alt="Berry drawing by me"
                        className="w-full rounded-xl object-cover"
                    />
                </div>
            </BentoSlot>

            <BentoSlot slotName="artworks">
                <div className="flex justify-between">
                    <div>
                        <h5>Artworks</h5>
                        <p>Some of the pieces I made</p>
                    </div>

                    <div className="flex flex-col gap-2">
                        <Button asChild>
                            <a
                                href="https://ko-fi.com/cookiecollie/commissions"
                                target="_blank"
                                rel="noreferrer"
                            >
                                Commission Info
                            </a>
                        </Button>

                        <Button asChild>
                            <a
                                href="https://bsky.app/profile/nikkoscribblo.bsky.social"
                                target="_blank"
                                rel="noreferrer"
                            >
                                See More &raquo;
                            </a>
                        </Button>
                    </div>
                </div>

                <Separator className="mb-12 mt-6" />

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
            </BentoSlot>

            <BentoSlot slotName="socials">
                <h5>Socials</h5>
                <p>All my socials in one place</p>

                <Separator className="mb-12 mt-6" />

                <div className="flex flex-col gap-4">
                    <Button asChild>
                        <a
                            href="https://bsky.app/profile/nikkoscribblo.bsky.social"
                            target="_blank"
                            rel="noreferrer"
                        >
                            Bluesky
                        </a>
                    </Button>

                    <Button asChild>
                        <a
                            href="https://www.twitch.tv/cookiecollie"
                            target="_blank"
                            rel="noreferrer"
                        >
                            Twitch
                        </a>
                    </Button>

                    <Button asChild>
                        <a
                            href="https://github.com/cookiecollie"
                            target="_blank"
                            rel="noreferrer"
                        >
                            Github
                        </a>
                    </Button>
                </div>
            </BentoSlot>

            <BentoSlot slotName="tips">
                <h5>Tips</h5>
                <p>Feel free to support me!</p>

                <Separator className="mb-12 mt-6" />

                <div>
                    <iframe
                        id="kofiframe"
                        src="https://ko-fi.com/cookiecollie/?hidefeed=true&widget=true&embed=true&preview=true"
                        style={{
                            border: "none",
                            width: "100%",
                        }}
                        className="bg-shellby-brown-50"
                        height="612"
                        title="cookiecollie"
                    />
                </div>
            </BentoSlot>

            <BentoSlot slotName="credits">
                <h5>Credits</h5>

                <Separator className="mb-12 mt-6" />

                <div>
                    <ul className="list-inside list-disc">
                        <li>
                            Icons:{" "}
                            <a
                                href="https://phosphoricons.com/"
                                target="_blank"
                                rel="noreferrer"
                            >
                                Phosphor Icons
                            </a>
                        </li>

                        <li>
                            Components: Custom-built using{" "}
                            <a
                                href="https://www.radix-ui.com/primitives"
                                target="_blank"
                                rel="noreferrer"
                            >
                                Radix Primitives
                            </a>
                        </li>
                    </ul>
                </div>
            </BentoSlot>
        </Bento>
    )
}
