import { recintos, animais } from "./data.js";

class RecintosZoo {
  analisaRecintos(animal, quantidade) {
    const animalM = animal.toLocaleUpperCase("pt-br");
    const especieValida = animais.find((a) => a.especie === animalM);

    if (!especieValida) {
      return { erro: "Animal inválido" };
    }
    if (!quantidade || quantidade < 1) {
      return { erro: "Quantidade inválida" };
    }

    if (animalM === "LEAO") {
      const biomasDisponiveis = [];
      const biomaIdeal = recintos.filter((r) => r.bioma === "savana");

      for (let i = 0; i < biomaIdeal.length; i++) {
        for (let j = 0; j < biomaIdeal[i].animaisExistentes.length; j++) {
          if (biomaIdeal[i].animaisExistentes[j].especie === animalM) {
            const n = biomaIdeal[i].numero;
            const qtdAnimais = biomaIdeal[i].animaisExistentes[j].qtd * 3;
            const e = biomaIdeal[i].tamanhoTotal - qtdAnimais;
            const t = biomaIdeal[i].tamanhoTotal;

            biomasDisponiveis.push(
              `Recinto ${n} (espaço livre: ${e} total: ${t})`
            );
          }
        }
      }

      return biomasDisponiveis.length < 1
        ? { erro: "Não há recinto viável" }
        : {
            recintosViaveis: biomasDisponiveis,
          };
    }

    if (animalM === "LEOPARDO") {
      const biomasDisponiveis = [];
      const biomaIdeal = recintos.filter((r) => r.bioma === "savana");

      for (let i = 0; i < biomaIdeal.length; i++) {
        for (let j = 0; j < biomaIdeal[i].animaisExistentes.length; j++) {
          if (biomaIdeal[i].animaisExistentes[j].especie === animalM) {
            const n = biomaIdeal[i].numero;
            const qtdAnimais = biomaIdeal[i].animaisExistentes[j].qtd * 2;
            const e = biomaIdeal[i].tamanhoTotal - qtdAnimais;
            const t = biomaIdeal[i].tamanhoTotal;

            biomasDisponiveis.push(
              `Recinto ${n} (espaço livre: ${e} total: ${t})`
            );
          }
        }
      }

      return biomasDisponiveis.length < 1
        ? { erro: "Não há recinto viável" }
        : {
            recintosViaveis: biomasDisponiveis,
          };
    }

    if (animalM === "CROCODILO") {
      const biomasDisponiveis = [];
      const biomaIdeal = recintos.filter((r) => r.bioma === "rio");

      for (let i = 0; i < biomaIdeal.length; i++) {
        if (biomaIdeal[i].animaisExistentes > 0) {
          for (let j = 0; j < biomaIdeal[i].animaisExistentes.length; j++) {
            if (biomaIdeal[i].animaisExistentes[j].especie === animalM) {
              const n = biomaIdeal[i].numero;
              const qtdAnimais = biomaIdeal[i].animaisExistentes[j].qtd * 3;
              const e = biomaIdeal[i].tamanhoTotal - qtdAnimais;
              const t = biomaIdeal[i].tamanhoTotal;

              biomasDisponiveis.push(
                `Recinto ${n} (espaço livre: ${e} total: ${t})`
              );
            }
          }
        } else {
          const n = biomaIdeal[i].numero;
          const tAnimal = animais.find((a) => a.especie === animalM);
          const e = biomaIdeal[i].tamanhoTotal - tAnimal.tamanho;
          const t = biomaIdeal[i].tamanhoTotal;

          biomasDisponiveis.push(
            `Recinto ${n} (espaço livre: ${e} total: ${t})`
          );
        }
      }

      return biomasDisponiveis.length < 1
        ? { erro: "Não há recinto viável" }
        : {
            recintosViaveis: biomasDisponiveis,
          };
    }

    if (animalM === "MACACO") {
      const biomasDisponiveis = [];
      const biomaIdeal = recintos.filter(
        (r) =>
          r.bioma === "savana" ||
          r.bioma === "floresta" ||
          r.bioma === "savana e rio"
      );

      for (let i = 0; i < biomaIdeal.length; i++) {
        if (biomaIdeal[i].animaisExistentes.length > 0) {
          for (let j = 0; j < biomaIdeal[i].animaisExistentes.length; j++) {
            if (
              biomaIdeal[i].animaisExistentes[j].especie === animalM &&
              biomaIdeal[i].animaisExistentes[j].especie !== "LEAO" &&
              biomaIdeal[i].animaisExistentes[j].especie !== "LEOPARDO" &&
              biomaIdeal[i].animaisExistentes[j].especie !== "CROCODILO"
            ) {
              const n = biomaIdeal[i].numero;
              const qtdAnimais =
                biomaIdeal[i].animaisExistentes[j].qtd + quantidade;

              if (qtdAnimais > biomaIdeal[i].tamanhoTotal) {
                return { erro: "Não há recinto viável" };
              }
              const e = biomaIdeal[i].tamanhoTotal - qtdAnimais;
              const t = biomaIdeal[i].tamanhoTotal;

              biomasDisponiveis.push(
                `Recinto ${n} (espaço livre: ${e} total: ${t})`
              );
            } else if (
              biomaIdeal[i].animaisExistentes[j].especie !== animalM &&
              biomaIdeal[i].animaisExistentes[j].especie !== "LEAO" &&
              biomaIdeal[i].animaisExistentes[j].especie !== "LEOPARDO" &&
              biomaIdeal[i].animaisExistentes[j].especie !== "CROCODILO"
            ) {
              const n = biomaIdeal[i].numero;
              const animalEspecie = animais.find(
                (a) => a.especie === biomaIdeal[i].animaisExistentes[j].especie
              );
              const tAnimal =
                animalEspecie.tamanho * biomaIdeal[i].animaisExistentes[j].qtd;
              const qtdAnimais = tAnimal + quantidade + 1;

              if (qtdAnimais > biomaIdeal[i].tamanhoTotal) {
                return { erro: "Não há recinto viável" };
              }
              const e = biomaIdeal[i].tamanhoTotal - qtdAnimais;
              const t = biomaIdeal[i].tamanhoTotal;

              biomasDisponiveis.push(
                `Recinto ${n} (espaço livre: ${e} total: ${t})`
              );
            }
          }
        } else {
          const n = biomaIdeal[i].numero;
          const tAnimal = animais.find((a) => a.especie === animalM);
          const qtdAnimais = tAnimal.tamanho * quantidade;
          if (qtdAnimais > biomaIdeal[i].tamanhoTotal) {
            return { erro: "Não há recinto viável" };
          }
          const e = biomaIdeal[i].tamanhoTotal - qtdAnimais;
          const t = biomaIdeal[i].tamanhoTotal;

          biomasDisponiveis.push(
            `Recinto ${n} (espaço livre: ${e} total: ${t})`
          );
        }
      }

      return biomasDisponiveis.length < 1
        ? { erro: "Não há recinto viável" }
        : {
            recintosViaveis: biomasDisponiveis,
          };
    }

    if (animalM === "GAZELA") {
      const biomasDisponiveis = [];
      const biomaIdeal = recintos.filter(
        (r) => r.bioma === "savana" || r.bioma === "savana e rio"
      );

      for (let i = 0; i < biomaIdeal.length; i++) {
        if (biomaIdeal[i].animaisExistentes.length > 0) {
          for (let j = 0; j < biomaIdeal[i].animaisExistentes.length; j++) {
            if (
              biomaIdeal[i].animaisExistentes[j].especie === animalM ||
              (biomaIdeal[i].animaisExistentes[j].especie !== "LEAO" &&
                biomaIdeal[i].animaisExistentes[j].especie !== "LEOPARDO" &&
                biomaIdeal[i].animaisExistentes[j].especie !== "CROCODILO")
            ) {
              const n = biomaIdeal[i].numero;
              const qtdAnimais =
                biomaIdeal[i].animaisExistentes[j].qtd * quantidade;
              if (qtdAnimais > biomaIdeal[i].tamanhoTotal) {
                return { erro: "Não há recinto viável" };
              }
              const e = biomaIdeal[i].tamanhoTotal - qtdAnimais;
              const t = biomaIdeal[i].tamanhoTotal;

              biomasDisponiveis.push(
                `Recinto ${n} (espaço livre: ${e} total: ${t})`
              );
            }
          }
        } else {
          const n = biomaIdeal[i].numero;
          const tAnimal = animais.find((a) => a.especie === animalM);
          const qtdAnimais = tAnimal.tamanho * quantidade;
          if (qtdAnimais > biomaIdeal[i].tamanhoTotal) {
            return { erro: "Não há recinto viável" };
          }
          const e = biomaIdeal[i].tamanhoTotal - qtdAnimais;
          const t = biomaIdeal[i].tamanhoTotal;

          biomasDisponiveis.push(
            `Recinto ${n} (espaço livre: ${e} total: ${t})`
          );
        }
      }

      return biomasDisponiveis.length < 1
        ? { erro: "Não há recinto viável" }
        : {
            recintosViaveis: biomasDisponiveis,
          };
    }

    if (animalM === "HIPOPOTAMO") {
      const biomasDisponiveis = [];
      const biomaIdeal = recintos.filter(
        (r) =>
          r.bioma === "savana" ||
          r.bioma === "rio" ||
          r.bioma === "savana e rio"
      );

      for (let i = 0; i < biomaIdeal.length; i++) {
        if (biomaIdeal[i].animaisExistentes.length > 0) {
          for (let j = 0; j < biomaIdeal[i].animaisExistentes.length; j++) {
            if (
              biomaIdeal[i].animaisExistentes[j].especie === animalM ||
              (biomaIdeal[i].animaisExistentes[j].especie !== "LEAO" &&
                biomaIdeal[i].animaisExistentes[j].especie !== "LEOPARDO" &&
                biomaIdeal[i].animaisExistentes[j].especie !== "CROCODILO")
            ) {
              const n = biomaIdeal[i].numero;
              const qtdAnimais =
                biomaIdeal[i].animaisExistentes[j].qtd * quantidade;
              if (qtdAnimais > biomaIdeal[i].tamanhoTotal) {
                return { erro: "Não há recinto viável" };
              }
              const e = biomaIdeal[i].tamanhoTotal - qtdAnimais;
              const t = biomaIdeal[i].tamanhoTotal;

              biomasDisponiveis.push(
                `Recinto ${n} (espaço livre: ${e} total: ${t})`
              );
            }
          }
        } else {
          const n = biomaIdeal[i].numero;
          const tAnimal = animais.find((a) => a.especie === animalM);
          const qtdAnimais = tAnimal.tamanho * quantidade;
          if (qtdAnimais > biomaIdeal[i].tamanhoTotal) {
            return { erro: "Não há recinto viável" };
          }
          const e = biomaIdeal[i].tamanhoTotal - qtdAnimais;
          const t = biomaIdeal[i].tamanhoTotal;

          biomasDisponiveis.push(
            `Recinto ${n} (espaço livre: ${e} total: ${t})`
          );
        }
      }

      return biomasDisponiveis.length < 1
        ? { erro: "Não há recinto viável" }
        : {
            recintosViaveis: biomasDisponiveis,
          };
    }
  }
}

export { RecintosZoo as RecintosZoo };
