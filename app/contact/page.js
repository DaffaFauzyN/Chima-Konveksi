import ContactContent from "./ContactContent";

export const metadata = {
  title: "Hubungi Kami | Alamat Workshop & Kontak WhatsApp",
  description: "Siap memulai produksi brand fashion atau seragam Anda? Hubungi tim Chima Konveksi melalui WhatsApp atau kunjungi workshop kami di Bandung.",
  keywords: [
    "alamat chima konveksi",
    "kontak chima konveksi",
    "konveksi bandung whatsapp",
    "workshop konveksi bandung",
  ],
  alternates: {
    canonical: "https://www.chimakonveksi.my.id/contact",
  },
  openGraph: {
    title: "Hubungi Kami | Chima Konveksi - Alamat & Kontak",
    description: "Siap memulai produksi brand fashion atau seragam Anda? Hubungi tim Chima Konveksi melalui WhatsApp atau kunjungi workshop kami di Bandung.",
    url: "https://www.chimakonveksi.my.id/contact",
    type: "website",
  },
};

export default function Contact() {
  return <ContactContent />;
}
