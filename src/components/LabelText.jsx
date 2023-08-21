function LabelText({ label, children }) {
  return (
    <div className="flex flex-col w-full text-xs pb-3 gap-y-1">
      <span className="text-gray-400">{label}</span>
      <div className="flex flex-col w-full gap-y-2">{children}</div>
    </div>
  )
}
export default LabelText
