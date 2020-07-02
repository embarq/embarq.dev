---
to: src/pages/<%= h.changeCase.lower(h.changeCase.path(name)) %>.tsx
---
import React from 'react'
import Layout from '@/components/layout'
import <%= Name %> from '@/components/pages/<%= Name %>'

type Props = {}

const <%= h.changeCase.pascal(Name) + 'Page' %> = ({}: Props) => (
  <Layout>
    <<%= Name %> />
  </Layout>
);

export default <%= h.changeCase.pascal(Name) + 'Page' %>
