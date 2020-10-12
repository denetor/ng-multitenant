export class User {
    id: number;
    name: string;
    lastName: string;
    email: string;
    technicalConsent: boolean;
    marketingConsent: boolean;
    profilingConsent: boolean;
    lastLoginAt: Date;
    token?: string;
}
