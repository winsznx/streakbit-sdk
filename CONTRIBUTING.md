# Contributing to streakbit-sdk

## Local development

```bash
pnpm install
pnpm build
pnpm test
```

## Scope

- Keep the SDK focused on StreakBit contract ergonomics
- Prefer composable request builders over tightly coupled transport assumptions
- Preserve the public `StreakBitClient` surface when making additive changes
