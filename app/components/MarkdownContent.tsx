import React from 'react'

interface MarkdownContentProps {
    content: string
}

const MarkdownContent: React.FC<MarkdownContentProps> = ({ content }) => {
    return <div className="prose" dangerouslySetInnerHTML={{ __html: content }} />
}

export default MarkdownContent