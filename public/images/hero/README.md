Drop your hero photo here as `hero.jpg` (landscape, ideally 1920×1280px or larger).

Then in `components/Hero.js`, replace the gradient `<div>` + `<svg>` near the
top of the file with:

```jsx
import Image from "next/image";
// ...
<Image src="/images/hero/hero.jpg" alt="Finland landscape" fill priority className="object-cover" />
```
