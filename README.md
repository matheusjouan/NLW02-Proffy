

<p align="center">
<img src="https://raw.githubusercontent.com/matheusjouan/NLW02-Proffy/master/proffyImg.png" width="320px"/>
<p align="center"><i>Plataforma que conecta professores e alunos.</i></p>
</p>


# NLW02-Proffy
Aplicação de estudos, onde alunos poderiam encontrar professores disponíveis nas matérias que o aluno desejava e marcar uma aula com ele. Tecnologiais: NodeJS, ReactJS, React Native.

---

## 📔 Sobre

O Proffy é um projeto construído durante a Next Level Week #2, evento promovido pela Rocketseat;

A ideia foi desenvolver uma aplicação de estudos, onde alunos poderiam encontrar professores disponíveis nas matérias que o aluno desejava e marcar uma aula com ele. E os professores poderiam se cadastrar informando a matéria que eles dão aula, horários e dia da semana!

---

## :rocket: Tecnologias Utilizadas

- 🌎 Backend:
  - NodeJS;
  - Express;
  - TypeScript;
  - TypeORM;
  - Postgress;
  - Cors.
  
- 💻 Frontend (Web):
  - ReacJS;
  - React Router DOM;
  - TypeScript;
  - Axios.
  
- 📱  Mobile ():
  - React Native;
  - TypeScript;
  - Expo
  - Async Storage
  
  ---
  
  ## 👨‍💻️ Como Usar  :

```shell
$ git clone git@github.com:jjunior96/NLW02-Proffy.git
$ cd NLW02-Proffy

# Iniciando o Servidor Backend (localhost:3333)
$ cd backend
$ yarn install
$ yarn start

# Iniciando a Aplicação Web (localhost:3000)
$ cd web
$ yarn install
$ yarn start

# Iniciando a Aplicação Mobile (expo)
$ cd mobile
$ yarn  install
$ yarn start
# Scanear com a camêra do celular o QR Code fornecido pelo Expo
```

---

## :hammer:Features Implementadas

### Backend:

  - [x] Criação de classes (Professor/aula/horários disponíveis);
  - [x] Listagem de classes;
  - [x] Criação de Conexões feita entre aluno interesado pela aula e professor;
  - [x] Listagem total de número conexões já realizadas.

### Frontend:
  - [x] Criação de classes (Professor/aula/horários disponíveis);
  - [x] Listagem de classes através de um filtro de pesquisa (matéria, dia da semana, horário);
  - [x] Criação de Conexões feita entre aluno interesado pela aula e professor através do whatspapp.
  - [x] Listagem total de número conexões já realizadas.

### Mobile

  - [x] Listagem de classes através de um filtro de pesquisa (matéria, dia da semana, horário);
  - [x] Criação de Conexões feita entre aluno interesado pela aula e professor através do whatspapp.
  - [x] Listagem total de número conexões já realizadas.
  - [x] Possibilidade de Favoritar um professor (AsyncStorage)
  
