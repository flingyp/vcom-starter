/* eslint-disable no-param-reassign */
export function useNameSpace(defaultBlock: string = '') {
  const globalBlock = defaultBlock

  const b = (block?: string) => block || globalBlock
  const be = (element: string, block?: string) => {
    block = block || globalBlock
    return `${block}__${element}`
  }
  const bm = (modifier: string, block?: string) => {
    block = block || globalBlock
    return `${block}--${modifier}`
  }
  const em = (element: string, modifier: string, block?: string) => {
    block = block || globalBlock
    return `${block}__${element}--${modifier}`
  }
  const bem = (block: string, element: string, modifier: string) => `${block}__${element}--${modifier}`

  return {
    b,
    be,
    bem,
    bm,
    em
  }
}
