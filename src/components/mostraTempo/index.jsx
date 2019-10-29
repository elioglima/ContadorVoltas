import React from 'react'

export default (props) => {
  const tempo = props.tempo
  const minutos = Math.ceil(tempo / 60)
  const segundos = tempo % 60
  const menutosStr = (minutos < 10 ? '0' + minutos : minutos)
  const segundosStr = (segundos < 10 ? '0' + segundos : segundos)

  return (<p className={'tempo'}><span>{`${menutosStr}:${segundosStr}`}</span><br />Tempo médio por volta</p>)
}