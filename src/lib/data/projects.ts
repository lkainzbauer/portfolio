import type { Project } from "$lib/types/project";

export const projects: Project[] = [
    {
        slug: "tasmovo",
        name: "Tasmovo",
        description: "Lorem ipsum dolor sit amet consectetur. Gravida cursus purus eget tincidunt etiam urna. A eget vitae non est quis. Nibh at pellentesque in faucibus. In etiam gravida suspendisse at phasellus auctor enim faucibus accumsan. Mattis justo lectus interdum vivamus arcu sed et vehicula enim. Volutpat.",
        technologies: [
            {
                icon: "akar-icons:angular-fill",
                name: "Angular"
            }
        ],
        imgName: "tasmovo.png",
    },
    {
        slug: "bevry",
        name: "Bevry",
        description: "Lorem ipsum dolor sit amet consectetur. Gravida cursus purus eget tincidunt etiam urna. A eget vitae non est quis. Nibh at pellentesque in faucibus. In etiam gravida suspendisse at phasellus auctor enim faucibus accumsan. Mattis justo lectus interdum vivamus arcu sed et vehicula enim. Volutpat.",
        technologies: [
            {
                icon: "ri:vuejs-fill",
                name: "Vue"
            },
            {
                icon: "file-icons:nestjs",
                name: "NestJS"
            },
            {
                icon: "lineicons:mysql",
                name: "MySQL"
            },
        ],
        imgName: "bevry.png",
        url: "https://www.bevry.app/"
    },
];