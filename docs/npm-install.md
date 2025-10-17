# npm install troubleshooting

Attempted to run `npm install --legacy-peer-deps` to refresh the workspace lockfile. The install failed due to repeated `403 Forbidden` responses when requesting scoped packages such as `@types/react` from the registry. This indicates the configured proxy or registry credentials do not grant access to scoped packages, preventing lockfile regeneration.

Latest failure log: `/root/.npm/_logs/2025-10-17T02_09_14_219Z-debug-0.log`.

If registry access is restored, rerun:

```bash
npm install --legacy-peer-deps
```

Then stage the generated `package-lock.json` and commit it:

```bash
git add package-lock.json
git commit -m "Add package-lock.json for stable Vercel builds"
```
