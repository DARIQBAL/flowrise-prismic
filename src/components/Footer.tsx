// import { createClient } from '@/prismicio';
// import { PrismicNextLink } from '@prismicio/next';
// import Link from 'next/link';

// export default async function Footer()
// {
//     const client = createClient();
//     const settings  = await client.getSingle("settings");
//     return 
//     (
//         <footer>
//         <Link href="/">
//         {settings.data.site_title}
//         </Link>
//         <p> {settings.data.site_title}</p>
//         <nav>
//             <ul>
//             {settings.data.navigation.map(({link,label})=>(
//                 <li key={label}>
//                     <PrismicNextLink field={link}>{label}</PrismicNextLink>
//                 </li>
//                 ))}
//             </ul>
//         </nav> 
//         </footer>

//     )
    
    
    
// }




import { createClient } from "@/prismicio";
import { PrismicNextLink } from "@prismicio/next";
import Link from "next/link";
import Logo from '@/components/Logo';
import Bounded from "./Bounded";

export default async function Footer(){
    const client = createClient();
    const settings = await client.getSingle("settings");
    return (
    <Bounded as="footer">
        <div className="flex sm:flex-row flex-col justify-between items-center">
        <Link href= "/"> 
        <Logo />
        </Link>
        <p className="text-xs">@{new Date().getFullYear()} {settings.data.site_title} </p>

        <ul className="flex">
        {settings.data.navigation.map(({link, label})=>(
            <li key={label}>
                <PrismicNextLink field={link} className="p-3">{label}</PrismicNextLink>

            </li>
        ))}
        </ul>
        </div>
    </Bounded>
    );
}