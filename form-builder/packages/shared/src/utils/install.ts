import type { Component, Plugin } from 'vue'

export const withInstall = <T extends Record<string, any>>(
  component: Component,
  extra?: T
) => {
  ;(component as Plugin).install = (app): void => {
    app.component(extra?.name ?? component.name!, component)
  }

  if (extra) {
    for (const [key, value] of Object.entries(extra)) {
      ;(component as any)[key] = value
    }
  }
  return component as Plugin & T
}
