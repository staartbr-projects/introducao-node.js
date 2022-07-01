function* example(arg) {
  const incremented = arg + 1
  console.log(`me invocou com ${arg}`)
  yield arg

  console.log('estava "suspeded" mas agora estou "resumed"')
  console.log(`ainda tenho o contexto da função: arg=${arg}, incremented=${incremented}`)
  const resumedArg = yield incremented

  console.log(`fui "resumed" recebendo o valor ${resumedArg}`)
  yield resumedArg + 3

  console.log('"resumed" novamente, mas agora é a última')
  return 42
  // lembrando que não retornar nada === return === return undefined
}
