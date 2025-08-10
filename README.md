# 🎮 Jogos que já joguei

Um sistema completo e moderno para gerenciar sua coleção de jogos com funcionalidades avançadas de organização, análise e personalização.

## ✨ Funcionalidades Principais

### 🎯 **Sistema de Abas**
- **Todos os Jogos**: Visualização completa da biblioteca
- **Favoritos**: Acesso rápido aos jogos marcados como favoritos
- **Estatísticas**: Dashboard completo com análises e relatórios

### 🌙 **Tema Claro/Escuro**
- Toggle automático entre temas
- Preferência salva automaticamente
- Transições suaves entre os temas
- Interface adaptativa para ambos os modos

### ⭐ **Sistema de Avaliação**
- Avaliação de 1 a 5 estrelas
- Interface interativa com hover effects
- Texto descritivo da avaliação (Ruim, Regular, Bom, Muito Bom, Excelente)
- Filtros por avaliação mínima

### 📊 **Status dos Jogos**
- **Zerado**: Jogos completados
- **Em andamento**: Jogos sendo jogados atualmente
- **Abandonado**: Jogos que foram deixados de lado
- Filtros por status
- Indicadores visuais coloridos

### ❤️ **Sistema de Favoritos**
- Marcar/desmarcar jogos como favoritos
- Aba dedicada para favoritos
- Contador de favoritos nas estatísticas
- Botão de ação rápida nos cartões

### 🔍 **Filtros Avançados**
- **Busca por texto**: Filtro instantâneo por nome
- **Filtro por plataforma**: PC, PlayStation, Xbox, Mobile, Nintendo
- **Filtro por status**: Zerado, Em andamento, Abandonado
- **Filtro por avaliação**: 1+ a 5 estrelas
- **Combinação de filtros**: Múltiplos filtros simultâneos
- **Limpar filtros**: Botão para resetar todos os filtros

### 📈 **Dashboard de Estatísticas**
- **Total de jogos**: Contador geral
- **Horas totais**: Soma de todas as horas jogadas
- **Favoritos**: Quantidade de jogos favoritados
- **Avaliação média**: Média das avaliações
- **Relatório mensal**: Comparação com mês anterior

### 💾 **Sistema de Backup**
- **Exportar dados**: Download em formato JSON
- **Importar dados**: Restaurar backup
- **Persistência local**: Dados salvos automaticamente
- **Sincronização**: Backup com timestamp

### 🖼️ **Sistema de Imagens**
- **Upload por URL**: Link direto para imagem
- **Upload de arquivo**: Arrastar e soltar ou selecionar arquivo
- **Preview em tempo real**: Visualização antes de salvar
- **Validação**: Tipos e tamanhos de arquivo
- **Fallback elegante**: Exibição quando imagem não carrega

## 🚀 Como Usar

### **Adicionando um Jogo**
1. Clique em "Adicionar Jogo"
2. Preencha o nome e horas jogadas
3. Selecione o status (Zerado, Em andamento, Abandonado)
4. Avalie o jogo clicando nas estrelas
5. Escolha a plataforma(s)
6. Adicione uma imagem (URL ou upload)
7. Clique em "Salvar"

### **Gerenciando Favoritos**
- Clique no coração nos cartões dos jogos
- Acesse a aba "Favoritos" para ver todos os favoritos
- Use o contador nas estatísticas para acompanhar

### **Usando Filtros**
- Digite na barra de pesquisa para filtrar por nome
- Clique nos botões de plataforma
- Use os dropdowns de status e avaliação
- Combine múltiplos filtros
- Clique em "Limpar Filtros" para resetar

### **Alternando Tema**
- Clique no botão de tema (lua/sol) no cabeçalho
- O tema é salvo automaticamente
- Funciona em todas as abas

### **Exportando/Importando**
- Vá para a aba "Estatísticas"
- Clique em "Exportar Dados" para baixar backup
- Clique em "Importar Dados" para restaurar
- Selecione o arquivo JSON de backup

## 🎨 Características Visuais

### **Design Responsivo**
- Adaptação perfeita para desktop, tablet e mobile
- Grid responsivo que se ajusta ao tamanho da tela
- Elementos que se reorganizam automaticamente

### **Animações Suaves**
- Transições elegantes entre abas
- Efeitos hover nos cartões
- Animações de entrada para novos elementos
- Feedback visual para todas as ações

### **Interface Moderna**
- Gradientes e sombras sutis
- Ícones Font Awesome
- Tipografia clara e legível
- Espaçamento consistente

## 📱 Compatibilidade

- ✅ **Desktop**: Chrome, Firefox, Safari, Edge
- ✅ **Tablet**: iPad, Android tablets
- ✅ **Mobile**: iPhone, Android phones
- ✅ **Navegadores modernos**: Suporte completo a ES6+

## 💻 Tecnologias Utilizadas

- **HTML5**: Estrutura semântica e moderna
- **CSS3**: Grid, Flexbox, Variáveis CSS, Animações
- **JavaScript ES6+**: Módulos, Arrow functions, Destructuring
- **Font Awesome**: Ícones profissionais
- **localStorage**: Persistência de dados local
- **File API**: Upload e manipulação de arquivos
- **Blob API**: Exportação de dados

## 🔧 Funcionalidades Técnicas

### **Persistência de Dados**
- Salvamento automático no localStorage
- Backup e restauração via JSON
- Sincronização de preferências

### **Performance**
- Renderização otimizada
- Filtros em tempo real
- Lazy loading de imagens
- Debounce na busca

### **Acessibilidade**
- Navegação por teclado
- Tooltips informativos
- Contraste adequado
- Textos alternativos

## 📊 Estrutura de Dados

Cada jogo possui:
```javascript
{
    id: 1,
    nome: "Nome do Jogo",
    horas: 100,
    plataformas: ["PC", "PlayStation"],
    imagem: "URL da imagem",
    favorito: false,
    avaliacao: 5,
    status: "completed", // completed, playing, abandoned
    dataAdicionado: "2024-01-15"
}
```

## 🎯 Próximas Funcionalidades

- [ ] Categorias/Tags personalizadas
- [ ] Metas de horas por mês
- [ ] Gráficos interativos
- [ ] Sincronização na nuvem
- [ ] Modo offline (PWA)
- [ ] Notificações
- [ ] Histórico de mudanças
- [ ] Modo de visualização compacta

## 🤝 Contribuição

Sinta-se à vontade para contribuir com melhorias, correções ou novas funcionalidades!

## 📄 Licença

Este projeto é de código aberto e está disponível sob a licença MIT.

---

**Desenvolvido com ❤️ para gamers que amam organizar suas conquistas!** 🎮✨
