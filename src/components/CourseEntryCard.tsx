interface CourseEntryCardProps {
  quote: string
  context?: string
  link: string
}

export function CourseEntryCard({ quote, context, link }: CourseEntryCardProps) {
  return (
    <a href={link} target="_blank" rel="noopener" className="course-entry">
      <p className="course-entry-quote">{quote}</p>
      {context && <p className="course-entry-context">{context}</p>}
    </a>
  )
}
