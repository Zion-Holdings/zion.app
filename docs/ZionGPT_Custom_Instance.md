# Custom ZionGPT Instances

This guide explains how any DAO, community, or digital nation can train and deploy a customized model.
The AI Trainer Suite is available at the `/train/zion-gpt` route (or `/nation/ai` for nation specific instances).

## AI Trainer Suite

1. **Upload Training Corpus**
   - Talent profiles
   - Manifestos
   - DAO vote text
   - Constitution
   - Industry-specific guides
   - Language corpus for multilingual GPTs

2. **Model Config**
   - Choose the base model: GPT-3.5, GPT-4, Mistral, or a local model
   - Set output length
   - Pick a tone (formal, friendly, DAO-native)
   - Select the fine-tuning scope (resume only, full agent, or DAO replies)

3. **Iteration Cycle**
   - Test in the chat box
   - Provide reinforcement feedback with thumbs or corrections
   - Auto-label common user intents
   - Version models as `ZionGPT-[Region]-v1.0`, etc.

4. **Deploy**
   - Deploy to `/gpt` for that nation
   - Optional CLI, Slack bot, or browser extension
   - Apply an inference token limit or throttle with ZION$

### Operator Prompt Example

```
Train a GPT model to assist talent in Zion Africa using localized job posts, resumes, and an English/French mixed corpus. The tone should be professional but inclusive.
```
