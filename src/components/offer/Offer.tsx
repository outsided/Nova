import styles from './styles.module.css'
export const Offer = () => {
	return (
		<section className='w-full'>
			<div className={styles.container}>
				<h2 className='text-[64px] font-bold '>We offer</h2>
				<div className={styles.butto_1}><button >1</button></div>
				<div className={styles.butto_2}><button >2</button></div>
				<div className={styles.butto_3}><button >3</button></div>
				<div className={styles.butto_3}><button >4</button></div>
				<div className={styles.butto_3}><button >5</button></div>
				<div className={styles.butto_2}><button >6</button></div>
				<div className={styles.butto_3}><button >7</button></div>
				<div className={styles.butto_1}><button >8</button></div>				
			</div>	
		</section>
	)
}
