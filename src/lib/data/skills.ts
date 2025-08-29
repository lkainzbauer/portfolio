import { RiNodejsLine, RiVuejsFill, RiAngularjsFill, RiFigmaLine, RiReactjsFill, RiSvelteFill, RiPhpFill } from "svelte-remixicon";
import Jira from "svelte-material-icons/Jira.svelte";
import Git from "svelte-material-icons/Git.svelte";

export const technologies = [
    {
        name: "Angular",
        iconType: "component",
        icon: RiAngularjsFill
    },
    {
        name: "Vue",
        iconType: "component",
        icon: RiVuejsFill
    },
    {
        name: "Figma",
        iconType: "component",
        icon: RiFigmaLine
    },
    {
        name: "D3.js",
        iconType: "svg",
        icon: 'd3'
    },
    {
        name: "Node.js",
        iconType: "component",
        icon: RiNodejsLine
    },
    {
        name: "React",
        iconType: "component",
        icon: RiReactjsFill
    },
    {
        name: "Svelte",
        iconType: "component",
        icon: RiSvelteFill
    },
    {
        name: "Scrum",
        iconType: "component",
        icon: Jira
    },
    {
        name: "Git",
        iconType: "component",
        icon: Git
    },
];

export const coding_languages = [
    {
        name: "PHP",
        iconType: "component",
        icon: RiPhpFill
    }
];