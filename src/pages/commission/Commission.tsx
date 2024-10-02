import { Box, Flex } from "@radix-ui/themes"
import { useState } from "react"
import { Button } from "../../components/button"
import { CommissionCard } from "../../components/commission-card"
import {
    InlineSheet,
    InlineSheetContext,
    useInlineSheet,
} from "../../components/inline-sheet"
import { Separator } from "../../components/separator"

export const Commission = () => {
    const { inlineSheetContext, toggleSheet } = useInlineSheet()
    const [sheetContent, setSheetContent] = useState<{
        [sheetId: string]: string
    }>({ "0": "meme", "1": "half-bd", "2": "ref-sheet" })

    const handleSaveContentState = (contentId: string, sheetId: string) => {
        setSheetContent({ ...sheetContent, [sheetId]: contentId })
        toggleSheet({ contentId, sheetId })
    }

    return (
        <InlineSheetContext.Provider
            value={{ activeSheetId: inlineSheetContext.sheetId }}
        >
            <Flex
                direction={"column"}
                className="[&>div:is(:first-child)]:rounded-2xl [&>div:is(:first-child)]:bg-shellby-brown-50 [&>div:not(:first-child)>.content]:my-2 [&>div:not(:first-child)>div:not(.content)]:rounded-2xl [&>div:not(:first-child)>div]:aspect-video [&>div:not(:first-child)>div]:grow [&>div:not(:first-child)>div]:basis-0 [&>div:not(:first-child)>div]:bg-shellby-brown-50 [&>div:not(:first-child)]:flex-wrap [&>div:not(:first-child)]:gap-x-4"
            >
                <Flex className="p-8" direction={"column"} align={"center"}>
                    <h5>Commission</h5>

                    <Separator className="mb-12 mt-6" />

                    <Flex
                        direction={"column"}
                        align={"center"}
                        className="gap-4"
                    >
                        <p className="flex flex-col items-center gap-4">
                            &#10033; Please refer to the TOS before
                            commissioning me! &#10033;
                        </p>

                        <Button fit>TERMS OF SERVICE</Button>
                    </Flex>
                </Flex>

                <Flex>
                    <Box>
                        <CommissionCard
                            content={{
                                name: "Meme Drawing",
                                cta: "See More",
                                href: "#",
                                background: (
                                    <img
                                        src="https://cdn.bsky.app/img/feed_fullsize/plain/did:plc:zwvrinmsejg2lw6yfkk5dgxm/bafkreihilzrlqpsi6arsrh3ygqnefqinegi4xyqvi6xf6clksfypnx3ipi@jpeg"
                                        loading="lazy"
                                    />
                                ),
                            }}
                            onClick={() => handleSaveContentState("meme", "0")}
                        />
                    </Box>

                    <Box>
                        <CommissionCard
                            content={{
                                name: "Sketch",
                                cta: "See More",
                                href: "#",
                                background: (
                                    <img
                                        src="https://cdn.bsky.app/img/feed_fullsize/plain/did:plc:zwvrinmsejg2lw6yfkk5dgxm/bafkreih6am3pdhhbaem44p4gzz5i5xmlzbm7ik6jsp7zgee4w374p6o2w4@jpeg"
                                        loading="lazy"
                                    />
                                ),
                            }}
                            onClick={() =>
                                handleSaveContentState("sketch", "0")
                            }
                        />
                    </Box>

                    <InlineSheet sheetId="0" className="content break-words">
                        <Box className="[&>div]:p-8">
                            <h6>
                                {sheetContent["0"] === "meme"
                                    ? "Meme drawing"
                                    : "Sketch"}
                            </h6>

                            <p>
                                {sheetContent["0"] === "meme"
                                    ? "Meme drawing of your character"
                                    : "Simple colored sketch of your character, can be half or full body"}
                            </p>
                        </Box>
                    </InlineSheet>
                </Flex>

                <Flex>
                    <Box>
                        <CommissionCard
                            content={{
                                name: "Half Body",
                                cta: "See More",
                                href: "#",
                                background: (
                                    <img
                                        src="https://cdn.bsky.app/img/feed_fullsize/plain/did:plc:zwvrinmsejg2lw6yfkk5dgxm/bafkreidbnezbb5ztdgrz7ayadoy4tm6k264ea7a2fm4bf77cqqw6ghxtia@jpeg"
                                        loading="lazy"
                                    />
                                ),
                            }}
                            onClick={() =>
                                handleSaveContentState("half-bd", "1")
                            }
                        />
                    </Box>

                    <Box>
                        <CommissionCard
                            content={{
                                name: "Full Body",
                                cta: "See More",
                                href: "#",
                                background: (
                                    <img
                                        src="https://cdn.bsky.app/img/feed_fullsize/plain/did:plc:zwvrinmsejg2lw6yfkk5dgxm/bafkreid6dexkbkp4pwbsnxrcwlzi2fuq7imu3y3ohfcrrk73vplc7m4gjy@jpeg"
                                        loading="lazy"
                                    />
                                ),
                            }}
                            onClick={() =>
                                handleSaveContentState("full-bd", "1")
                            }
                        />
                    </Box>

                    <InlineSheet sheetId="1" className="content">
                        <Box>
                            {sheetContent["1"] === "half-bd" ? "Half" : "Full"}
                        </Box>
                    </InlineSheet>
                </Flex>

                <Flex>
                    <Box>
                        <CommissionCard
                            content={{
                                name: "Reference Sheet",
                                cta: "See More",
                                href: "#",
                                background: (
                                    <img
                                        src="https://cdn.bsky.app/img/feed_fullsize/plain/did:plc:zwvrinmsejg2lw6yfkk5dgxm/bafkreid5ggjc65fc6is3a5ndlijoakef22ossv3rkflovsj2i77xlb3dmq@jpeg"
                                        loading="lazy"
                                    />
                                ),
                            }}
                            onClick={() =>
                                handleSaveContentState("ref-sheet", "2")
                            }
                        />
                    </Box>

                    <Box>
                        <CommissionCard
                            content={{
                                name: "Emote",
                                cta: "See More",
                                href: "#",
                                background: (
                                    <div
                                        style={{
                                            display: "grid",
                                            gridTemplateColumns:
                                                "repeat(3, 1fr)",
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
                            onClick={() => handleSaveContentState("emote", "2")}
                        />
                    </Box>

                    <InlineSheet sheetId="2" className="content">
                        <Box>
                            {sheetContent["2"] === "ref-sheet"
                                ? "Ref"
                                : "Emote"}
                        </Box>
                    </InlineSheet>
                </Flex>
            </Flex>
        </InlineSheetContext.Provider>
    )
}
