import fs from 'fs/promises'
import path from 'path'
import MarkdownContent from '@/app/components/MarkdownContent'
import markdownToHtml from '@/app/utils/markdownToHtml'
import { NextPage } from 'next'

interface Props {
    params: { id: string }
}

const PracticePage: NextPage<Props> = async ({ params }) => {
    const filePath = path.join(process.cwd(), 'public', 'practices', `${params.id}.md`)

    try {
        const fileContent = await fs.readFile(filePath, 'utf8')
        const markdown = await markdownToHtml(fileContent)

        return (
            <div className="min-h-screen bg-gray-100 py-12 px-4 sm:px-6 lg:px-8">
                <div className="max-w-3xl mx-auto">
                    <article className="bg-white shadow-md rounded-lg overflow-hidden">
                        <div className="px-6 py-8">
                            <div className="prose prose-stone max-w-none">
                                <MarkdownContent content={markdown} />
                            </div>
                        </div>
                    </article>
                </div>
            </div>
        )
    } catch (error) {
        console.error('Error reading markdown file:', error)
        return <div>Error loading content</div>
    }
}

export default PracticePage