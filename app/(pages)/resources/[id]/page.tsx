import fs from 'fs/promises'
import path from 'path'
import { notFound } from 'next/navigation'
import MarkdownContent from '@/app/components/MarkdownContent'
import markdownToHtml from '@/app/utils/markdownToHtml'

interface Props {
    params: { id: string }
}

export default async function ResourcePage({ params }: Props) {
    const filePath = path.join(process.cwd(), 'public', 'resources', `${params.id}.md`)

    try {
        const fileContent = await fs.readFile(filePath, 'utf8')
        const markdown = await markdownToHtml(fileContent)

        return (
            <MarkdownContent content={markdown} />
        )
    } catch (error) {
        console.error('Error reading markdown file:', error)
        notFound()
    }
}