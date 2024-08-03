import { beforeEach, describe, expect, it } from 'vitest'
import { mount } from '@vue/test-utils'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'
import AppFooter from '../AppFooter.vue'

describe('Footer', () => {
  let wrapper: any

  beforeEach(() => {
    const vuetify = createVuetify({ components, directives })

    wrapper = mount(AppFooter, {
      global: {
        plugins: [vuetify],
      },
    })
  })

  it('renders the component', () => {
    expect(wrapper.exists()).toBe(true)
  })

  it('displays the correct number of social buttons', () => {
    const socialButtons = wrapper.findAll('.v-btn')
    expect(socialButtons).toHaveLength(1)
  })

  it('displays the GitHub button with correct attributes', () => {
    const githubButton = wrapper.find('.v-btn')
    expect(githubButton.attributes('href')).toBe('https://github.com/Meirbek-dev')
    expect(githubButton.attributes('target')).toBe('_blank')
    expect(githubButton.attributes('rel')).toBe('noopener noreferrer')
    expect(githubButton.attributes('aria-label')).toBe('GitHub Repository')
  })

  it('displays the correct icon for the GitHub button', () => {
    const icon = wrapper.find('.v-icon')
    expect(icon.attributes('icon')).toBe('mdi-github')
  })

  it('displays the current year', () => {
    const year = new Date().getFullYear().toString()
    expect(wrapper.text()).toContain(year)
  })

  it('displays "by Meirbek-dev" text', () => {
    expect(wrapper.text()).toContain('by Meirbek-dev')
  })

  it('hides "by Meirbek-dev" text on extra small screens', async () => {
    await wrapper.setProps({ $vuetify: { breakpoint: { smAndUp: false } } })
    const hiddenSpan = wrapper.find('.d-none.d-sm-inline')
    expect(hiddenSpan.isVisible()).toBe(false)
  })
})
