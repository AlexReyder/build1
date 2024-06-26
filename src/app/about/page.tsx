'use client'
import { AboutSection } from '@/sections/AboutSection/AboutSection'
import DocumentSection from '@/sections/DocumentSection/DocumentSection'
import ProductSection from '@/sections/ProductSection/ProductSection'
import Breadcrumb from '@/widgets/Breadcrumb/Breadcrumb'
import { Footer } from '@/widgets/Footer'
import { Header } from '@/widgets/Header'
import cls from './about.module.scss'

export default function About() {
	return (
		<main>
			<Header />
			<Breadcrumb currentPage='О компании' />
			<AboutSection classContainer={cls.AboutContainer} />
			<ProductSection />
			<DocumentSection />
			<Footer />
		</main>
	)
}
