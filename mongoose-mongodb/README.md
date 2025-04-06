## 🧪 **Teste Técnico (Fictício) – Relatório e Análise de Dados Pokémon**  
**Objetivo:** Criar um script (Node.js com Mongoose) que se conecte ao MongoDB, extraia e transforme dados da coleção `pokemon` e gere relatórios com base em critérios específicos.

---

### 📚 **Contexto**
Você está atuando como analista de dados para um projeto que visa estudar características dos Pokémon da primeira à oitava geração, com o objetivo de entender padrões de evolução, atributos e tipagens.

A base de dados já existe, e está acessível via:

```
mongodb://localhost:27017/estudos_nodejs
```

Coleção: `pokemon`

---

### 🧩 **Etapas do Exercício**

#### ✅ **Etapa 1 – Relatório Base**
Crie um script que gere uma listagem com os seguintes campos:

- Nome (`Name`)
- Número na National Dex (`National Dex #`)
- Tipagem primária e secundária (`Primary Typing`, `Secondary Typing`)
- Geração (`Generation`)
- Total de Stats (`Base Stat Total`)
- Estágio de evolução (`Evolution Stage`)
- Quantidade de evoluções (`Number of Evolution`)

Salve a listagem em:
- `relatorio_pokemon.xlsx`
- `relatorio_pokemon.json`

#### ✅ **Etapa 2 – Agrupamento e Estatísticas**
Adicione no script uma análise que responda:

- Quantos Pokémon existem por **tipagem primária**
- Média de **Base Stat Total** por **geração**
- Quantidade de **Pokémon lendários** por **cor** (`Color ID`)
- Tipagem secundária mais comum
- Pokémon mais pesado e mais leve por geração (usando `Weight (lbs)`)

#### ✅ **Etapa 3 – Evolução por Tipagem**
Gere um relatório com todos os Pokémon que fazem parte de **linhas evolutivas de 3 estágios** (ex: Bulbasaur, Ivysaur, Venusaur), agrupados por sua **tipagem primária**. Para cada linha evolutiva, exiba:

- Nome dos 3 estágios
- Diferença acumulada de `Base Stat Total` entre estágio 1 e estágio 3

**Observação:** para identificar os Pokémon da mesma linha evolutiva, use o campo `Number of Evolution` e `Evolution Stage`.

#### ✅ **Etapa 4 – Desempenho e Eficiência**
Suponha que essa base irá crescer muito e ser usada por outras pessoas. Implemente:

- Indexação (sugestão: crie um índice nos campos mais usados em consultas agregadas)
- Evite múltiplas leituras no banco para obter dados simples (ex: evitar `.find()` dentro de loops)
- Use agregações (`$group`, `$match`, `$project`, `$sort`) sempre que possível em vez de processar tudo com `.map()` ou `.forEach()` na aplicação

---

### 💎 **Desafio Adicional (Opcional – Vale Pontos Extras)**
Implemente uma função que detecte possíveis **Pokémon duplicados** na coleção com base nos seguintes critérios:

- Mesmo nome (ignorar letras maiúsculas/minúsculas)
- Mesmos stats base (`Base Stat Total`, `Health`, `Attack`, `Defense`, etc.)
- Diferença máxima de 1 em peso e altura

Liste esses duplicados e indique o possível motivo (ex: "variação de forma", "erro de digitação", etc.)

---

### 📦 **Entrega Esperada**
- Código organizado, preferencialmente com instruções de execução em um `README.md`
- Scripts exportando arquivos `.json` e `.xlsx`
- Comentários explicando partes importantes
- Se possível, usar `.env` para definir a conexão com MongoDB

---

### 🧠 **O que será avaliado**
- Clareza e organização do código
- Eficiência nas consultas ao MongoDB
- Uso de agregações e transformações
- Capacidade de estruturar relatórios complexos
- Boa estrutura de projeto

