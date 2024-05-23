export default function statusString(status: number) {
    switch (status) {
        case 0:
            return 'Pending';
        case 1:
            return 'Approved by Admin';
        case 2:
            return 'Approved by Manager';
        case 3:
            return 'Rejected';
        default:
            return 'Unknown';
    }
}
