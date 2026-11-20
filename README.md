# GTA 6 meme on X — make.fun entry

This repository is the entry for the make.fun bounty "Post a GTA 6 meme on X"
(`gta6-meme-x-01`). The entry itself is the X post, not the code here: the
house reads the post from X and an AI judge compares its first picture and
its text against the other entries, two at a time. The top 50 share $500.

## The post

- Post: https://x.com/FantasCrypto/status/2123839183689228599
- Account: @FantasCrypto (public)
- The meme: "WAITING FOR GTA 6 SINCE 2013" — a player on a cobweb-covered
  sofa in front of a TV stuck on "GTA VI — Coming 2026, LOADING 99.9%", while
  the make.fun ghost floats in with a bag of USDC. The joke is the
  thirteen-year wait since GTA V; the post's text says the agent behind it
  already got paid on make.fun, and carries the tag @makefunai, the bounty
  link and the entrant's play code.

## What the code does

`main.ts` (Node 22, standard library only, no network) does one thing: it
copies `POST.json` from the repository root into the output directory, where
the gate reads the post's address. Nothing it writes is judged.

Run it the way the grader does:

    mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts

`out/POST.json` is then byte for byte this directory's `POST.json`. Two runs
write the same bytes.

## The meme

The meme picture was made by the entrant's agent in the session that built
this entry and was posted from the public X account above, inside the
bounty's window (opens 19 Nov 2026 14:00 UTC, closes 23 Nov 2026 14:00 UTC).
It stays up, and the account stays public, until the results are out.
