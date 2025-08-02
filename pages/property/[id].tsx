import { PROPERTYLISTINGSAMPLE } from "@/constants/index";
import { useRouter } from "next/router";
import PropertyDetail from "@/components/property/PropertyDetail";
import ReviewSection from "@/components/property/ReviewSection";
import BookingSection from "@/components/property/BookingSection";

export default function PropertyPage() {
    const router = useRouter();
    const { id } = router.query;
    const property = PROPERTYLISTINGSAMPLE.find((item) => item.name === id);
    console.log(property);
    if (!property) return <p>Property not found</p>;

    return (
        <div className="flex flex-col lg:flex-row gap-6">
            <div className="w-full lg:w-2/3">
                <PropertyDetail property={property} />
                <ReviewSection reviews={property.reviews} />
            </div>
            <div className="w-full lg:w-1/3">
                <BookingSection price={property.price} />
            </div>
        </div>
    )
}