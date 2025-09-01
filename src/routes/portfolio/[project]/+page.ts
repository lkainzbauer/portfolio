import { projects } from '$lib/data/projects';
import { error } from '@sveltejs/kit';
import type { PageLoad } from './$types';

export const load: PageLoad = ({ params }) => {
	const project = projects.find((project) => project.slug === params.project);

	if (!project) error(404);

	return {
		project
	};
};