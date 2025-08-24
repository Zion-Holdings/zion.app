
# Icon Troubleshooting Guide

## Fixing Lucide React Icon Issues

If you encounter errors with missing lucide-react icons, follow these steps to resolve them:

### Option 1: Use the Icon Wrapper (Recommended)

The project includes a centralized icon management system at `src/components/icons/index.tsx`.

1. Import icons from our wrapper instead of directly from lucide-react:

```tsx
// INSTEAD OF THIS:
import { Star, Plus } from 'lucide-react';

// DO THIS:
import { StarIcon, Plus } from '@/components/icons';
```

2. If you need an icon that's not exported, add it to the `iconAliases` object in `src/components/icons/index.tsx`.

### Option 2: Run the Automated Script

We've included a helper script to automatically update icon imports across the codebase:

```bash
# First install the required dependency
npm install glob --save-dev

# Then run the script from the project root
node scripts/update-icon-imports.js
```

### Common Icons and Their Aliases

Some icons have been renamed for consistency:
- `Star` → `StarIcon` 
- `Check` → `CheckIcon`
- `Calendar` → `CalendarIcon` 
- `RefreshCw` → `RefreshCcw` (fixed spelling)
- `Lock` is using the standard lucide icon
- `Trash` and `Trash2` both map to the `Trash2` icon
- `BarChart` maps to `BarChart3`

## Adding New Icons

If you need to use a new icon:

1. Check if it's available in lucide-react: [Lucide Icons](https://lucide.dev/icons)
2. Add it to the `iconAliases` object in `src/components/icons/index.tsx`
3. Export it from the same file
4. Import it from `@/components/icons` in your components

## Common Issues

If you see errors like:
```
error TS2305: Module '"lucide-react"' has no exported member 'IconName'.
```

This means you're importing the icon directly from lucide-react instead of our icon wrapper. Update your import statement to use:

```tsx
import { IconName } from '@/components/icons';
```
