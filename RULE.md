# Code Generation Rules

## Generate Code
1. **Read First**  
   Always review these rules before generating any code.

2. **Modify Only What’s Requested**  
   When refining or adding new features, **do not reintroduce code or elements that were previously removed**.

3. **Preserve Existing Styles and Structure**  
   Keep all current styling, layout, and existing functionality intact unless explicitly asked to change.

4. **Focus Scope**  
   Only add, update, or fix the specific feature, element, or section requested—**nothing extra**.

5. **Maintain Consistency**  
   Follow the project’s existing design patterns, classes, and component usage.


## Color & Text States

### Rule 1: Neutral Color System
**All text, headers, links, buttons, and borders must use the neutral scale defined in `tailwind.config.ts`.**

- **Active State**: `text-neutral-900` (#0A0A0A)
- **Inactive State**: `text-neutral-500` (#737373)
- **Hover State**: `text-neutral-900` (transition from neutral-500 to neutral-900)

**❌ Do NOT use opacity**
```tsx
// Wrong
className="opacity-60 hover:opacity-100"

// Correct
className="text-neutral-500 hover:text-neutral-900"
```

**✅ Examples:**

```tsx
// Navigation links
<Link className="text-neutral-500 hover:text-neutral-900 transition-colors">
  WORKS
</Link>

// Social links
<a className="text-neutral-500 hover:text-neutral-900 transition-colors">
  INSTAGRAM
</a>

// Buttons
<button className="border border-neutral-900 text-neutral-900 hover:bg-neutral-900 hover:text-white">
  Get in Touch
</button>
```

### Color Reference
From `tailwind.config.ts`:
- neutral-50: #FAFAFA
- neutral-100: #F5F5F5
- neutral-200: #E5E5E5
- neutral-300: #D4D4D4
- neutral-400: #A3A3A3
- **neutral-500: #737373** (Inactive state)
- neutral-600: #525252
- neutral-700: #404040
- neutral-800: #262626
- **neutral-900: #0A0A0A** (Active state)

---

## Future Rules
Additional styling rules will be added here as the project evolves.
