import { DynamicIsland } from "../../components/dynamic-island"

export const Home = () => {
    return (
        <div className="relative">
            <div
                className="flex h-[100vh] flex-col items-center justify-center bg-default-black"
                style={{ animationName: "--section-1" }}
            >
                <DynamicIsland />
                <p>Section 1</p>
            </div>

            <div className="flex h-[100vh] flex-col items-center py-40">
                Section 2
            </div>

            <div>Section 3</div>
        </div>
    )
}
