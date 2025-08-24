# Smart Defaults & Contextual Help

## ✅ Feature Overview

- Provides sensible defaults across common forms using data from the authenticated user
- Reduces friction during onboarding and checkout flows
- Offers searchable help articles with categories and step-by-step guides
- Allows users to give quick feedback on each help article

## 🛠️ Key Implementations

1. **Prefilled Profile Forms**
   - `src/components/profile/ProfileForm.tsx` loads `defaultValues` so your name and bio appear automatically.
2. **Checkout Smart Defaults**
   - `src/pages/Checkout.tsx` pre-populates the name and email fields from `useAuth`.
3. **Adaptive Onboarding Placeholders**
   - `src/components/onboarding/ProfileSetup.tsx` changes placeholder text depending on whether the user is a client, talent, or service provider.
4. **In‑App Help Center**
   - `src/components/support/HelpCenter.tsx` with `HelpCategoryList`, `HelpArticleList` and `HelpArticleView` delivers contextual articles and feedback buttons.

## 🚀 Benefits

- Faster form completion for returning users
- Clear instructions embedded directly in the UI
- Improved self‑service support through searchable help topics

Visit `/help` or open the Help & Resources section of the Features Guide to explore the contextual help system.
