export default function SectionHeading({ eyebrow, title, description, light = false }) {
  return (
    <div className={`section-heading ${light ? "section-heading-light" : ""}`}>
      <p className="section-eyebrow">{eyebrow}</p>
      <div>
        <h2>{title}</h2>
        {description ? <p>{description}</p> : null}
      </div>
    </div>
  );
}
