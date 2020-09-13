import CommonIcon from '@/components/common-icon'
import { showTitle } from '@/utils/side-utils'
export default {
  components: {
    CommonIcon
  },
  methods: {
    showTitle (item) {
      return showTitle(item, this)
    },
    showChildren (item) {
      // console.log('objectMinx :>> ', item)
      if (item.meta.hidden) return false // hide
      return item.children && item.children.length > 1
    },
    getNameOrHref (item, children0) {
      return item.href ? `isTurnByHref_${item.href}` : (children0 ? item.children[0].name : item.name)
    }
  }
}
