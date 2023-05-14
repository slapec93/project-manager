import { ProjectComment } from "./ProjectComment";

export type Project = {
    id: number;
    title: string;
    description: string;
    project_comments: ProjectComment[];
};
