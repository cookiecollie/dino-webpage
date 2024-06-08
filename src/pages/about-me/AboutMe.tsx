import { InCardFragment } from "../InCardFragment"

export const AboutMe = () => {
    return (
        <InCardFragment>
            <div className="flex flex-col justify-between">
                <p className="text-4xl font-bold">About me</p>
                <div className="h-96">About Me</div>
            </div>
        </InCardFragment>
    )
}
