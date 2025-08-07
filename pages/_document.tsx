import, typ, e { DocumentConte, x, t, DocumentInitialPro, p, s } fr, o, m 'ne, x, t/docume, n, t';
import, Documen, t, { Ht, m, l, He, a, d, Ma, i, n, NextScri, p, t } fr, o, m 'ne, x, t/docume, n, t';

export, default, class MyDocument, extends, Document {
  static, async, getInitialProps(c, t, x: DocumentConte, x, t): Promi, s, e<DocumentInitialPro, p, s> {
    const, initialProp, s = await, Documen, t.getInitialPro, p, s(c, t, x);
    retu, r, n { ...initialPro, p, s };
  }

  rend, e, r() {
    retu, r, n (
      <Ht, m, l>
        <He, a, d />
        <bo, d, y>
          <Ma, i, n />
          <NextScri, p, t />
        </bo, d, y>
      </Ht, m, l>
    );
  }
}