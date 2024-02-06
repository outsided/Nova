import Image from 'next/image'
import styles from './styles.module.css'
import img_b1 from '../../assets/buttons/pink1.png';
import img_b2 from '../../assets/buttons/violet2.png';
import img_b3 from '../../assets/buttons/blue3.png';
import img_b4 from '../../assets/buttons/green4.png';
import img_b5 from '../../assets/buttons/wblue5.png';
import img_b6 from '../../assets/buttons/wviolet6.png';
import img_b7 from '../../assets/buttons/turquoise7.png';
import img_b8 from '../../assets/buttons/orange8.png';

export const Offer = () => {
	return (
		<section className={styles.wrap}>
			<div className={styles.container}>
				<h2 className='text-[64px] font-bold --font-montserrat'>We offer</h2>
				<button  className={styles.button_1}><Image src={img_b1} width={90} height={90} alt='icon1'/><p className='text-[25px]'>Back-end</p><br/>16 Courses</button>
				<button className={styles.button_2}><Image src={img_b2} width={90} height={90} alt='icon2'/><p>English<br/>16 Courses</p></button>
				<button className={styles.button_3}><Image src={img_b3} width={90} height={90} alt='icon3'/><p>Game Dev<br/>16 Courses</p></button>
				<button className={styles.button_3}><Image src={img_b4} width={90} height={90} alt='icon4'/><p>Design<br/>16 Courses</p></button>
				<button className={styles.button_3}><Image src={img_b5} width={90} height={90} alt='icon5'/><p>3D Modeling<br/>16 Courses</p></button>
				<button className={styles.button_2}><Image src={img_b6} width={90} height={90} alt='icon6'/><p>Front-end<br/>16 Courses</p></button>
				<button className={styles.button_3}><Image src={img_b7} width={90} height={90} alt='icon7'/><p>Front-end<br/>(Native)<br/>16 Courses</p></button>
				<button className={styles.button_4}><Image src={img_b8} width={90} height={90} alt='icon8'/><p>Managment<br/>16 Courses</p></button>
			</div>	
		</section>
	)
}
