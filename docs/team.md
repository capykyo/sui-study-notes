---
layout: page
---

<script setup>
import {
  VPTeamPage,
  VPTeamPageTitle,
  VPTeamMembers
} from 'vitepress/theme'

const members = [
  {
    avatar: 'https://raw.githubusercontent.com/capykyo/capykyo/master/image/avatar/rainbow-cat.webp',
    name: 'Kyo',
    title: 'Creator',
    links: [
      { icon: 'github', link: 'https://github.com/capykyo' },
      { icon: 'twitter', link: 'https://twitter.com/wukyo15' }
    ]
  }
]
</script>

<VPTeamPage>
  <VPTeamPageTitle>
    <template #title>
      Contributor
    </template>
    <template #lead>  
        Welcome anyone to contribute Move and Sui related content to this document, and invite you to become a member of our contributors.
    </template>
  </VPTeamPageTitle>
  <VPTeamMembers
    :members="members"
  />
</VPTeamPage>
