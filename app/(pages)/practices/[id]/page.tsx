import MarkdownContent from '@/app/components/MarkdownContent'
import markdownToHtml from '@/app/utils/markdownToHtml'
import { NextPage } from 'next'

interface Props {
    params: { id: string }
}

const PracticePage: NextPage<Props> = async ({ params }) => {
    const markdown = await markdownToHtml(`
# Practices Index Page

You're designing a social media platform that needs to handle millions of users,
each with profiles, posts, and connections.
The platform needs to scale quickly and handle frequent updates to user profiles.
Which type of database would you choose and why?

\`\`\`python
print("hello world")
\`\`\`

    `)
    return <article className="prose prose-stone prose-code:text-blue-600 text-center">
        <MarkdownContent content={markdown} />
    </article>
}

export default PracticePage