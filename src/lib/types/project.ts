export interface Project {
    slug: string,
    name: string,
    description: string,
    technologies: technology[],
    imgName: string,
    url?: string
}

interface technology {
    icon: string,
    name: string
}