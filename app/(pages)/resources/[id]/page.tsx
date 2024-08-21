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
            <div className="min-h-screen bg-gray-100 py-12 px-4 sm:px-6 lg:px-8">
                <div className="max-w-3xl mx-auto">
                    <article className="bg-white shadow-md rounded-lg overflow-hidden border-t-4 border-t-amber-400">
                        <div className="px-6 py-8">
                            <div className="prose max-w-none
                            prose-headings:text-amber-500
                            prose-p:text-gray-800
                            prose-a:text-purple-700 prose-a:no-underline hover:prose-a:text-purple-900 hover:prose-a:underline
                            prose-strong:text-amber-500

                             prose-ol:text-gray-800 prose-ul:text-gray-800
                             prose-table:border-collapse prose-td:border prose-td:border-gray-600 prose-td:p-2
                             prose-th:border prose-th:bg-[#fcd34d] prose-th:text-[#1e1b4b] prose-th:border-gray-600 prose-th:p-3
                            
                            
                            
                                
                                
                                
                                
                                ">
                                <MarkdownContent content={markdown} />
                            </div>
                        </div>
                    </article>
                </div>
            </div>
        )
    } catch (error) {
        console.error('Error reading markdown file:', error)
        notFound()
    }
}