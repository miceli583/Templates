import Navigation2 from "~/components/Navigation2";
import Footer2 from "~/components/Footer2";
import BackToGallery2 from "~/components/BackToGallery2";

export default function PersonalTemplate2Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Navigation2 />
      <main>{children}</main>
      <Footer2 />
      <BackToGallery2 />
    </>
  );
}
