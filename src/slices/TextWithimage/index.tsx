import { Content } from "@prismicio/client";
import clsx from "clsx";
import { PrismicNextImage } from "@prismicio/next";
import { JSXMapSerializer, PrismicRichText, SliceComponentProps } from "@prismicio/react";
import Bounded from "@/components/Bounded";
import Heading from "@/components/Heading";







const components: JSXMapSerializer = {
  heading2:({children}) => <Heading as="h2" size="lg" className="">{children}</Heading>,
  paragraph:({children})=> <p className="max-w-md text-lg font-body text-slate-600">{children}</p>,
}

/**
 * Props for `TextWithimage`.
 */
export type TextWithimageProps =
  SliceComponentProps<Content.TextWithimageSlice>;

/**
 * Component for "TextWithimage" Slices.
 */
const TextWithimage = ({ slice }: TextWithimageProps): JSX.Element => {
  return (
    <Bounded
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}>
      <div className="grid gap-8 md:grid-cols-2 place-items-center">
        <PrismicNextImage field={slice.primary.image} 
          className={clsx("rounded-lg", slice.variation === "imageRight" && "md:order-2")} />
        <div className="grid gap-4">
        <PrismicRichText field={slice.primary.heading} components={components}/>
        <PrismicRichText field={slice.primary.body} components={components}/>
        </div>
       
        
       
        </div>
    </Bounded>
  );
};

export default TextWithimage;
