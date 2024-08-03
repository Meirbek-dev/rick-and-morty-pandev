import { beforeEach, describe, expect, it } from 'vitest'
import { mount, VueWrapper } from '@vue/test-utils'
import AppNavBar from '../AppNavBar.vue'

describe('AppNavBar', () => {
  let wrapper: VueWrapper<any>

  const navBarItemsAmount: number = 3

  beforeEach(() => {
    wrapper = mount(AppNavBar, {
      global: {
        stubs: ['router-link'],
      },
    })
  })

  it('renders the component', () => {
    expect(wrapper.exists()).toBe(true)
  })

  it('renders the app bar', () => {
    expect(wrapper.findComponent({ name: 'v-app-bar' }).exists()).toBe(true)
  })

  it('renders the logo', () => {
    expect(wrapper.find('v-img[alt="Rick and Morty Logo"]').exists()).toBe(true)
  })

  it('renders the correct number of navigation items', () => {
    const navButtons = wrapper.findAll('nav .v-btn')
    expect(navButtons.length).toBe(navBarItemsAmount)
  })

  it('renders the correct navigation item titles', () => {
    const navItems = wrapper.findAll('nav .v-btn')
    const titles = navItems.map(item => item.text())
    expect(titles).toEqual(['Home', 'Episodes', 'Locations'])
  })

  it('toggles the drawer when nav icon is clicked', async () => {
    const navIcon = wrapper.find('.v-app-bar-nav-icon')
    expect(wrapper.vm.drawer).toBe(false)
    await navIcon.trigger('click')
    expect(wrapper.vm.drawer).toBe(true)
  })

  it('renders the navigation drawer', () => {
    expect(wrapper.findComponent({ name: 'v-navigation-drawer' }).exists()).toBe(true)
  })

  it('renders the correct number of items in the drawer', () => {
    const drawerItems = wrapper.findAll('.v-navigation-drawer .v-list-item')
    expect(drawerItems.length).toBe(navBarItemsAmount)
  })

  it('hides the nav icon on larger screens', () => {
    const navIcon = wrapper.find('.v-app-bar-nav-icon')
    expect(navIcon.classes()).toContain('d-sm-none')
  })

  it('hides the nav buttons on smaller screens', () => {
    const nav = wrapper.find('nav')
    expect(nav.classes()).toContain('hidden-sm-and-down')
  })
})
