export const metadata = {
  title: `Cases de IA B2B: atendimento e automação | Zion Tech Group | Zion Tech Group Blog`,
  description: `Cases de IA B2B: atendimento e automação | Zion Tech Group`,
  alternates: { canonical: '/blog' },
};

export default function Page() {
  const content = `
<p>IA B2B funciona melhor quando aplicada a processos repetitivos: triagem, resposta inicial, agendamento e follow-up.</p>
<h3>Cases sugeridos</h3>
<ul>
<li>Chatbots com roteamento humano explícito</li>
<li>Resumo automático de aberturas e chamados</li>
<li>Classificação de e-mails por intenção</li>
<li>Alertas e notificações com contexto</li>
</ul>
<p><a href="/contact">Quer um case para seu segmento?</a></p>
`;

  return (
    <article className="container-page py-20">
      <h1 className="text-4xl font-bold mb-4 text-white">Cases de IA B2B: atendimento e automação | Zion Tech Group</h1>
      <div className="text-sm text-slate-500 mb-8">Published: 2026-07-06</div>
      <div
        className="prose prose-invert max-w-none text-slate-300 leading-relaxed"
        dangerouslySetInnerHTML={ __html: content }
      />
    </article>
  );
}
