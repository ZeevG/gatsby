import React from 'react'
import styles from './cover.module.css'

export default (props) => {

	return (
		<div className={styles.wrapper}>
			<div className={styles.image}
				style={{"background-image": "url(https://via.placeholder.com/1000x500.png?text=Placeholder+Image)"}} />
			<div className={styles.signature}>
				<h3>Moshe Gilovitz</h3>
			</div>
		</div>
	)
}