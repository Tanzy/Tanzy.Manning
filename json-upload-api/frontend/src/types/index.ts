export interface UploadedData {
    highlights: Highlight[];
}

export interface Highlight {
    text: string;
    title: string;
    author?: string;
    source_type: string;
    source_url?: string;
    highlighted_at: string;
    note?: string;
    location_type: string;
    location: number;
    location_order: number;
    color?: string;
}