/**
 * Small container for holding fancy components
 */
import './ComponentsContainer.css';

type Props = {
  children?: React.ReactElement,
}

export default function ComponentContainer({
  children
}: Props): React.ReactElement {
  return <section className="components-container">
    {children}
  </section>
}
