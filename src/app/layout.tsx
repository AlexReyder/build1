import type { Metadata } from 'next'
import { Onest } from 'next/font/google'
import './globals.css'

const onest = Onest({
	subsets: ['cyrillic'],
	weight: ['300', '400', '500', '600', '700', '800', '900'],
	display: 'swap',
})

export const metadata: Metadata = {
	title: 'Тротуарная плитка',
	description:
		'Производство и продажа тротуарной, фасадной плитки, бордюров в Перми и Пермском крае.',
}

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode
}>) {
	return (
		<html lang='ru'>
			<body className={onest.className} style={{ overflow: 'auto' }}>
				{children}
			</body>
		</html>
	)
}
