import { describe, it, expect } from 'vitest'

import { mount } from '@vue/test-utils'
import AppButton from '../AppButton.vue'

const wrapper = mount(AppButton, {
  props: { label: 'Task Tracker', color: 'green' },
})

describe('AppButton', () => {
  it('renders properly', () => {
    expect(wrapper.text()).toContain('Task Tracker')
  })

  it('has the correct color', () => {
    const button = wrapper.find('button')
    expect(button.element.style.backgroundColor).toBe('green')
  })
})
