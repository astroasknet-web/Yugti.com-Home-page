# YUGTI.com: group homepage

The parent homepage for the YUGTI group. It links out to six independent division websites, each opening in a new tab (`target="_blank" rel="noopener noreferrer"`).

Next.js 15 (App Router), React 19, TypeScript. No database, no forms, no third-party scripts.

```
npm install
npm run dev     # http://localhost:3000
npm run build
```

## Configuring destinations

Division URLs live in `lib/content.ts` and are overridden by env vars (see `.env.example`), so a domain can change without touching a component:

| Division | Env var | Default |
|---|---|---|
| YUGTI AI | `NEXT_PUBLIC_AI_URL` | https://yugti.ai |
| YUGTI Overseas Education | `NEXT_PUBLIC_OVERSEAS_URL` | https://yugtioverseaseducation.com |
| YUGTI Learning | `NEXT_PUBLIC_LEARNING_URL` | https://yugtilearning.com |
| YUGTI Jobs | `NEXT_PUBLIC_JOBS_URL` | https://yugtijobs.com |
| YUGTI Technology | `NEXT_PUBLIC_TECHNOLOGY_URL` | https://yugtitechnology.com |
| mathstudy.in | `NEXT_PUBLIC_MATHSTUDY_URL` | https://mathstudy.in |

The brief gave full URLs only for YUGTI AI and mathstudy.in. The other four defaults are placeholders: confirm the real domains and set the env vars. Also set `NEXT_PUBLIC_CONTACT_EMAIL`, `NEXT_PUBLIC_LINKEDIN_URL` and `NEXT_PUBLIC_SOCIAL_URL`; the footer shows LinkedIn and social media as plain text until their URLs are set.

GitHub repository URLs are never used as public destinations.

## Notes

- No statistics or achievements are invented. The only figures shown (6 divisions, 6 websites, 1 ecosystem) are structural facts. Add animated counters only when verified numbers exist.
- Hero globe and orbit respect `prefers-reduced-motion`.
