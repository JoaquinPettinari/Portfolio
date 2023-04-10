import { memo } from 'react'
import Section from '../../ui/Section'
import SectionTitle from '../../ui/SectionTitle'

function Jobs () {
  return (
    <Section id="jobs">
      <SectionTitle title="Jobs" />
    </Section>
  )
}

export default memo(Jobs)
