<script lang="jsx">
import { useVModel } from '@vueuse/core'
import { provide } from 'vue'
export default {
  name: 'XtxTabs',
  props: {
    modelValue: {
      type: [String, Number],
      default: ''
    }
  },
  setup (props, { emit }) {
    const activeName = useVModel(props, 'modelValue', emit)

    const tabClick = (name, index) => {
      activeName.value = name
      emit('tab-click', { name, index })
    }

    provide('activeName', activeName)

    return { activeName, tabClick } // 这些会在 this 上暴露给 render()
  },
  render () {
    const panels = this.$slots.default()
    const dynamicPanels = []

    if (!panels) return null

    panels.forEach((item) => {
      if (item.type.name === 'XtxTabsPanel') {
        dynamicPanels.push(item)
      } else if (item.children) {
        item.children.forEach(child => {
          dynamicPanels.push(child)
        })
      }
    })

    const nav = (
      <nav>
        {dynamicPanels.map((item, i) => {
          const isActive = item.props.name === this.activeName
          return (
            <a
              key={i}
              onClick={() => this.tabClick(item.props.name, i)}
              class={{ active: isActive }}
              href="javascript:void(0)"
            >
              {item.props.label}
            </a>
          )
        })}
      </nav>
    )

    return <div class="xtx-tabs">{[nav, dynamicPanels]}</div>
  }
}
</script>
<style scoped lang="less">
.xtx-tabs {
  background: #fff;
  > nav {
    height: 60px;
    line-height: 60px;
    display: flex;
    border-bottom: 1px solid #f5f5f5;
    > a {
      width: 110px;
      border-right: 1px solid #f5f5f5;
      text-align: center;
      font-size: 16px;
      &.active {
        border-top: 2px solid @xtxColor;
        height: 60px;
        background: #fff;
        line-height: 56px;
      }
    }
  }
}
</style>
