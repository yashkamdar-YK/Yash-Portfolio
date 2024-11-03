import { Layout } from '~/layouts';
import { Animate, List } from '~/components';
import { ListActionType } from '~/types';
import type { ListAction, Project } from '~/types';
import Image from 'next/image';
import { useState } from 'react';

export default function ProjectsPage(): JSX.Element {
	const [expandedStates, setExpandedStates] = useState<{ [key: string]: boolean }>({});
	const projects: Project[] = [
		{
			name: 'AI Trip Planner',
			description: `I developed This AI-powered trip planner customizes travel itineraries based on user preferences such as destination, budget, and travel companions. Users can log in securely with Google OAuth, and the planner utilizes Google Gemini AI to generate personalized trip plans. Integrated with Google Maps API for precise location data and Google Places for vibrant images, this tool delivers a comprehensive travel experience. Firebase is used for secure data storage, making the platform reliable and user-focused.`,
			url: 'https://github.com/yashkamdar-YK/AI-Trip-Planner',
			homepage: 'https://ai-trip-planner-blond.vercel.app',
			icon: (
				<Image
					src="/projects/trip_planner_ai_logo.jpeg"
					alt="AI-Trip-Planner"
					width={48}
					height={48}
					className="rounded-lg"
				/>
			),
			language: [
				'React',
				'Firebase',
				'Google OAuth',
				'Google Gemini AI',
				'Google Maps API',
				'Google Places API',
				'Axios',
				'TanStack Query',
				'Tailwind CSS',
				'Shadcn UI',
			],
		},
		{
			name: 'PushBase',
			description: `
• Built a scalable SaaS platform for push notifications using Next.js and NextAuth for frontend and user authentication.
• Designed a user-friendly dashboard using Shadcn components.
• Integrated Firebase Admin for push notifications and for email services.
`,
			url: null,
			homepage: 'https://fcm-frontend-three.vercel.app/',
			icon: (
				<Image
					objectFit="cover"
					src={'/projects/fcm-manager.webp'}
					height={48}
					width={48}
				/>
			),
			language: [
				'Next.js 14',
				'NextAuth',
				'TanStack Query',
				'Firebase Admin',
				'Zustand',
				'Tailwind CSS',
				'Typescript',
				'Shadcn UI'
			],
		},
		{
			name: 'Shou4U',
			description: ` Shou4U is a fully responsive E-commerce platform for showcasing and selling shoes. It includes a custom-built RESTful API, allowing efficient product data fetching and management. The site features product filtering, sorting, a user-friendly shopping cart, and secure authentication for customers. Integrated with Firebase for data storage and authentication, Shou4U provides a seamless and dynamic shopping experience.`,
			url: 'https://github.com/yashkamdar-YK/React-Shoe-E-com-Website',
			homepage: 'https://react-shoe-e-com-website.vercel.app/',
			icon: (
				<Image
					src="/projects/shou4uLogo.jpg"
					alt="Girico Hospitality"
					width={48}
					height={48}
					className="rounded-lg"
				/>
			),
			language: [
				'React',
				'JavaScript',
				'Tailwind CSS',
				'Axios',
				'Firebase',
				'React-Bootstrap',
				'Custom RESTful API',
			],
		},
	];

	const toggleExpand = (projectName: string) => {
		setExpandedStates((prev) => ({
			...prev,
			[projectName]: !prev[projectName],
		}));
	};

	const formatDescription = (description: string) => {
		return description.split('• ').map((item, index) => (
			<p key={index} className={index === 0 ? '' : 'mt-2'}>
				{index === 0 ? item : `• ${item.trim()}`}
			</p>
		));
	};
	return (
		<Layout.Default seo={{ title: 'Ankit─ projects' }}>
			<div className="my-24 mx-2 sm:mx-6 lg:mb-28 lg:mx-8">
				<div className="relative max-w-xl mx-auto">
					<List.Container>
						{projects?.map((project, index) => (
							<Animate
								animation={{ y: [50, 0], opacity: [0, 1] }}
								key={index}
								transition={{
									delay: 0.1 * index,
								}}>
								<List.Item
									key={index}
									actions={[
										...(project.post
											? [
													{
														type: ListActionType.LINK,
														external: false,
														href: project.post,
														icon: 'feather:edit-3',
														label: `Blog post about ${project.name}`,
													} as ListAction,
											  ]
											: []),
										...(project.homepage
											? [
													{
														type: ListActionType.LINK,
														href: project.homepage,
														icon: 'feather:home',
														label: `${project.name} homepage`,
													} as ListAction,
											  ]
											: []),
										{
											type: ListActionType.LINK,
											href: project.url,
											icon: 'feather:github',
											label: 'GitHub Repository',
										},
									]}
									description={
										<div className=" mt-1 text-gray-500 dark:text-gray-400 text-xs">
											<div
												className={`${
													expandedStates[project.name]
														? ''
														: 'line-clamp-3'
												}`}>
												{formatDescription(project.description)}
											</div>
											<button
												onClick={() => toggleExpand(project.name)}
												className="text-blue-500 hover:text-blue-600 mt-2">
												{expandedStates[project.name]
													? 'Read Less'
													: 'Read More'}
											</button>
										</div>
									}
									icon={<span className="text-xl">{project.icon}</span>}
									title={project.name}
									language={project.language}
								/>
							</Animate>
						))}
					</List.Container>
				</div>
			</div>
		</Layout.Default>
	);
}
