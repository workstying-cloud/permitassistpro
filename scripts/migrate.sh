#!/usr/bin/env bash
set -euo pipefail

npm run db-migrate --workspace apps/web
