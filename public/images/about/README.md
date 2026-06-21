Drop your portrait here as `portrait.jpg`.

Then in `components/AboutMe.js`, replace the <PlaceholderImage .../> with:

```jsx
import Image from "next/image";
// ...
<Image src="/images/about/portrait.jpg" alt="Swarna" fill className="object-cover" />
```
