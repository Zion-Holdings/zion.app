const L = require('./logic.js');
let pass = 0, fail = 0;

function check(name, actual, expected) {
  const a = String(actual), e = String(expected);
  if (a === e) { pass++; }
  else { fail++; console.log('FAIL ' + name + ': got ' + a + ' want ' + e); }
}

function suite(input, mask, exp) {
  let r;
  try { r = L.calculate(input, mask); }
  catch (e) { fail++; console.log('FAIL threw for ' + input + ': ' + e.message); return; }
  for (const k of Object.keys(exp)) check(input + ' [' + k + ']', r[k], exp[k]);
}

// --- classic /24
suite('192.168.1.10/24', '', {
  networkRaw: '192.168.1.0', broadcastRaw: '192.168.1.255',
  firstHost: '192.168.1.1', lastHost: '192.168.1.254',
  totalHosts: 256, usableHosts: 254,
  netmask: '255.255.255.0', wildcard: '0.0.0.255',
  netmaskBinary: '11111111.11111111.11111111.00000000',
  ipClass: 'C', scope: 'Private', cidr: '192.168.1.0/24',
});

// --- address + separate dotted netmask
suite('192.168.1.10', '255.255.255.0', { networkRaw: '192.168.1.0', usableHosts: 254, prefix: 24 });
// --- whitespace form
suite('10.0.5.77 255.255.240.0', '', { networkRaw: '10.0.0.0', broadcastRaw: '10.0.15.255', prefix: 20, usableHosts: 4094, wildcard: '0.0.15.255' });
// --- mask given as prefix in second field
suite('172.16.34.200', '20', { networkRaw: '172.16.32.0', broadcastRaw: '172.16.47.255', firstHost: '172.16.32.1', lastHost: '172.16.47.254', usableHosts: 4094, scope: 'Private', ipClass: 'B' });

// --- /30
suite('10.1.2.6/30', '', { networkRaw: '10.1.2.4', broadcastRaw: '10.1.2.7', firstHost: '10.1.2.5', lastHost: '10.1.2.6', totalHosts: 4, usableHosts: 2, netmask: '255.255.255.252' });

// --- /31 edge case (RFC 3021)
suite('10.0.0.5/31', '', { networkRaw: '10.0.0.4', firstHost: '10.0.0.4', lastHost: '10.0.0.5', totalHosts: 2, usableHosts: 2, netmask: '255.255.255.254', broadcast: 'N/A', wildcard: '0.0.0.1' });

// --- /32 edge case
suite('8.8.8.8/32', '', { firstHost: '8.8.8.8', lastHost: '8.8.8.8', totalHosts: 1, usableHosts: 1, netmask: '255.255.255.255', wildcard: '0.0.0.0', network: 'N/A (host route)', broadcast: 'N/A', scope: 'Public', ipClass: 'A' });

// --- /0
suite('1.2.3.4/0', '', { networkRaw: '0.0.0.0', broadcastRaw: '255.255.255.255', firstHost: '0.0.0.1', lastHost: '255.255.255.254', totalHosts: 4294967296, usableHosts: 4294967294, netmask: '0.0.0.0', wildcard: '255.255.255.255' });

// --- /8 large
suite('10.255.255.254/8', '', { networkRaw: '10.0.0.0', broadcastRaw: '10.255.255.255', firstHost: '10.0.0.1', lastHost: '10.255.255.254', totalHosts: 16777216, usableHosts: 16777214, scope: 'Private' });

// --- /23 spanning octet
suite('192.168.3.55/23', '', { networkRaw: '192.168.2.0', broadcastRaw: '192.168.3.255', firstHost: '192.168.2.1', lastHost: '192.168.3.254', usableHosts: 510, netmask: '255.255.254.0' });

// --- /12 RFC1918 172.16 boundary
suite('172.31.255.255/12', '', { networkRaw: '172.16.0.0', broadcastRaw: '172.31.255.255', scope: 'Private', usableHosts: 1048574 });
suite('172.32.0.1/24', '', { scope: 'Public' });
suite('172.15.0.1/24', '', { scope: 'Public' });

// --- classification / scope
suite('127.0.0.1/8', '', { scope: 'Reserved', ipClass: 'A' });
suite('169.254.10.20/16', '', { scope: 'Reserved', ipClass: 'B' });
suite('100.64.1.1/10', '', { scope: 'Reserved' });
suite('224.0.0.251/32', '', { ipClass: 'D (Multicast)', scope: 'Reserved' });
suite('245.1.1.1/24', '', { ipClass: 'E (Reserved)', scope: 'Reserved' });
suite('203.0.113.5/24', '', { scope: 'Reserved' });
suite('1.1.1.1/24', '', { scope: 'Public', ipClass: 'A' });
suite('128.0.0.1/16', '', { ipClass: 'B' });
suite('191.255.255.1/16', '', { ipClass: 'B' });
suite('192.0.1.1/24', '', { ipClass: 'C', scope: 'Public' });
suite('223.255.255.1/24', '', { ipClass: 'C' });

// --- no mask defaults to /32
suite('192.168.0.1', '', { prefix: 32, usableHosts: 1 });

// --- helper round-trips
check('intToIp(0)', L.intToIp(0), '0.0.0.0');
check('intToIp(max)', L.intToIp(0xFFFFFFFF), '255.255.255.255');
check('ipToInt roundtrip', L.intToIp(L.ipToInt('172.217.14.238')), '172.217.14.238');
for (let p = 0; p <= 32; p++) {
  check('mask<->prefix ' + p, L.maskToPrefix(L.prefixToMask(p)), p);
}
check('binary /26', L.toBinary(L.prefixToMask(26)), '11111111.11111111.11111111.11000000');

// --- errors
function shouldThrow(name, fn) {
  try { fn(); fail++; console.log('FAIL ' + name + ': expected throw'); }
  catch (e) { pass++; }
}
shouldThrow('bad octet 256', () => L.calculate('256.1.1.1/24'));
shouldThrow('3 octets', () => L.calculate('10.0.1/24'));
shouldThrow('prefix 33', () => L.calculate('10.0.0.1/33'));
shouldThrow('empty', () => L.calculate(''));
shouldThrow('non-contiguous mask', () => L.calculate('10.0.0.1', '255.255.0.255'));
shouldThrow('letters', () => L.calculate('10.a.0.1/24'));
shouldThrow('negative prefix', () => L.calculate('10.0.0.1/-4'));

console.log('\n' + pass + ' passed, ' + fail + ' failed');
process.exit(fail ? 1 : 0);
