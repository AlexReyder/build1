'use client'
import { Logo } from '@/shared/ui/Icons/Logo/Logo'
import { MailIcon } from '@/shared/ui/Icons/MailIcon/MailIcon'
import { PhoneIcon } from '@/shared/ui/Icons/PhoneIcon/PhoneIcon'
import { Menu } from '@/widgets/Menu'
import Link from 'next/link'
import cls from './Header.module.scss'

export const Header = () => {
	return (
		<header className={cls.Header}>
			<Link href='/' className={cls.LogoBox}>
				<Logo />
			</Link>

			<nav className={cls.Nav}>
				<ul className={cls.Nav__list}>
					<li className={cls.Nav__item}>
						<a href='/'>Главная</a>
					</li>
					<li className={cls.Nav__item}>
						<a href='/catalog'>Каталог</a>
					</li>
					<li className={cls.Nav__item}>
						<a href='/gallery'>Галерея</a>
					</li>
					<li className={cls.Nav__item}>
						<a href='/delivery'>Доставка</a>
					</li>
					<li className={cls.Nav__item}>
						<a href='/about'>О компании</a>
					</li>
					<li className={cls.Nav__item}>
						<a href='/contacts'>Контакты</a>
					</li>
				</ul>
			</nav>
			<div className={cls.Communicate}>
				<a href='tel:+79655588882' className={cls.Communicate__item}>
					<PhoneIcon className={cls.Icon} fill='#3C7B68' />
					<span>+7 (965) 558-88-82</span>
				</a>
				<a href='mailto:slava1700@yandex.ru' className={cls.Communicate__item}>
					<MailIcon className={cls.Icon} fill='#3C7B68' />
					<span>slava1700@yandex.ru</span>
				</a>
				<Menu className={cls.Hamburger} />
			</div>
		</header>
	)
}
