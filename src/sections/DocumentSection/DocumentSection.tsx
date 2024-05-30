import { Container } from '@/shared/ui/Layout/Container/Container'
import { Headings } from '@/shared/ui/Layout/Headings/Headings'
import { Section } from '@/shared/ui/Layout/Section/Section'
import { ArrowSlider } from '@/shared/ui/Sliders/ArrowSlider/ArrowSlider'
import 'photoswipe/dist/photoswipe.css'
import { Gallery, Item } from 'react-photoswipe-gallery'
import cls from './DocumentSection.module.scss'
const DocumentSection = () => {
	const params2 = {
		slidesPerView: 2,
		spaceBetween: 96,
		breakpoints: {
			280: {
				slidesPerView: 1,
			},
			420: {
				slidesPerView: 2,
			},
			600: {
				slidesPerView: 3,
			},
		},
	}
	return (
		<Section id='documents' className={cls.Projects}>
			<Container className={cls.Container}>
				<Headings title='Протоколы испытаний' />
				<Gallery>
					<ArrowSlider
						controlClass={cls.Control}
						className={cls.ProjectsSlider}
						SwiperClass={cls.Slider}
						SlideClass={cls.Slide}
						WrapperClass={cls.SliderWrapper}
						config={params2}
					>
						{[
							<Item
								original='/img/documents/1.jpg'
								thumbnail='/img/documents/1.jpg'
								width='1755'
								height='1240'
								alt=''
								key={1}
							>
								{({ ref, open }) => (
									<img
										src='/img/documents/1.jpg'
										alt='Протокол испытания'
										ref={ref}
										onClick={open}
										className={cls.Doc}
									/>
								)}
							</Item>,
							<Item
								original='/img/documents/2.jpg'
								thumbnail='/img/documents/2.jpg'
								width='1755'
								height='1240'
								alt=''
								key={1}
							>
								{({ ref, open }) => (
									<img
										src='/img/documents/2.jpg'
										alt='Протокол испытания'
										ref={ref}
										onClick={open}
										className={cls.Doc}
									/>
								)}
							</Item>,
							<Item
								original='/img/documents/3.jpg'
								thumbnail='/img/documents/3.jpg'
								width='1755'
								height='1240'
								alt=''
								key={1}
							>
								{({ ref, open }) => (
									<img
										src='/img/documents/3.jpg'
										alt='Протокол испытания'
										ref={ref}
										onClick={open}
										className={cls.Doc}
									/>
								)}
							</Item>,
						]}
					</ArrowSlider>
				</Gallery>
			</Container>
		</Section>
	)
}
export default DocumentSection
