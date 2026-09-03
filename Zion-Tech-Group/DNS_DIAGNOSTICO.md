# Diagnóstico de DNS — Zion Tech Group — 2026-09-03

## Diagnóstico executado automaticamente pelo Hermes Agent

### Testes realizados
- ping ziontechgroup.com → FUNCIONA (IP 185.199.111.153, ~30-35ms)
- curl https://185.199.111.153/ (com --resolve) → 200 OK (servidor funciona)
- curl https://ziontechgroup.com/ (por hostname) → 000 (falha)
- curl --dns-servers 8.8.8.8 https://ziontechgroup.com/ → 000 (falha)
- curl --dns-servers 1.1.1.1 https://ziontechgroup.com/ → 000 (falha)
- nslookup ziontechgroup.com → não disponível (comando não encontrado)
- dig ziontechgroup.com → não disponível (comando não encontrado)
- host ziontechgroup.com → não disponível (comando não encontrado)

### Conclusão
O servidor GitHub Pages funciona (responde a pedidos diretos ao IP).
O problema é de **resolução DNS de hostname no Termux/Android**.
ping funciona (ICMP), mas curl/HTTPS falha ao resolver o hostname.

### Causa provável
- Resolvedor DNS do Android/Termux não está a responder a queries DNS para HTTPS
- Ou há bloqueio de DNS para tráfego HTTPS
- Ou resolvedor DNS do dispositivo tem problema
- Ou é um problema de rota de DNS no dispositivo

### O que funciona
- Aceder ao site pelo IP directo (se configurar --resolve no curl)
- ping para o domínio
- wget para alguns recursos (se usar IP)

### O que não funciona
- Qualquer acesso por hostname HTTPS (curl, navegadores, etc.)
- Ferramentas de diagnóstico DNS (nslookup, dig, host não estão instaladas)

## Instruções para resolver no Termux/Android

### Opção 1: Verificar e configurar DNS no Termux
```bash
# Verificar qual DNS está a ser usado
getprop | grep -i dns

# Configurar DNS público (Google DNS)
setprop net.dns1 8.8.8.8
setprop net.dns2 8.8.4.4

# Ou Cloudflare DNS
setprop net.dns1 1.1.1.1
setprop net.dns2 1.0.0.1
```

### Opção 2: Usar termux-setup-storage e verificar DNS
```bash
termux-setup-storage
# Depois verificar se o DNS foi reconfigurado
getprop | grep -i dns
```

### Opção 3: Usar termux-network (se disponível)
```bash
pkg install termux-network
# Verificar status da rede
termux-network status
```

### Opção 4: Configurar /system/etc/hosts (requer root)
Se tiver acesso root, pode adicionar a entrada manualmente:
```
185.199.111.153 ziontechgroup.com
185.199.110.153 ziontechgroup.com
185.199.108.153 ziontechgroup.com
185.199.109.153 ziontechgroup.com
```

### Opção 5: Verificar se é problema do resolvedor DNS do Android
- Ir a Configurações → Wi-Fi → (clicar na rede) → Configurações avançadas
- Verificar seDNS está definido como "Automático" ou "Estático"
- Se "Automático" não funcionar, tentar definir DNS manualmente:
  - DNS 1: 8.8.8.8
  - DNS 2: 8.8.4.4

### Opção 6: Alternativa — acessar pelo IP
Se nada funcionar, pode aceder ao site pelo IP directamente:
- https://185.199.111.153/
- https://185.199.110.153/
- https://185.199.108.153/
- https://185.199.109.153/

## Verificação após correção
Depois de aplicar uma das opções acima, testar:
```bash
curl -sI https://ziontechgroup.com/
curl -sI https://ziontechgroup.com/industry/
curl -sI https://ziontechgroup.com/trust/
```

Se funcionar, o problema de DNS foi resolvido.

---

*Diagnóstico automático — 2026-09-03 — Hermes Agent (Kleber Garcia Alcatrão, CEO)*
