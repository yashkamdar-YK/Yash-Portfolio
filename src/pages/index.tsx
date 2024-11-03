import dynamic from 'next/dynamic';
import { Icon } from '@iconify/react';

import { Animate, Button, Pill } from '~/components';
import { EventType, NavigationItemType } from '~/types';
import { Layout } from '~/layouts';

import type { EventProps } from '~/components/Event.component';
import type { NavigationItem } from '~/types';

const Event = dynamic<EventProps>(
	() => import('~/components/Event.component').then(({ Event }) => Event),
	{
		ssr: false,
	},
);

const ACTIONS: Array<NavigationItem> = [
	{
		type: NavigationItemType.LINK,
		href: 'https://www.linkedin.com/in/yash-kamdar-0ab3aa2a5/',
		icon: <Icon className="mr-3" icon="line-md:linkedin" />,
		text: 'LinkedIn',
	},
	{
		type: NavigationItemType.LINK,
		href: '/projects',
		icon: <Icon className="mr-3" icon="line-md:text-box-multiple" />,
		text: 'Projects',
	},
	{
		type: NavigationItemType.LINK,
		external: true,
		href: 'https://github.com/yashkamdar-YK',
		icon: <Icon className="mr-3" icon="line-md:github" />,
		text: 'GitHub',
	},
	{
		type: NavigationItemType.LINK,
		href: 'https://drive.google.com/file/d/1GSHo_Yf8eaR01hBTmUdiS5moZKmprLPf/view?usp=sharing',
		icon: <Icon className="mr-3" icon="mdi:resume" />,
		text: 'Resume',
	},
];

export default function HomePage(): JSX.Element {
	const today = new Date();
	const birthday = new Date('2003-02-25');
	const isBirthday =
		today.getDate() === birthday.getDate() && today.getMonth() === birthday.getMonth();

	const description = `I am a software engineer & Web developer`;

	return (
		<Layout.Default>
			{isBirthday && <Event event={EventType.BIRTHDAY} />}
			<div className="min-h-screen flex items-center justify-center py-12">
				<div className="max-w-md sm:max-w-lg md:sm:max-w-2xl lg:sm:max-w-3xl w-full space-y-8 text-center">
					<Animate
						as="h1"
						animation={{
							opacity: [0, 1],
							scale: [0.75, 1],
						}}
						className="text-gray-800 dark:text-white text-2xl sm:text-3xl md:text-5xl lg:text-7xl tracking-tight font-extrabold  ">
						Hey <span className="inline-block origin-70 animate-wave">👋</span> I&apos;m
						<br />
						Yash Kamdar <br /> A React
						<Pill.Standard className="mt-4">Developer</Pill.Standard>
					</Animate>

					<Animate
						as="p"
						animation={{
							opacity: [0, 1],
							scale: [0.75, 1],
						}}
						className="max-w-xs mt-4 md:mt-8 mx-auto text-base text-gray-400 sm:text-lg md:text-xl md:max-w-3xl"
						transition={{
							delay: 0.5,
						}}>
						{description}
					</Animate>

					<div className="flex flex-col sm:flex-row items-center justify-center sm:space-x-4 space-y-4 sm:space-y-0 w-full mt-8 sm:mt-4">
						{ACTIONS.map((action, index) => {
							if (action.type !== NavigationItemType.LINK) return null;

							return (
								<Animate
									animation={{
										y: [50, 0],
										opacity: [0, 1],
									}}
									className="w-full sm:w-auto"
									key={index}
									transition={{
										delay: 0.1 * (index + 2) + 0.5,
									}}>
									<Button.Outline
										className="flex flex-nowrap"
										href={action.href}
										target={action.external && '_blank'}>
										{action.icon}
										<span>{action.text}</span>
									</Button.Outline>
								</Animate>
							);
						})}
					</div>
				</div>
			</div>
		</Layout.Default>
	);
}
