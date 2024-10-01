import { Badge } from "../../components/badge"
import { Bento, BentoSlot } from "../../components/bento"
import { Button } from "../../components/button"
import { CommissionCard } from "../../components/commission-card"
import { Separator } from "../../components/separator"

export const Commission = () => {
    return (
        <Bento
            className="gap-4 [&>div]:rounded-2xl [&>div]:bg-shellby-brown-50"
            columnsTemplate="repeat(4, 1fr)"
            rowsTemplate=" auto repeat(3, 1fr)"
            areaTemplate={`
                "main main main main"
                "meme meme sketch sketch"
                "half-bd half-bd full-bd full-bd"
                "ref ref emote emote"
                `}
        >
            <BentoSlot slotName="main" className="p-8">
                <div className="flex flex-col items-center">
                    <h5>Commission</h5>

                    <Separator className="mb-12 mt-6" />

                    <div className="flex flex-col items-center gap-4">
                        <p className="flex font-bold italic">
                            &#10033; Please refer to the TOS before
                            commissioning me! &#10033;
                        </p>

                        <Button fit>TERMS OF SERVICE</Button>
                    </div>
                </div>
            </BentoSlot>

            <BentoSlot slotName="sketch">
                <Badge
                    text={`${String.fromCharCode(10022)} NEW ${String.fromCharCode(10022)}`}
                    colorScheme="var(--color-base-lima-500)"
                >
                    <CommissionCard
                        content={{
                            name: "Sketch",
                            description: "desc",
                            cta: "See More",
                            href: "#",
                            background: (
                                <img
                                    src="https://cdn.bsky.app/img/feed_fullsize/plain/did:plc:zwvrinmsejg2lw6yfkk5dgxm/bafkreih6am3pdhhbaem44p4gzz5i5xmlzbm7ik6jsp7zgee4w374p6o2w4@jpeg"
                                    loading="lazy"
                                />
                            ),
                        }}
                        shiftLength="1.8rem"
                        imageGradientCutoff="45%"
                        onClick={() => console.log("sketch")}
                    />
                </Badge>
            </BentoSlot>

            <BentoSlot slotName="meme" className="aspect-video">
                <Badge
                    text={`${String.fromCharCode(10022)} HOT ${String.fromCharCode(10022)}`}
                    colorScheme="var(--color-base-red-400)"
                >
                    <CommissionCard
                        content={{
                            name: "Meme Drawing",
                            description: "desc",
                            cta: "See More",
                            href: "#",
                            background: (
                                <img
                                    src="https://cdn.bsky.app/img/feed_fullsize/plain/did:plc:zwvrinmsejg2lw6yfkk5dgxm/bafkreihilzrlqpsi6arsrh3ygqnefqinegi4xyqvi6xf6clksfypnx3ipi@jpeg"
                                    loading="lazy"
                                />
                            ),
                        }}
                        shiftLength="1.8rem"
                        imageGradientCutoff="45%"
                    />
                </Badge>
            </BentoSlot>

            <BentoSlot slotName="emote">
                <CommissionCard
                    content={{
                        name: "Emote",
                        description: "desc",
                        cta: "See More",
                        href: "#",
                        background: (
                            <div
                                style={{
                                    display: "grid",
                                    gridTemplateColumns: "repeat(3, 1fr)",
                                    gridTemplateRows: "1fr 1fr",
                                    gridTemplateAreas: `
                                        "a a b"
                                        "a a c"
                                    `,
                                }}
                                className="inset-0"
                            >
                                <img
                                    src="https://cdn.bsky.app/img/feed_fullsize/plain/did:plc:zwvrinmsejg2lw6yfkk5dgxm/bafkreib3eiyuezs24jdgiqkvubx6flgbuduloia7o7tohilmhqwglfcjbq@jpeg"
                                    loading="lazy"
                                    style={{
                                        gridArea: "a",
                                    }}
                                />

                                <img
                                    src="https://cdn.bsky.app/img/feed_fullsize/plain/did:plc:zwvrinmsejg2lw6yfkk5dgxm/bafkreicnj4cnnzbijghr2zw2ygq4y5cwdv6btdus4l4syq6ipddg2uvcvu@jpeg"
                                    loading="lazy"
                                    style={{
                                        gridArea: "b",
                                    }}
                                />

                                <img
                                    src="https://cdn.bsky.app/img/feed_fullsize/plain/did:plc:zwvrinmsejg2lw6yfkk5dgxm/bafkreicz4uhgaudfsote46mfwjig5kar543qbbtnwkat45pgahe2ng5fpq@jpeg"
                                    loading="lazy"
                                    style={{
                                        gridArea: "c",
                                    }}
                                />
                            </div>
                        ),
                    }}
                    shiftLength="1.8rem"
                    imageGradientCutoff="20%"
                />
            </BentoSlot>

            <BentoSlot slotName="half-bd">
                <CommissionCard
                    content={{
                        name: "Half Body",
                        description: "desc",
                        cta: "See More",
                        href: "#",
                        background: (
                            <img
                                src="https://cdn.bsky.app/img/feed_fullsize/plain/did:plc:zwvrinmsejg2lw6yfkk5dgxm/bafkreidbnezbb5ztdgrz7ayadoy4tm6k264ea7a2fm4bf77cqqw6ghxtia@jpeg"
                                loading="lazy"
                            />
                        ),
                    }}
                    shiftLength="1.8rem"
                    imageGradientCutoff="45%"
                />
            </BentoSlot>

            <BentoSlot slotName="full-bd">
                <CommissionCard
                    content={{
                        name: "Full Body",
                        description: "desc",
                        cta: "See More",
                        href: "#",
                        background: (
                            <img
                                src="https://cdn.bsky.app/img/feed_fullsize/plain/did:plc:zwvrinmsejg2lw6yfkk5dgxm/bafkreid6dexkbkp4pwbsnxrcwlzi2fuq7imu3y3ohfcrrk73vplc7m4gjy@jpeg"
                                loading="lazy"
                            />
                        ),
                    }}
                    shiftLength="1.8rem"
                    imageGradientCutoff="45%"
                />
            </BentoSlot>

            <BentoSlot slotName="ref">
                <CommissionCard
                    content={{
                        name: "Reference Sheet",
                        description: "desc",
                        cta: "See More",
                        href: "#",
                        background: (
                            <img
                                src="https://cdn.bsky.app/img/feed_fullsize/plain/did:plc:zwvrinmsejg2lw6yfkk5dgxm/bafkreid5ggjc65fc6is3a5ndlijoakef22ossv3rkflovsj2i77xlb3dmq@jpeg"
                                loading="lazy"
                            />
                        ),
                    }}
                    shiftLength="1.8rem"
                    imageGradientCutoff="45%"
                />
            </BentoSlot>
        </Bento>
    )
}
