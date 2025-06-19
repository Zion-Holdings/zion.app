export interface MockUser {
    id: string;
    name: string;
    email: string;
    avatarUrl: string;
    bio?: string;
    points: number;
    notifications: {
        email: boolean;
        push: boolean;
    };
    softDeleted?: boolean;
    password?: string;
    emailVerified?: boolean;
}
export declare const users: Record<string, MockUser>;
