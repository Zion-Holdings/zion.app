(function(){
  var ITEMS=[
    {cat:"plano",title:"Discovery $99",desc:"Diagnostico de 1 processo em ate 7 dias.",href:"/discovery/"},
    {cat:"plano",title:"Consulting $499",desc:"Estrategia, roadmap e 3 sessoes de 1h.",href:"/booking/"},
    {cat:"plano",title:"Starter $2.500",desc:"Implementacao de 1 automacao + 30 dias.",href:"/booking/"},
    {cat:"plano",title:"Growth $8.000/mes",desc:"Automacoes continuas, 24/7 e SLA.",href:"/plans/"},
    {cat:"plano",title:"Parceria CPA",desc:"Pague por lead, reuniao ou fechamento.",href:"/cpa/"},
    {cat:"servico",title:"Agentes de IA",desc:"Atendimento, vendas e operacoes.",href:"/agents/"},
    {cat:"servico",title:"Agentes Telegram",desc:"Worker + listener, mesmo chat, 24/7.",href:"/telegram/"},
    {cat:"servico",title:"WhatsApp lead nurturing",desc:"Follow-up de leads no WhatsApp.",href:"/ai-whatsapp-lead-nurturing/"},
    {cat:"servico",title:"Agente de voz",desc:"Qualificacao por telefone com IA.",href:"/ai-voice-agent-phone/"},
    {cat:"servico",title:"Automacao de processos",desc:"Do e-mail ao ERP com ROI visivel.",href:"/ai-automation-services/"},
    {cat:"servico",title:"Cloud e FinOps",desc:"Cortar desperdicio de cloud.",href:"/finops-consulting/"},
    {cat:"servico",title:"Ciberseguranca",desc:"SOC e resposta a incidentes com IA.",href:"/ai-cybersecurity-platform/"},
    {cat:"servico",title:"Chatbots",desc:"Atendimento com handoff humano.",href:"/ai-chatbot-solutions/"},
    {cat:"servico",title:"Base RAG",desc:"Respostas com fontes nos docs da empresa.",href:"/ai-knowledge-base-rag-platform/"},
    {cat:"servico",title:"Vendas e e-mail",desc:"Speed-to-lead e triagem de caixa.",href:"/ai-sales-automation/"},
    {cat:"servico",title:"Backup e DR",desc:"Backup image-level e restore drill.",href:"/services/it-backup-disaster-recovery/"},
    {cat:"servico",title:"MSP / TI gerenciada",desc:"Operacao continua e receita recorrente.",href:"/managed-it-services/"},
    {cat:"ferramenta",title:"Ferramentas gratis",desc:"Utilitarios de IA e TI.",href:"/free-ai-it-tools/"},
    {cat:"ferramenta",title:"Calculadora de ROI",desc:"Estime o retorno antes de contratar.",href:"/roi-calculator/"},
    {cat:"ferramenta",title:"Analisador de phishing",desc:"Cheque e-mail ou URL suspeita.",href:"/tools/phishing-analyzer/"},
    {cat:"ferramenta",title:"Estimador FinOps",desc:"Desperdicio anual de cloud no browser.",href:"/#finops-estimator"},
    {cat:"conteudo",title:"Blog",desc:"Notas de entrega FinOps, agentes, MSP.",href:"/blog/"},
    {cat:"conteudo",title:"Academia",desc:"Formacao para o time interno.",href:"/academy/"},
    {cat:"conteudo",title:"Roteiros",desc:"Playbooks curtos de implementacao.",href:"/roteiros/"},
    {cat:"conteudo",title:"Cases",desc:"Historias de entrega.",href:"/case-studies/"},
    {cat:"empresa",title:"Contato",desc:"kleber@ziontechgroup.com +1 302 464 0950",href:"/contact/"},
    {cat:"empresa",title:"Agendar sessao",desc:"Sessao gratuita de 30 min.",href:"/booking/"},
    {cat:"empresa",title:"Parceiros",desc:"Rede de parceiros e co-sell.",href:"/partners/"},
    {cat:"empresa",title:"Afiliados",desc:"Programa de indicacao.",href:"/affiliates/"}
  ];

  var grid=document.getElementById("catalog-grid");
  var q=document.getElementById("catalog-q");
  var sel=document.getElementById("catalog-cat");
  var chips=document.getElementById("catalog-chips");
  var empty=document.getElementById("catalog-empty");

  function render(){
    if(!grid) return;
    var query=((q&&q.value)||"").toLowerCase();
    var cat=(sel&&sel.value)||"";
    grid.innerHTML="";
    var n=0;
    ITEMS.forEach(function(it){
      var hay=(it.title+" "+it.desc+" "+it.cat+" "+it.href).toLowerCase();
      if(cat && it.cat!==cat) return;
      if(query && hay.indexOf(query)===-1) return;
      var art=document.createElement("article");
      art.className="card";
      art.innerHTML="<p class=\"eyebrow\">"+it.cat+"</p><h3>"+it.title+"</h3><p>"+it.desc+"</p><p><a href=\""+it.href+"\">Abrir \u2192</a></p>";
      grid.appendChild(art);
      n+=1;
    });
    if(empty) empty.hidden=n>0;
  }

  if(grid){
    var cats=[];
    ITEMS.forEach(function(it){ if(cats.indexOf(it.cat)===-1) cats.push(it.cat); });
    if(sel && sel.options.length<2){
      cats.forEach(function(c){ var o=document.createElement("option"); o.value=c; o.textContent=c; sel.appendChild(o); });
    }
    if(chips && !chips.children.length){
      ["","plano","servico","ferramenta","conteudo","empresa"].forEach(function(c){
        var b=document.createElement("button");
        b.type="button"; b.className="chip"+(c===""?" on":"");
        b.textContent=c||"todos"; b.setAttribute("data-cat",c);
        chips.appendChild(b);
      });
      chips.addEventListener("click",function(ev){
        var b=ev.target.closest("[data-cat]"); if(!b) return;
        if(sel) sel.value=b.getAttribute("data-cat")||"";
        chips.querySelectorAll(".chip").forEach(function(x){ x.classList.toggle("on",x===b); });
        render();
      });
    }
    if(q) q.addEventListener("input",render);
    if(sel) sel.addEventListener("change",render);
    render();
  }

  function ensureFinops(){
    if(document.getElementById("finops-form") && document.getElementById("finops-out")) return;
    var host=document.getElementById("finops-estimator");
    if(!host){
      host=document.createElement("section");
      host.id="finops-estimator";
      host.className="section band";
      var anchor=document.getElementById("diagnostico")||document.getElementById("faq")||document.querySelector("main");
      if(anchor && anchor.parentNode){
        if(anchor.id==="diagnostico") anchor.parentNode.insertBefore(host, anchor.nextSibling);
        else anchor.parentNode.insertBefore(host, anchor);
      } else if(document.body){
        document.body.appendChild(host);
      }
    }
    if(!host.querySelector("#finops-form")){
      host.innerHTML='<div class="wrap"><p class="eyebrow">Ferramenta gratuita</p><h2>Estimador FinOps no navegador.</h2><p class="lead">Calcule o desperdicio anual de cloud + horas de revisao. Sem backend, sem fila, sempre no ar.</p><form class="diag" id="finops-form"><label>Gasto mensal de cloud (USD)<input name="spend" type="number" min="0" step="100" value="4000"></label><label>Percentual ocioso / sem dono<select name="idle"><option value="10">10%</option><option value="20" selected>20%</option><option value="35">35%</option><option value="50">50%</option></select></label><label>Horas/mes revisando fatura<input name="hours" type="number" min="0" max="80" value="8"></label><label>Custo da hora (USD)<input name="rate" type="number" min="20" max="400" value="80"></label></form><div class="diag-out" id="finops-out"></div><div class="actions"><a class="btn" href="/finops-consulting/">Ver FinOps consulting</a><a class="btn alt" href="/discovery/">Discovery $99</a></div></div>';
    }
  }

  function finops(){
    var ff=document.getElementById("finops-form");
    var fo=document.getElementById("finops-out");
    if(!ff||!fo) return;
    var d=Object.fromEntries(new FormData(ff));
    var spend=+d.spend||0, idle=(+d.idle||0)/100, hours=+d.hours||0, rate=+d.rate||80;
    var waste=Math.round(spend*idle*12 + hours*rate*12);
    var plan, href, why;
    if(waste>=80000){ plan="Consulting \u00b7 $499"; href="/booking/"; why="O vazamento paga o roadmap neste trimestre."; }
    else if(waste>=15000){ plan="Discovery \u00b7 $99"; href="/discovery/"; why="Um recorte de 7 dias mostra onde cortar primeiro."; }
    else { plan="Ferramentas gratis + sessao"; href="/free-ai-it-tools/"; why="Comece medindo. Se o numero crescer, subimos para Discovery."; }
    fo.innerHTML="<div class=\"score\">US$ "+waste.toLocaleString("en-US")+"/ano</div><p>Desperdicio estimado (idle cloud + horas de revisao).</p><p>Recomendacao: <strong>"+plan+"</strong>. "+why+"</p><p><a class=\"btn\" href=\""+href+"\">Seguir recomendacao</a> <a class=\"btn alt\" href=\"/finops-consulting/\">Ver FinOps</a></p>";
  }

  ensureFinops();
  var ff=document.getElementById("finops-form");
  var fo=document.getElementById("finops-out");
  if(ff&&fo){ ff.addEventListener("input",finops); finops(); }
})();
