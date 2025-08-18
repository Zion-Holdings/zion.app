#!/usr/bin/awk -f

# Normalize lines like:
#   run: 'echo "..."
#
#   '
# into:
#   run: echo "..."

BEGIN {
  skip_echo = 0
}

{
  if (skip_echo == 1) {
    # Skip blank lines and the lone closing quote line
    if ($0 ~ /^\s*'\s*$/) {
      skip_echo = 0
      next
    }
    if ($0 ~ /^\s*$/) {
      next
    }
    # Fallback: if unexpected content appears, stop skipping and process normally
    skip_echo = 0
  }

  # Match the odd single-quoted echo pattern
  if ($0 ~ /^\s*run:\s*'\s*echo\s+"[^"]*"\s*$/) {
    match($0, /^(\s*)run:\s*'\s*echo\s+"([^"]*)"\s*$/, m)
    indent = m[1]
    msg = m[2]
    printf("%srun: echo \"%s\"\n", indent, msg)
    skip_echo = 1
    next
  }

  print $0
}

