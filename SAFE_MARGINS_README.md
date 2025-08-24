# Safe Margins for Zoom Animations

This project now includes a comprehensive system to prevent zoom animations from throwing content off-screen.

## Overview

Zoom animations (scale transforms) can cause content to overflow the viewport, especially on smaller screens. This system provides multiple ways to ensure content remains safely within bounds.

## Implementation Methods

### 1. Global CSS Rules (Automatic)

The global CSS now automatically applies safe margins to all direct children of the `main` element:

```css
/* Safe margins for zoom animations - prevents content from going off-screen */
main > * {
  margin-left: 1rem;
  margin-right: 1rem;
}

/* Responsive margins for different screen sizes */
@media (min-width: 640px) { /* sm */ margin: 1.5rem; }
@media (min-width: 768px) { /* md */ margin: 2rem; }
@media (min-width: 1024px) { /* lg */ margin: 3rem; }
@media (min-width: 1280px) { /* xl */ margin: 4rem; }
@media (min-width: 1536px) { /* 2xl */ margin: 5rem; }
```

### 2. Tailwind CSS Utilities

Custom safe margin utilities are available:

```tsx
// Basic safe margins
<div className="mx-safe">Content</div>

// Responsive safe margins
<div className="mx-safe sm:mx-safe-sm md:mx-safe-md lg:mx-safe-lg xl:mx-safe-xl 2xl:mx-safe-2xl">
  Content
</div>
```

### 3. SafeContentContainer Component

For pages that need explicit control, use the `SafeContentContainer` component:

```tsx
import SafeContentContainer from '../components/ui/SafeContentContainer';

export default function MyPage() {
  return (
    <SafeContentContainer>
      {/* Your page content */}
    </SafeContentContainer>
  );
}
```

### 4. CSS Classes

Use the `.page-container` class for existing pages:

```tsx
<div className="page-container">
  {/* Your page content */}
</div>
```

## Best Practices

1. **Use the global system**: The automatic margins should work for most cases
2. **Override when needed**: Use Tailwind utilities or the component for specific needs
3. **Test on mobile**: Ensure margins work well on small screens
4. **Consider existing containers**: Some pages already have `max-w-7xl mx-auto px-4` - these will work with the global margins

## Zoom Animation Safety

The system also includes:

- `transform-origin: center center` for all elements
- Responsive margins that scale with screen size
- Automatic application to main content areas

## Examples

### Service Cards with Hover Zoom

```tsx
<motion.div
  whileHover={{ scale: 1.05 }}
  className="bg-gray-800 p-6 rounded-lg"
>
  {/* Content will stay within safe bounds */}
</motion.div>
```

### Pricing Tiers with Scale Animation

```tsx
<motion.div
  initial={{ scale: 0.8 }}
  animate={{ scale: 1 }}
  className="pricing-card"
>
  {/* Content will have safe margins automatically */}
</motion.div>
```

## Migration Notes

- Existing pages will automatically get safe margins
- No changes needed for most current implementations
- The system is backward compatible
- Pages with custom layouts can opt-in using the utilities

## Troubleshooting

If content still overflows:

1. Check if the page uses the Layout component
2. Ensure content is wrapped in main tags
3. Use the SafeContentContainer component for explicit control
4. Verify Tailwind classes are properly applied