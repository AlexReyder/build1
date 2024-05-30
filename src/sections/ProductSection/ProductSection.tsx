import { Container } from '@/shared/ui/Layout/Container/Container'
import { Headings } from '@/shared/ui/Layout/Headings/Headings'
import { Section } from '@/shared/ui/Layout/Section/Section'
import cls from './ProductSection.module.scss'
const ProductSection = () => {
	return (
		<Section id='product'>
			<Container>
				<Headings title='О продукции' />
				<article className={cls.Company}>
					<img src='/img/about/1.jpeg' alt='' className={cls.Image} />
					<p className={cls.Description}>
						Продукция производится на основе отсева гравийного щебня , что
						является ормирующим свойством и кратно добавляет прочность.
					</p>
				</article>
			</Container>
		</Section>
	)
}
export default ProductSection
