# Shell Hook: auto-format Python files after every write
# Triggers on write_file or patch tool calls, runs black on any .py file.
# See: https://hermes-agent.nousresearch.com/docs/user-guide/features/hooks#shell-hooks
payload="$(cat -)"
path=$(echo "$payload" | jq -r '.tool_input.path // empty')
if [[ "$path" == *.py ]] && command -v black >/dev/null 2>&1; then
  black "$path" 2>/dev/null &
fi
printf '{}\n'
