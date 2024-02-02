import Image from 'next/image'

const imges = [
	{id: 1,
	src: '../../assets/buttons/pink.png',
	alt: 'png1',
	color:'#A35486'
},
	{id: 2,
	src: '../../assets/buttons/violet2.png',
	alt: 'png2',
	color:'#8133F1'
},
	{id: 3,
	src: '../../assets/buttons/blue3',
	alt: 'png3',
	color:'#2796EC'
	
},
	{id: 4,
	src: '../../assets/buttons/green4',
	alt: 'png4',
	color:'#358844'
},
	{id: 5,
	src: '../../assets/buttons/wblue5',
	alt: 'png5',
	color:'#4795B1'
},
	{id: 6,
	src: '../../assets/buttons/wviolet6.png',
	alt: 'png6',
	color:'#7A79F0'

},
	{id: 7,
	src: '../../assets/buttons/turquoise7.png',
	alt: 'png7',
	color:'#8AD1D1'
},
	{id: 7,
	src: '',
	alt: 'png8',
	color:'#ED8242'
},

]
export const OfferIcon = (imges) => {
	console.log(imges)
	return (
		<div className={`p-[20px] flex items-center justify-center ${imges.color}`}>
			<Image width={45} height={45} src={imges.src} alt={imges.alt} />
			<Image src={}/>
		</div>
	)
}
