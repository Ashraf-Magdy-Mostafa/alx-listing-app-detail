import { PropertyProps } from "@/interfaces";

export const PROPERTYLISTINGSAMPLE: PropertyProps[] = [
    {
        name: "Villa Ocean Breeze",
        address: {
            state: "Seminyak",
            city: "Bali",
            country: "Indonesia",
        },

        category: ["Luxury Villa", "Pool", "Free Parking"],
        price: 3200,
        offers: {
            bed: "3",
            shower: "3",
            occupants: "4-6",
        },
        image: "https://placehold.co/600x400",
        discount: "",
        description:
            "A luxurious villa nestled in Seminyak, Bali, offering tranquil ocean breezes, a private pool, and top-tier comfort.",
        reviews: [
            {
                name: "Emma Stone",
                avatar: "https://placehold.co/48x48?text=E",
                rating: 5,
                comment: "Absolutely stunning villa. The pool and view were amazing!",
            },
            {
                name: "Liam Chen",
                avatar: "https://placehold.co/48x48?text=L",
                rating: 4,
                comment: "Very clean and peaceful, but a bit far from restaurants.",
            },
        ],
    },
    {
        name: "Mountain Escape Chalet",
        address: {
            state: "Aspen",
            city: "Colorado",
            country: "USA",
        },

        category: ["Mountain View", "Fireplace", "Self Checkin"],
        price: 1800,
        offers: {
            bed: "4",
            shower: "2",
            occupants: "5-7",
        },
        image: "https://placehold.co/600x400",
        discount: "30",
        description:
            "Experience cozy mountain living with scenic views and rustic charm in the heart of Aspen.",
        reviews: [
            {
                name: "Olivia Garcia",
                avatar: "https://placehold.co/48x48?text=O",
                rating: 5,
                comment: "Perfect winter getaway. Loved the fireplace and snowy views.",
            },
        ],
    },
    {
        name: "Cozy Desert Retreat",
        address: {
            state: "Palm Springs",
            city: "California",
            country: "USA",
        },

        category: ["Desert View", "Pet Friendly", "Self Checkin"],
        price: 1500,
        offers: {
            bed: "2",
            shower: "1",
            occupants: "2-3",
        },
        image: "https://placehold.co/600x400",
        discount: "",
        description:
            "A stylish hideaway in the desert, perfect for couples or solo travelers seeking peace and pet-friendly accommodation.",
        reviews: [
            {
                name: "Daniel Kim",
                avatar: "https://placehold.co/48x48?text=D",
                rating: 4,
                comment: "Great location and cozy interior. Loved traveling with my dog!",
            },
        ],
    },
    {
        name: "City Lights Penthouse",
        address: {
            state: "New York",
            city: "New York",
            country: "USA",
        },

        category: ["City View", "Free WiFi", "24h Checkin"],
        price: 4500,
        offers: {
            bed: "2",
            shower: "2",
            occupants: "2-4",
        },
        image: "https://placehold.co/600x400",
        discount: "15",
        description:
            "Elevate your stay in a modern penthouse overlooking the dazzling skyline of New York City.",
        reviews: [
            {
                name: "Sophia Lin",
                avatar: "https://placehold.co/48x48?text=S",
                rating: 5,
                comment: "Incredible view! Worth every penny for the night skyline alone.",
            },
        ],
    },
    {
        name: "Riverside Cabin",
        address: {
            state: "Queenstown",
            city: "Otago",
            country: "New Zealand",
        },

        category: ["Riverside", "Private Dock", "Free Kayaks"],
        price: 2800,
        offers: {
            bed: "3",
            shower: "2",
            occupants: "4-6",
        },
        image: "https://placehold.co/600x400",
        discount: "20",
        description:
            "Relax by the river in this cozy cabin with its own dock and free kayak access for outdoor adventure.",
        reviews: [
            {
                name: "Alex Rivera",
                avatar: "https://placehold.co/48x48?text=A",
                rating: 5,
                comment: "Kayaking every morning was the highlight of our trip!",
            },
            {
                name: "Jasmine Patel",
                avatar: "https://placehold.co/48x48?text=J",
                rating: 4,
                comment: "Beautiful spot, but bring bug spray for the riverside!",
            },
        ],
    },
];
