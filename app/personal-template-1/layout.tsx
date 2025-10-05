import Navigation from "~/components/Navigation";
import Footer from "~/components/Footer";
import BackToGallery from "~/components/BackToGallery";

export default function PersonalTemplate1Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Navigation />
      <main>{children}</main>
      <Footer />
      <BackToGallery />
    </>
  );
}
