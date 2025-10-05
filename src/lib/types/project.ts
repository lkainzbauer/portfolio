export interface Project {
    slug: string,
    name: string,
    img: string,
    img2: string,
    url?: string,
    duration: string,
    technologies: technology[],
    shortDescription: string,
    description: string,
    features: string[],
    implementation: string,
    learnings: string,
    additionalImg: string[]
}

interface technology {
    icon: string,
    name: string
}