export type Bot = {
    id: number;
    active: number;
    create_date: string;
    user_id: number;
    settings: {
        apiKey: string;
        tarif: string;
        name: string;
    }
};
