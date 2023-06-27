export interface Signal {
    _id: string;
    location: {
        long: number;
        lat: number;
    };
    stream_link: string;
}
