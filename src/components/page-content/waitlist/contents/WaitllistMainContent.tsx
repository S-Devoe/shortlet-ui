import House from "@/assets/images/house.png";
import WaitlistCard from "../components/WaitlistCard";

const WaitllistMainContent = () => {
  return (
    <section className="flex flex-col gap-4 mt-2 md:mt-[2.5rem] md:grid grid-cols-3 md:gap-8 lg:gap-[3.5rem] ">
      {Array(6)
        .fill(mockWaitlist)
        .map((items, i) => (
          <WaitlistCard {...items} key={`waitlist-${i + 1}`} />
        ))}
    </section>
  );
};

export default WaitllistMainContent;

const mockWaitlist = {
  title: "Jacob Mews Skypoint",
  image: House,
  rating: 4.6,
  reviews: "18",
  bedrooms: 3,
  guests: 5,
};
