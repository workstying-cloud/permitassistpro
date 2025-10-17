# npm install troubleshooting

Attempted to run `npm install --legacy-peer-deps` to refresh the workspace lockfile. The install failed due to 403 Forbidden errors when requesting scoped packages such as `@types/react` from the registry. This indicates the configured proxy or registry credentials do not grant access to scoped packages, preventing lockfile regeneration.

Logs are stored under `/root/.npm/_logs/` with timestamps like `2025-10-17T01_58_09_172Z-debug-0.log` for further inspection.
