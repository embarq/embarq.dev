---
to: components/<%= h.changeCase.pascal(Name) %>.tsx
---
import React from 'react'
import styles from './<%= h.changeCase.pascal(Name) %>.module.scss'

type Props = {}

const <%= h.changeCase.pascal(Name) %>: React.FC<Props> = ({}) => (
  <div><%= Name %></div>
)

export default <%= h.changeCase.pascal(Name) %>
