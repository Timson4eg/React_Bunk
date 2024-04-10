import styles from './Notification.module.scss'
import cn from 'clsx'

const Notification = ({ type = 'success', message }) => {
	console.log(message)
	return (
		<div className={cn(styles.notification, styles.out, styles[type])}>
			{message}
		</div>
	)
}

export default Notification
