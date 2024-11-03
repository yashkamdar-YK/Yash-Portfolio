import { NextSeo } from 'next-seo';
import { useRouter } from 'next/router';

import type { ComponentProps } from 'react';

export function useSeoProps(
	props: Partial<ComponentProps<typeof NextSeo>> = {},
): Partial<ComponentProps<typeof NextSeo>> {
	const router = useRouter();

	const title = 'Ankit─ developer';
	const description = "Hey 👋 I'm Ankit Panchal, a developer";

	return {
		title,
		description,
		canonical: `https://dev-ankit.vercel.app/${router.asPath}`,
		openGraph: {
			title,
			description,
			site_name: 'Ankit Panchal',
			url: `https://dev-ankit.vercel.app/${router.asPath}`,
			type: 'website',
			images: [
				{
					url: 'https://dev-ankit.vercel.app/banner.png',
					alt: description,
					width: 1280,
					height: 720,
				},
			],
		},
		...props,
	};
}
