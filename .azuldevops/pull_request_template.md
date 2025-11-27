Descreva o problema, a solução proposta e o impacto da mudança.  
Ex: Adicionada prop `loading` ao `<Button>` para exibir spinner (mudança não breaking).

> Se a alteração for visual, inclua capturas de tela ou GIFs do Storybook.

## ✅ Checklist Review PR

> - Preencha a seção **Geral** e a **a seção que corresponde ao tipo de mudança** do PR.
> - Marque cada item concluído antes de solicitar a revisão.

### 📌 Geral

- [ ] Definidos **dois required reviewers** no Azure
- [ ] Descrição da PR clara e objetiva
- [ ] Nome da **branch** e **commits** seguem o padrão do [Conventional Commits](https://www.conventionalcommits.org/en/v1.0.0/)
- [ ] Branch **target** correta? (default: `develop`)
- [ ] Código segue os padrões estabelecidos de **JSX/React**
- [ ] Documentação revisada e atualizada (quando aplicável)
- [ ] Changelog foi atualizado

---

### 🚀 Feature — Novo Componente

- [ ] Componente desenvolvido seguindo boas práticas
- [ ] Uso do **Pattern Compound** (apenas para componentes **complexos** com subcomponentes)
- [ ] Estilização feita com **Tailwind**
- [ ] Testes unitários implementados para validar o funcionamento
- [ ] **Cobertura de testes 100%**
- [ ] Componente devidamente **documentado**
- [ ] Exportação do componente, types e utilitários adicionada dentro da pasta `src/packages`

---

### ✨ Feature — Novas Funcionalidades

- [ ] Testes implementados para os novos cenários
- [ ] Testes existentes mantêm **100% de cobertura**
- [ ] Se a funcionalidade adiciona uma **nova propriedade**, ela foi documentada na **tabela de propriedades**

---

### 🛠️ Bugfix / Refactor — Ajustes e Alterações

- [ ] Testes continuam com **100% de cobertura**