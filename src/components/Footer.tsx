import { createClient } from '@/prismicio';
import { PrismicNextLink } from '@prismicio/next';

export default async function Footer()
{
    const client = createClient();
    const settings  = await client.getSingle("settings");
    return 
    (
        <footer>
            <h1>footer 1</h1>
            <h1>footer 2</h1>
            <h1>footer 3</h1>
        </footer>

    )
    
    
    
}