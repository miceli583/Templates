import Navigation4 from "~/components/Navigation4";
import Footer4 from "~/components/Footer4";
import BackToGallery4 from "~/components/BackToGallery4";

export default function CommunityTemplateLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Navigation4 />
      <main>{children}</main>
      <Footer4 />
      <BackToGallery4 />
    </>
  );
}
