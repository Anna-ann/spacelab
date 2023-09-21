<template>
  <div>
    <HomepageBlock
      :headline="headline"
      :subheadline="subheadline"
      :introText="introText"
    />
    <SpaceCUBSBlock
      :headline="block1Headline"
      :text="block1Text"
    />
    <Production
      :headline="block2Headline"
      :text="block2Text"
    />
    <Proposal
      :headline="block3Headline"
      :text="block3Text"
    />
    <Investments
      :headline="block4Headline"
      :text="block4Text"
    />
    <DevelopmentStrategy
      :headline="block5Headline"
      :text="block5Text"
    />
    <AboutSpaceCUBs
      :headline="block6Headline"
      :text="block6Text"
    />
    <RevolutionaryTechnology
      :headline="block7Headline"
      :text="block7Text"
    />
    <ExpertiseInAction
      :headline="block8Headline"
      :text="block8Text"
    />
    <SpaceReadyTechnologies
      :headline="block9Headline"
      :text="block9Text"
    />
    <AnonymousMessaging
      :headline="block10Headline"
      :text="block10Text"
    />
    <RevenueOptions
      :headline="block12Headline"
      :text="block12Text"
    />
    <MarketingAndSafety
      :headline="block13Headline"
      :text="block13Text"
    />
    <OurVision
      :headline="block14Headline"
      :text="block14Text"
    />
    <div class="cta-container text-center">
      <p class="cta-text">{{ callToAction }}</p>
      <a href="#" class="btn btn-primary cta-button">{{ ctaButtonText }}</a>
    </div>
  </div>
</template>

<script>
import HomepageBlock from '../components/cubs/HomepageBlock.vue'
import SpaceCUBSBlock from '../components/cubs/SpaceCUBSBlock.vue'
import Production from '../components/cubs/Production.vue'
import Proposal from '../components/cubs/Proposal.vue'
import Investments from '../components/cubs/Investments.vue'
import DevelopmentStrategy from '../components/cubs/DevelopmentStrategy.vue'
import AboutSpaceCUBs from '../components/cubs/AboutSpaceCUBs.vue'
import RevolutionaryTechnology from '../components/cubs/RevolutionaryTechnology.vue'
import ExpertiseInAction from '../components/cubs/ExpertiseInAction.vue'
import SpaceReadyTechnologies from '../components/cubs/SpaceReadyTechnologies.vue'
import AnonymousMessaging from '../components/cubs/AnonymousMessaging.vue'
import RevenueOptions from '../components/cubs/RevenueOptions.vue'
import MarketingAndSafety from '../components/cubs/MarketingAndSafety.vue'
import OurVision from '../components/cubs/OurVision.vue'
import Footer from '../components/shared/Footer.vue'

export default {
  components: {
    HomepageBlock,
    SpaceCUBSBlock,
    Production,
    Proposal,
    Investments,
    DevelopmentStrategy,
    AboutSpaceCUBs,
    RevolutionaryTechnology,
    ExpertiseInAction,
    SpaceReadyTechnologies,
    AnonymousMessaging,
    RevenueOptions,
    MarketingAndSafety,
    OurVision,
  },
  data() {
    return {
      headline: 'SpaceCUBS: Shaping the Future of Data in Space',
      subheadline: 'One Space, Multiple Solutions',
      introText: 'Welcome to SpaceCUBS, your gateway to cutting-edge space technology...',
      block1Headline: 'Solving Critical Challenges',
      block1Text: 'In a rapidly changing world, knowledge of climate, ecology, and logistics is vital...',
      block2Headline: 'Production and Satellite Build',
      block2Text: 'Our satellite production and build operations are located at the AIT Complex in Astana, Kazakhstan. Starting in 2025, we\'ve secured free launches from Gagarin Start (KazCosmos). By 2023, we\'re launching our first SpaceCUB, offering dual services: Internet of Things (IoT) and low-speed anonymous data exchange.',
      block3Headline: 'Proposal',
      block3Text: 'Our plan spans 2021 to 2023, with a budget of $3 million for the first satellite and $1.5 million for subsequent NanoSatellites in Low Earth Orbit (LEO). The result? A constellation of 16 SpaceCUBs, connecting the world.',
      block4Headline: 'Investments',
      block4Text: 'We\'re investing $333,000 in IoT transceiver R&D and $138 million for launching IoT services in the CIS region. We also engage in direct sales of IoT, Blockchain, and Insurance services.',
      block5Headline: 'Development Strategy',
      block5Text: 'Our strategy unfolds step by step:...',
      block6Headline: 'About SpaceCUBs',
      block6Text: 'SpaceCUBs is a community-funded space constellation...',
      block7Headline: 'Revolutionary Technology',
      block7Text: 'We leverage cutting-edge technology...',
      block8Headline: 'Expertise in Action',
      block8Text: 'Our Engineering Design Office boasts 25 highly qualified space engineers...',
      block9Headline: 'Space-Ready Technologies',
      block9Text: 'We\'ve developed space-ready technologies...',
      block10Headline: 'Anonymous Messaging',
      block10Text: 'At SpaceCUBs, we prioritize your privacy...',
      block12Headline: 'Revenue Options',
      block12Text: 'Choose from flexible revenue options...',
      block13Headline: 'Marketing and Safety',
      block13Text: 'Our multi-level marketing approach encourages database growth...',
      block14Headline: 'Our Vision',
      block14Text: 'Our ultimate goal is to establish independent IoT service control nodes in space...',
      callToAction: 'Experience the Future of Digital Privacy with SpaceCUBs. Get Started!',
      ctaButtonText: 'Get Started',
    };
  },
};
</script>

<style scoped>
</style>
