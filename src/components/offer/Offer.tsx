import Image from 'next/image'
import {OfferIcon} from './OfferIcon'
import styles from './styles.module.css'
export const Offer = () => {
	return (
		<section className='w-full'>
			<div className={styles.container}>
				<h2 className='text-[64px] font-bold '>We offer</h2>
				<OfferIcon />
				<div className={styles.butto_1}><button ><Image src='' alt=''/></button></div>
				<div className={styles.butto_2}><button ><Image src='' alt=''/></button></div>
				<div className={styles.butto_3}><button ><Image src='' alt=''/></button></div>
				<div className={styles.butto_3}><button ><Image src='' alt=''/></button></div>
				<div className={styles.butto_3}><button ><Image src='' alt=''/></button></div>
				<div className={styles.butto_2}><button ><Image src='' alt=''/></button></div>
				<div className={styles.butto_3}><button ><Image src='' alt=''/></button></div>
				<div className={styles.butto_1}><button ><Image src='' alt=''/></button></div>	

			</div>	
		</section>
	)
}
