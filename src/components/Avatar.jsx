import AvatarStyles from '../assets/css/avatar.module.css'
import { IconEdit } from './Icons'

function Avatar({ url, name, handleClick }) {
  return (
    <div className={AvatarStyles.wrapper}>
      <img className={AvatarStyles.image} src={url} alt={name} />
      <button className={AvatarStyles.btn} onClick={handleClick} type="button">
        <IconEdit iconClass={'w-4 h-4'} />
      </button>
    </div>
  )
}
export default Avatar
