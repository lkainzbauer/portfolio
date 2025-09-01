import type { Project } from '$lib/types/project';
import { error, type ServerLoad } from '@sveltejs/kit';

export const load: ServerLoad = async ({ params, parent }) => {
  const { projects } = await parent();
  const project = projects.find((p: Project) => p.slug === params.project);
  if (!project) throw error(404, 'Project not found');
  return { project };
};
