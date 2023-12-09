import { Content } from "@prismicio/client";
import { PrismicNextImage, PrismicNextLink } from "@prismicio/next";
import { PrismicRichText, SliceComponentProps } from "@prismicio/react";

/**
 * Props for `Hero`.
 */
export type HeroProps = SliceComponentProps<Content.HeroSlice>;

/**
 * Component for "Hero" Slices.
 */
const Hero = ({ slice }: HeroProps): JSX.Element => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
     <PrismicRichText field={slice.primary.heading} components={{
      heading1: ({children}) =>(
        <h1 className="text-7xl font-bold color-red-950">{children}</h1>
      )
     }}/>
     <PrismicRichText field={slice.primary.body} />
     <PrismicNextLink field={slice.primary.button_link}>
      {slice.primary.button_text}
      </PrismicNextLink>
     <PrismicNextImage field={slice.primary.image}  className="image-fluid"/>

    </section>
  );
};

export default Hero;
