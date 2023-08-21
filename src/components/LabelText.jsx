import LabelStyles from '../assets/css/labelText.module.css'

function LabelText({ label, children }) {
  return (
    <div className={LabelStyles.wrapper}>
      <span className={LabelStyles.title}>{label}</span>
      {children && <div className={LabelStyles.content}>{children}</div>}
    </div>
  )
}
export default LabelText
