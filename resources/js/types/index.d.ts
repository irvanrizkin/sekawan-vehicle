export interface User {
    id: number;
    name: string;
    email: string;
    email_verified_at: string;
    role: string;
}

export interface Vehicle {
    id: number;
    name: string;
    license_plate: string;
    created_at: string;
    updated_at: string;
}

export interface VehicleCount {
    name: string;
    reservations_count: number;
}

export interface Reservation {
    id: number;
    purpose: string;
    vehicle_id: number;
    vehicle: Vehicle;
    start_date: string;
    end_date: string;
    approval_status: number;
    approver_id: number;
    approver: User;
    driver_id: number;
    created_at: string;
    updated_at: string;
}

export interface Log {
    id: number;
    scope: string;
    message: string;
}

export type PageProps<T extends Record<string, unknown> = Record<string, unknown>> = T & {
    auth: {
        user: User;
    };
};

export type IndexVehicleProps = PageProps & {
    vehicles: Vehicle[];
    can: {
        create: boolean;
    }
};

export type IndexReservationProps = PageProps & {
    reservations: Reservation[];
    can: {
        excel: boolean;
        create: boolean;
    }
}

export type EditReservationProps = PageProps & {
    reservation: Reservation;
    drivers: User[];
    approvers: User[];
    can: {
        approve: boolean;
        assign: boolean;
    };
}

export type DashboardProps = PageProps & {
    vehiclesCount: VehicleCount[];
}

export type IndexLogProps = PageProps & {
    logs: Log[];
}
