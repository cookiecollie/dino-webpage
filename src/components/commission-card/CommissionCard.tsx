import { CSSProperties, MouseEventHandler, ReactNode } from "react"

interface CommissionCardContent {
    name: string
    description?: string
    href?: string
    cta?: string
    background?: ReactNode
    badge?: string
}

interface CommissionCardProps {
    content: CommissionCardContent
    shiftLength?: string
    imageGradientCutoff?: string
    onClick?: MouseEventHandler
}

export const CommissionCard = (props: CommissionCardProps) => {
    const { content, shiftLength, imageGradientCutoff, onClick } = props

    return (
        <div
            className="dino-commission-card group"
            style={
                {
                    "--shift-length": shiftLength,
                    "--gradient-cutoff": imageGradientCutoff,

                    cursor: `${onClick ? "pointer" : "default"}`,
                } as CSSProperties
            }
            onClick={onClick}
        >
            <div>
                <div className="dino-commission-card-background group-hover:scale-110 group-hover:blur-0">
                    {content.background}
                </div>
            </div>

            <div className="dino-commission-card-title-section group-hover:-translate-y-[var(--shift-length,2.5rem)]">
                <h6>{content.name}</h6>
                <p>{content.description}</p>
            </div>

            <div className="dino-commission-card-cta-section group-hover:translate-y-0 group-hover:opacity-100 group-hover:blur-0">
                <a
                    className="dino-commission-card-cta"
                    href={content.href}
                    onClick={(e) => e.stopPropagation()}
                >
                    {content.cta} &rarr;
                </a>
            </div>

            <div className="dino-commission-card-overlay group-hover:bg-shellby-brown-500/5" />
        </div>
    )
}
