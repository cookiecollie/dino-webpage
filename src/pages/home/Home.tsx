import { Avatar, Fallback, Image } from "../../components/avatar"
import { Card } from "../../components/card/Card"
import { Separator } from "../../components/separator"

export const Home = () => {
    return (
        <div className="grid grid-cols-12">
            <div className="col-span-full">
                <Card>
                    <div className="flex h-fit items-center gap-4">
                        <div className="flex flex-col items-center gap-4 px-10 py-4">
                            <Avatar size={"12rem"}>
                                <Image src="" />
                                <Fallback delayMs={600} size={"4rem"}>
                                    A
                                </Fallback>
                            </Avatar>

                            <div>name</div>
                        </div>

                        <span className="self-stretch">
                            <Separator orientation="vertical" />
                        </span>

                        <div className="flex-1 self-stretch px-10 py-4">
                            content
                        </div>
                    </div>
                </Card>
            </div>
        </div>
    )
}
