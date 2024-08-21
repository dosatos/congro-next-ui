import React from 'react'

interface MarkdownContentProps {
    content: string
}

const MarkdownContent: React.FC<MarkdownContentProps> = ({ content }) => {
    return <div className="min-h-screen bg-gray-100 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
            <article className="bg-white shadow-md rounded-lg overflow-hidden border-t-4 border-t-amber-400">
                <div className="px-6 py-8">
                    <div className="prose max-w-none
                    prose-h1:text-amber-700
                    prose-headings:text-amber-600
                    prose-h3:text-amber-700
                    prose-p:text-gray-800
                    prose-a:text-purple-700 prose-a:no-underline hover:prose-a:text-purple-900 hover:prose-a:underline
                    prose-strong:text-amber-700
                    prose-ol:text-gray-800 prose-ul:text-gray-800
                    prose-td:border-gray-600 prose-table:border-collapse prose-td:border prose-td:p-2
                    prose-th:bg-amber-400 prose-th:border prose-th:text-[#1e1b4b] prose-th:border-gray-600 prose-th:p-3">
                        <div className="prose" dangerouslySetInnerHTML={{ __html: content }} />
                    </div>
                </div>
            </article>
        </div>
    </div>
}

export default MarkdownContent