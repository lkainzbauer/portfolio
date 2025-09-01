import { technologies, coding_languages } from "$lib/data/skills";
import { experiences } from '$lib/data/experiences';

export function load() {
	return {
		technologies: technologies,
        coding_languages: coding_languages,
        experiences: experiences
	};
}