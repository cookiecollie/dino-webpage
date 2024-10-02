import { useState } from "react"
import { InlineSheet, InlineSheetContext } from "./InlineSheet"
export { InlineSheet, InlineSheetContext }

export const useInlineSheet = () => {
    const [inlineSheetContext, setInlineSheetContext] = useState<{
        contentId: string | null
        sheetId: string | null
    }>({ contentId: null, sheetId: null })

    const toggleSheet = ({
        contentId,
        sheetId,
    }: {
        contentId: string | null
        sheetId: string | null
    }) => {
        if (contentId === inlineSheetContext.contentId) {
            if (inlineSheetContext.sheetId) {
                setInlineSheetContext({ contentId, sheetId: null })
            } else {
                setInlineSheetContext({ contentId, sheetId })
            }
        } else {
            setInlineSheetContext({ contentId, sheetId })
        }
    }

    return { inlineSheetContext, toggleSheet }
}
