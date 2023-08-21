function Radio({ label, name, id }) {
  return (
    <div className="flex items-center text-sm mb-2">
      <input
        name={name}
        id={id}
        type="radio"
        className="w-3 h-3 inline-flex items-center justify-center bg-zinc-400 rounded-full appearance-none before:pointer-events-none before:absolute before:h-[0.375rem] before:w-[0.375rem] before:rounded-full before:bg-white checked:bg-accent-lime"
      />
      <label htmlFor={id} className="ml-2 cursor-pointer">
        {label}
      </label>
    </div>
  )
}
export default Radio
