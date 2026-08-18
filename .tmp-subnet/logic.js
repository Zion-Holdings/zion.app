'use strict';

function ipToInt(ip) {
  const parts = String(ip).trim().split('.');
  if (parts.length !== 4) throw new Error('IPv4 address must have 4 octets');
  let n = 0;
  for (let i = 0; i < 4; i++) {
    const p = parts[i];
    if (!/^\d{1,3}$/.test(p)) throw new Error('Invalid octet: "' + p + '"');
    const v = parseInt(p, 10);
    if (v > 255) throw new Error('Octet out of range (0-255): ' + p);
    n = n * 256 + v;
  }
  return n >>> 0;
}

function intToIp(n) {
  n = n >>> 0;
  return [(n >>> 24) & 255, (n >>> 16) & 255, (n >>> 8) & 255, n & 255].join('.');
}

function prefixToMask(prefix) {
  if (prefix === 0) return 0;
  return (0xFFFFFFFF << (32 - prefix)) >>> 0;
}

function maskToPrefix(maskInt) {
  maskInt = maskInt >>> 0;
  let prefix = 0;
  let seenZero = false;
  for (let i = 31; i >= 0; i--) {
    const bit = (maskInt >>> i) & 1;
    if (bit === 1) {
      if (seenZero) throw new Error('Netmask is not contiguous');
      prefix++;
    } else {
      seenZero = true;
    }
  }
  return prefix;
}

function toBinary(n) {
  n = n >>> 0;
  return [(n >>> 24) & 255, (n >>> 16) & 255, (n >>> 8) & 255, n & 255]
    .map(function (o) { return o.toString(2).padStart(8, '0'); })
    .join('.');
}

function ipClass(firstOctet) {
  if (firstOctet <= 127) return 'A';
  if (firstOctet <= 191) return 'B';
  if (firstOctet <= 223) return 'C';
  if (firstOctet <= 239) return 'D (Multicast)';
  return 'E (Reserved)';
}

// Special-use IPv4 ranges (RFC 6890 and friends)
var SPECIAL_RANGES = [
  { cidr: '0.0.0.0/8',          label: 'This network (RFC 1122)',            scope: 'Reserved' },
  { cidr: '10.0.0.0/8',         label: 'Private-Use (RFC 1918)',             scope: 'Private' },
  { cidr: '100.64.0.0/10',      label: 'Shared Address Space / CGNAT (RFC 6598)', scope: 'Reserved' },
  { cidr: '127.0.0.0/8',        label: 'Loopback (RFC 1122)',                scope: 'Reserved' },
  { cidr: '169.254.0.0/16',     label: 'Link-Local / APIPA (RFC 3927)',      scope: 'Reserved' },
  { cidr: '172.16.0.0/12',      label: 'Private-Use (RFC 1918)',             scope: 'Private' },
  { cidr: '192.0.0.0/24',       label: 'IETF Protocol Assignments',          scope: 'Reserved' },
  { cidr: '192.0.2.0/24',       label: 'Documentation TEST-NET-1 (RFC 5737)', scope: 'Reserved' },
  { cidr: '192.88.99.0/24',     label: '6to4 Relay Anycast (RFC 7526)',      scope: 'Reserved' },
  { cidr: '192.168.0.0/16',     label: 'Private-Use (RFC 1918)',             scope: 'Private' },
  { cidr: '198.18.0.0/15',      label: 'Benchmarking (RFC 2544)',            scope: 'Reserved' },
  { cidr: '198.51.100.0/24',    label: 'Documentation TEST-NET-2 (RFC 5737)', scope: 'Reserved' },
  { cidr: '203.0.113.0/24',     label: 'Documentation TEST-NET-3 (RFC 5737)', scope: 'Reserved' },
  { cidr: '224.0.0.0/4',        label: 'Multicast (RFC 5771)',               scope: 'Reserved' },
  { cidr: '240.0.0.0/4',        label: 'Reserved for future use (RFC 1112)', scope: 'Reserved' },
  { cidr: '255.255.255.255/32', label: 'Limited Broadcast (RFC 919)',        scope: 'Reserved' }
];

function classifyAddress(ipInt) {
  for (var i = 0; i < SPECIAL_RANGES.length; i++) {
    var r = SPECIAL_RANGES[i];
    var bits = r.cidr.split('/');
    var base = ipToInt(bits[0]);
    var m = prefixToMask(parseInt(bits[1], 10));
    if (((ipInt & m) >>> 0) === base) {
      return { scope: r.scope, label: r.label, range: r.cidr };
    }
  }
  return { scope: 'Public', label: 'Globally routable unicast address', range: null };
}

// Parses "192.168.1.10/24", "192.168.1.10 255.255.255.0", or plain "192.168.1.10"
function parseInput(text, maskText) {
  var raw = String(text == null ? '' : text).trim();
  if (!raw) throw new Error('Please enter an IPv4 address');

  var ipPart = raw;
  var prefix = null;

  if (raw.indexOf('/') !== -1) {
    var seg = raw.split('/');
    if (seg.length !== 2) throw new Error('Malformed CIDR notation');
    ipPart = seg[0].trim();
    var pfx = seg[1].trim();
    if (pfx.indexOf('.') !== -1) {
      prefix = maskToPrefix(ipToInt(pfx));
    } else {
      if (!/^\d{1,2}$/.test(pfx)) throw new Error('Invalid prefix length: "' + pfx + '"');
      prefix = parseInt(pfx, 10);
      if (prefix > 32) throw new Error('Prefix length must be 0-32');
    }
  } else {
    // maybe "ip mask" whitespace form
    var ws = ipPart.split(/[\s,]+/).filter(Boolean);
    if (ws.length === 2) {
      ipPart = ws[0];
      prefix = maskToPrefix(ipToInt(ws[1]));
    } else {
      ipPart = ws[0] || '';
    }
  }

  if (prefix === null) {
    var mt = String(maskText == null ? '' : maskText).trim();
    if (mt) {
      if (mt.indexOf('.') !== -1) {
        prefix = maskToPrefix(ipToInt(mt));
      } else {
        var cleaned = mt.replace(/^\//, '');
        if (!/^\d{1,2}$/.test(cleaned)) throw new Error('Invalid netmask/prefix: "' + mt + '"');
        prefix = parseInt(cleaned, 10);
        if (prefix > 32) throw new Error('Prefix length must be 0-32');
      }
    }
  }

  if (prefix === null) prefix = 32;
  return { ipInt: ipToInt(ipPart), prefix: prefix };
}

function calculate(text, maskText) {
  var parsed = parseInput(text, maskText);
  var ipInt = parsed.ipInt;
  var prefix = parsed.prefix;

  var maskInt = prefixToMask(prefix);
  var wildcardInt = (~maskInt) >>> 0;
  var networkInt = (ipInt & maskInt) >>> 0;
  var broadcastInt = (networkInt | wildcardInt) >>> 0;
  var totalHosts = Math.pow(2, 32 - prefix);

  var usableHosts, firstHostInt, lastHostInt, hostNote;
  if (prefix === 32) {
    usableHosts = 1;
    firstHostInt = networkInt;
    lastHostInt = networkInt;
    hostNote = 'Single host route (/32) — no network or broadcast address.';
  } else if (prefix === 31) {
    usableHosts = 2;
    firstHostInt = networkInt;
    lastHostInt = broadcastInt;
    hostNote = 'Point-to-point link (/31, RFC 3021) — both addresses are usable.';
  } else {
    usableHosts = totalHosts - 2;
    firstHostInt = (networkInt + 1) >>> 0;
    lastHostInt = (broadcastInt - 1) >>> 0;
    hostNote = null;
  }

  var cls = classifyAddress(ipInt);
  var firstOctet = (ipInt >>> 24) & 255;

  return {
    prefix: prefix,
    cidr: intToIp(networkInt) + '/' + prefix,
    ipAddress: intToIp(ipInt),
    ipBinary: toBinary(ipInt),
    network: prefix >= 31 ? (prefix === 32 ? 'N/A (host route)' : intToIp(networkInt)) : intToIp(networkInt),
    networkRaw: intToIp(networkInt),
    broadcast: prefix >= 31 ? 'N/A' : intToIp(broadcastInt),
    broadcastRaw: intToIp(broadcastInt),
    firstHost: intToIp(firstHostInt),
    lastHost: intToIp(lastHostInt),
    totalHosts: totalHosts,
    usableHosts: usableHosts,
    netmask: intToIp(maskInt),
    netmaskBinary: toBinary(maskInt),
    wildcard: intToIp(wildcardInt),
    wildcardBinary: toBinary(wildcardInt),
    ipClass: ipClass(firstOctet),
    scope: cls.scope,
    scopeLabel: cls.label,
    scopeRange: cls.range,
    hostNote: hostNote,
    range: intToIp(networkInt) + ' - ' + intToIp(broadcastInt)
  };
}

if (typeof module !== 'undefined' && module.exports) {
  module.exports = { ipToInt, intToIp, prefixToMask, maskToPrefix, toBinary, calculate, parseInput, classifyAddress, ipClass };
}
