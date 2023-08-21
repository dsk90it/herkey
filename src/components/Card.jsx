import CardStyles from '../assets/css/card.module.css'
import { IconEdit } from './Icons'

function Card({ handleClick, title, children }) {
  return (
    <article className={CardStyles.wrapper}>
      <div className={CardStyles.header}>
        {title}
        <button
          onClick={handleClick}
          className="text-accent-lime"
          type="button"
        >
          <IconEdit iconClass="!w-5 !h-5" />
        </button>
      </div>

      <section className={CardStyles.content}>{children}</section>
    </article>
  )
}
export default Card
