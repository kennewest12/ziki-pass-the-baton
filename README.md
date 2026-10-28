# Ziki — Pass the Baton

A whimsical redesign of the owner-consultation card in [Ziki's AI agents section](https://ziki.dev/#agents). This is an independent task prototype, not the production Ziki application.

## The idea

Make the moment between an agent's proposed plan and a human's approval easy to understand. A friendly baton illustration connects the two participants, with explicit Plan → Approve → Deliver progress.

## Try it

- Approve the plan to animate the baton handoff and advance the workflow.
- Request changes and add feedback to the illustrative plan.
- Preview delivery and the independent-review handoff.
- Reset and replay the demonstration.

All actions are browser-local simulations. No issues, agents, or pull requests are changed. The design keeps Ziki's horizontal navigation and includes responsive layouts, keyboard focus states, and reduced-motion support.

## Run locally

Requires Node.js. No third-party packages are needed.

```sh
npm run dev
```

Open http://127.0.0.1:4173.

## Deploy to Vercel

Import this GitHub repository into Vercel. The included vercel.json selects the Other framework preset, runs `npm run build`, and publishes `dist`. No environment variables are needed.

Alternatively, with the Vercel CLI signed in:

```sh
vercel --prod
```

## Validation

Browser-checked desktop and 390px mobile layouts, feedback submission, plan approval, delivery preview, and reset. JavaScript syntax checked with Node.js.

## Design references

- Product and placement: https://ziki.dev/#agents
- Whimsical visual inspiration: https://mailchimp.com/about/brand-assets/
- Original baton, agent, and human SVG illustration built for this prototype. Mailchimp artwork is not reused.
