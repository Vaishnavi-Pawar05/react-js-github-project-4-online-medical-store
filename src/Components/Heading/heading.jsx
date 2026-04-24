import "./heading.css";

function Heading({ title, className = "heading" }) {
  return <h1 className={className}>
    {title}
    </h1>;
}

export {Heading};