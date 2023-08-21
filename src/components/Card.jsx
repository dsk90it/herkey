import { IconEdit } from './Icons'

function Card({ handleClick, title, children }) {
  return (
    <article className="block w-full">
      <div className="flex items-center justify-between gap-2 p-4 bg-gray-100 font-semibold text-sm">
        {title}
        <button
          onClick={handleClick}
          className="text-accent-lime"
          type="button"
        >
          <IconEdit iconClass={'w-5 h-5'} />
        </button>
      </div>

      <section className="p-4 border-t border-b lg:rounded-b-sm lg:border-l lg:border-r">
        {children}
      </section>
    </article>
  )
}
export default Card
