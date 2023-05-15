import { ProjectComment } from "./ProjectComment";

export type Project = {
    id: number;
    title: string;
    description: string;
    status: string;
    project_comments: ProjectComment[];
};
