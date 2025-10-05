import Navigation3 from "~/components/Navigation3";
import Footer3 from "~/components/Footer3";
import BackToGallery3 from "~/components/BackToGallery3";

export default function PersonalTemplate3Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Navigation3 />
      <main>{children}</main>
      <Footer3 />
      <BackToGallery3 />
    </>
  );
}
