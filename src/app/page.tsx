"use client"

import { ThemeProvider } from "@/providers/ThemeProvider";
import NavbarStyleApple from '@/components/navbar/NavbarStyleApple/NavbarStyleApple';
import HeroBillboard from '@/components/sections/hero/HeroBillboard';
import TextAbout from '@/components/sections/about/TextAbout';
import ProductCardOne from '@/components/sections/product/ProductCardOne';
import ContactCenter from '@/components/sections/contact/ContactCenter';
import FooterBase from '@/components/sections/footer/FooterBase';

const assetMap = [
  {"id":"hero-image","url":"https://images.pexels.com/photos/7552324/pexels-photo-7552324.jpeg?auto=compress&cs=tinysrgb&h=650&w=940","alt":"A woman using a tablet in a bright and modern kitchen setting, surrounded by cakes and flowers, depicting a lifestyle scene."},
  {"id":"about-image","url":"https://images.pexels.com/photos/34273597/pexels-photo-34273597.jpeg?auto=compress&cs=tinysrgb&h=650&w=940","alt":"Free stock photo of bakers, bakery, bread"},
  {"id":"product-1-image","url":"https://images.pexels.com/photos/564883/pexels-photo-564883.jpeg?auto=compress&cs=tinysrgb&h=650&w=940","alt":"Chef behind a bakery window showcasing gourmet breads on glass shelves."},
  {"id":"product-2-image","url":"https://images.pexels.com/photos/9241911/pexels-photo-9241911.jpeg?auto=compress&cs=tinysrgb&h=650&w=940","alt":"Delicious assortment of pastries and tea on a marble countertop, ideal for food lovers."},
  {"id":"product-3-image","url":"https://images.pexels.com/photos/2474609/pexels-photo-2474609.jpeg?auto=compress&cs=tinysrgb&h=650&w=940","alt":"A tempting display of chocolate and vanilla cupcakes on a wooden board, perfect for dessert lovers."}
];

export default function Page() {
  return (
    <ThemeProvider
      defaultButtonVariant="icon-arrow"
      defaultTextAnimation="background-highlight"
      borderRadius="rounded"
    >
      <div id="nav" data-section="nav">
        <NavbarStyleApple
          navItems={[
            {name: "Home", id: "home"},
            {name: "About", id: "about"},
            {name: "Contact", id: "contact"},
            {name: "Policy", id: "policy"}
          ]}
          brandName="Bakery Bliss"
        />
      </div>
      <div id="hero" data-section="hero" className={"scroll-mt-24 " + ""}>
        <div className={"mx-auto px-4 md:px-6 " + ""}>
          <HeroBillboard
            title="Welcome to Bakery Bliss"
            description="Deliciousness jumping into the mouth"
            imageSrc={assetMap.find(a => a.id === "hero-image")?.url ?? "/public/images/placeholder.webp"}
            buttons={[
              {text: "Shop Now", href: "products"},
              {text: "Learn More", href: "about"}
            ]}
          />
        </div>
      </div>
      <div id="about" data-section="about" className={"scroll-mt-24 " + ""}>
        <div className={"mx-auto px-4 md:px-6 " + ""}>
          <TextAbout
            title="Crafting the finest baked goods with love and tradition"
            buttons={[
              {text: "Learn More", href: "about"}
            ]}
          />
        </div>
      </div>
      <div id="products" data-section="products" className={"scroll-mt-24 " + ""}>
        <div className={"mx-auto px-4 md:px-6 " + ""}>
          <ProductCardOne
            title="Our Selection"
            description="Explore our great variety of baked goods"
            products={[
              {id: "1", name: "Sourdough Bread", price: "$5", imageSrc: assetMap.find(a => a.id === "product-1-image")?.url ?? "/public/images/placeholder.webp"},
              {id: "2", name: "Chocolate Croissant", price: "$3", imageSrc: assetMap.find(a => a.id === "product-2-image")?.url ?? "/public/images/placeholder.webp"},
              {id: "3", name: "Cupcake Delight", price: "$4", imageSrc: assetMap.find(a => a.id === "product-3-image")?.url ?? "/public/images/placeholder.webp"}
            ]}
          />
        </div>
      </div>
      <div id="contact" data-section="contact" className={"scroll-mt-24 " + ""}>
        <div className={"mx-auto px-4 md:px-6 " + ""}>
          <ContactCenter
            tag="Subscribe"
            title="Stay Updated with Our Offers"
            description="Join our newsletter for the latest news and delicious deals."
            inputPlaceholder="Your email address"
            buttonText="Subscribe"
          />
        </div>
      </div>
      <div id="footer" data-section="footer" className={"scroll-mt-24 " + ""}>
        <div className={"mx-auto px-4 md:px-6 " + ""}>
          <FooterBase
            columns={[
              {title: "Shop", items: [
                {label: "Bread", href: "products#bread"},
                {label: "Pastries", href: "products#pastries"}
              ]},
              {title: "Company", items: [
                {label: "About Us", href: "about"},
                {label: "Contact", href: "contact"}
              ]}
            ]}
            logoSrc="/brand/logowhite.svg"
            copyrightText="© 2025 Bakery Bliss"
          />
        </div>
      </div>
    </ThemeProvider>
  );
}
