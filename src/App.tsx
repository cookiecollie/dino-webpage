import { Home } from "./pages/home"

function App() {
    return (
        <>
            <div className="mx-auto w-full sm:max-w-2xl">
                <Home />
            </div>

            <div className="mb-12 mt-24 flex w-full flex-col items-center text-sm text-shellby-brown-300">
                <p>
                    Designed and implemented by{" "}
                    <a
                        href="https://bsky.app/profile/nikkoscribblo.bsky.social"
                        target="_blank"
                        rel="noreferrer"
                        className="text-shellby-brown-500"
                    >
                        Berry
                    </a>
                </p>
            </div>
        </>
    )
}

export default App
