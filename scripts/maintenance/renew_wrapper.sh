#!/bin/bash
export PATH="/usr/bin:/bin:/usr/sbin:/sbin:/usr/local/bin"
exec /usr/bin/python3 /Users/miami2/zion-support.github.io/scripts/maintenance/renew_gog_token.py "$@"
