import { Container } from '@/shared/ui/Layout/Container/Container'
import { Headings } from '@/shared/ui/Layout/Headings/Headings'
import { Section } from '@/shared/ui/Layout/Section/Section'
import { ArrowSlider } from '@/shared/ui/Sliders/ArrowSlider/ArrowSlider'
import 'photoswipe/dist/photoswipe.css'
import { Gallery, Item } from 'react-photoswipe-gallery'
import cls from './DeliveryPhotosSection.module.scss'
const DeliveryPhotosSection = () => {
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
				<Headings title='Погрузка' />
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
								original='/img/delivery/1.jpg'
								thumbnail='/img/delivery/1.jpg'
								width='1920'
								height='1440'
								alt='Доставка'
								key={1}
							>
								{({ ref, open }) => (
									<img
										src='/img/delivery/1.jpg'
										className={cls.Del}
										alt='Доставка'
										ref={ref}
										onClick={open}
									/>
								)}
							</Item>,
							<Item
								original='/img/delivery/2.jpg'
								thumbnail='/img/delivery/2.jpg'
								width='1920'
								height='1440'
								alt='Доставка'
								key={1}
							>
								{({ ref, open }) => (
									<img
										src='/img/delivery/2.jpg'
										className={cls.Del}
										alt='Доставка'
										ref={ref}
										onClick={open}
									/>
								)}
							</Item>,
							<Item
								original='/img/delivery/3.jpg'
								thumbnail='/img/delivery/3.jpg'
								width='1920'
								height='1440'
								alt='Доставка'
								key={1}
							>
								{({ ref, open }) => (
									<img
										src='/img/delivery/3.jpg'
										className={cls.Del}
										alt='Доставка'
										ref={ref}
										onClick={open}
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
export default DeliveryPhotosSection
