import { projects } from "$lib/data/projects";
import type { Project } from "$lib/types/project";

export function match(value: string): boolean {
    return (projects as Project[]).some(p => p.slug === value);
}