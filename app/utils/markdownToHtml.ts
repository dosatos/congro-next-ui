import { unified } from 'unified'
import remarkParse from 'remark-parse'
import remarkGfm from 'remark-gfm'
import remarkRehype from 'remark-rehype'
import rehypeStringify from 'rehype-stringify'
import rehypeHighlight from 'rehype-highlight'

export default async function markdownToHtml(markdown: string) {
    // Preprocess the markdown to remove backslashes before backticks
    const preprocessedMarkdown = markdown.replace(/\\`/g, '`');

    const result = await unified()
        .use(remarkParse)
        .use(remarkGfm)
        .use(remarkRehype)
        .use(rehypeHighlight)
        .use(rehypeStringify)
        .process(preprocessedMarkdown)

    return result.toString()
}