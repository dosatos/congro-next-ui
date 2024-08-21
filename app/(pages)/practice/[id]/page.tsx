import fs from 'fs/promises'
import path from 'path'
import MarkdownContent from '@/app/components/MarkdownContent'
import markdownToHtml from '@/app/utils/markdownToHtml'
import { NextPage } from 'next'

interface Props {
    params: { id: string }
}

const PracticePage: NextPage<Props> = async ({ params }) => {
    const filePath = path.join(process.cwd(), 'public', 'practice', `${params.id}.md`)

    try {
        const fileContent = await fs.readFile(filePath, 'utf8')
        const markdown = await markdownToHtml(fileContent)

        return (
            <MarkdownContent content={markdown} />
        )
    } catch (error) {
        console.error('Error reading markdown file:', error)
        return <div>Error loading content</div>
    }
}

export default PracticePage