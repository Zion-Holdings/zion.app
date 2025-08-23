import textwrap

with open('docs/zion-protocol.md') as f:
    raw = f.read()
text = raw.replace('\n', ' ')
lines = textwrap.wrap(text, 95)
content = 'BT\n/F1 12 Tf\n72 720 Td\n'
for line in lines:
    content += f'({line}) Tj\nT*\n'
content += 'ET\n'

objects = []

objects.append('<< /Type /Catalog /Pages 2 0 R >>')
objects.append('<< /Type /Pages /Kids [3 0 R] /Count 1 >>')
objects.append('<< /Type /Page /Parent 2 0 R /MediaBox [0 0 612 792] /Resources << /Font << /F1 4 0 R >> >> /Contents 5 0 R >>')
objects.append('<< /Type /Font /Subtype /Type1 /Name /F1 /BaseFont /Helvetica >>')
objects.append(f'<< /Length {len(content)} >>\nstream\n{content}\nendstream')

pdf = '%PDF-1.4\n'
offsets = []
for i, obj in enumerate(objects, start=1):
    offsets.append(len(pdf))
    pdf += f'{i} 0 obj\n{obj}\nendobj\n'

xref_pos = len(pdf)

pdf += f'xref\n0 {len(objects)+1}\n0000000000 65535 f \n'
for off in offsets:
    pdf += f'{off:010d} 00000 n \n'

pdf += f'trailer << /Root 1 0 R /Size {len(objects)+1} >>\nstartxref\n{xref_pos}\n%%EOF'

with open('docs/zion-protocol.pdf', 'wb') as f:
    f.write(pdf.encode('utf-8'))
