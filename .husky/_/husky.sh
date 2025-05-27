#!/usr/bin/env sh
if [ -z "$husky_skip_init" ]; then
  debug() {
    [ -n "$HUSKY_DEBUG" ] && echo "husky (debug) - $1"
  }
  readonly hook_name="$(basename "$0")"
  debug "starting $hook_name..."
  if [ "$HUSKY" = "0" ]; then
    debug "HUSKY env variable is set to 0, skipping hook"
    exit 0
  fi
  if [ -f ~/.huskyrc ]; then
    debug "read ~/.huskyrc"
    . ~/.huskyrc
  fi
  export husky_skip_init=1
  sh -e "$0" "$@"
  exitCode="$?"
  debug "finish $hook_name (exit $exitCode)"
  exit "$exitCode"
fi
