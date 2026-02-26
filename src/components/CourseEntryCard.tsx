import { openUrl } from '../openUrl'

interface CourseEntryCardProps {
  quote: string
  context?: string
  link: string
}

export function CourseEntryCard({ quote, context, link }: CourseEntryCardProps) {
  return (
    <div className="course-entry" onClick={() => openUrl(link, 'course', quote)} role="link">
      <p className="course-entry-quote">{quote}</p>
      {context && <p className="course-entry-context">{context}</p>}
    </div>
  )
}
