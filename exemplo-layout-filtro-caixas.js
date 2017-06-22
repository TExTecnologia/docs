const caixas = [
  ".veiculo",
  ".fabricacao",
  ".opcionais",
  ".combustivel",
  ".blindado",
  ".antifurto",
  ".uso",
  ".adaptado",
  ".placa",
  ".nf",
  ".principal",
  ".condutor_cpf",
  ".condutor_trabalha",
  ".condutor_trabalha_hora",
  ".condutor_profissao_descricao",
  ".condutor_reside_em",
  ".condutor_estuda",
  ".condutor_escolaridade",
  ".condutor_pratica_esporte",
  ".condutor_filhos",
  ".condutor_has_another_car",
  ".condutor_diversao",
  ".condutor_direcao_defensiva",
  ".condutor_vitima_roubo",
  ".condutor_total_veiculo",
  ".condutor_moto_clube",
  ".condutor_reside_com",
  ".cep",
  ".residencia",
  ".km",
  ".trabalho",
  ".estuda",
  ".proprietario",
  ".segurado",
  ".dependente",
  ".relacao",
  ".mesma",
  ".vigencia",
  ".renovacao",
  ".apolice",
  ".bonus",
  ".coberturas",
  ".descontos",
  ".produtos",
  ".fechamento"
]

document.querySelector('.nav').addEventListener('click', function (event) {
  const target = event.target
  if (target.matches('button')) {
    const filtro = target.dataset.filtro
    iframe.postMessage({
      type: 'cliente.filtro',
      filtro: filtro
    }, CLIENTE_NIMBLE) // CLIENTE_NIMBLE é explicado no Nimble Snippet
  }
})