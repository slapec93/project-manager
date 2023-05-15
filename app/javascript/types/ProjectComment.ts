import { User } from "./User";

export type ProjectComment = {
    id: number;
    content: string;
    user: User;
    created_at: Date;
};
