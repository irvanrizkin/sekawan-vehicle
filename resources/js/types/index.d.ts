export interface User {
    id: number;
    name: string;
    email: string;
    email_verified_at: string;
}

export interface Vehicle {
    id: number;
    name: string;
    license_plate: string;
    created_at: string;
    updated_at: string;
}

export type PageProps<T extends Record<string, unknown> = Record<string, unknown>> = T & {
    auth: {
        user: User;
    };
};

export type IndexVehicleProps = PageProps & {
    vehicles: Vehicle[];
};
