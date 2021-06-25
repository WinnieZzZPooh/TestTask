<template>
  <transition name="scale-card">
    <card
      :class="b()"
      @click="$emit('expand', task.id)"
    >
      <card-content :class="b('content')">
        <div class="pa">
          <task-name :class="b('title')">{{ task.nameOfTask }}</task-name>
          <text-block>{{ task.cost }}</text-block>
          <div :class="b('company')">
            <div>{{ task.nameOfCompany }}</div>
            <text-block small>{{ task.inn }}</text-block>
          </div>
        </div>
        <transition name="expanding">
          <expanded-block
            v-if="expanded.includes(task.id)"
            :class="b('additionally')"
          >
            <chips-container :class="b('chips')">
              <chip
                v-for="(tag, i) in task.tags"
                :key="i"
                :label="tag.label"
                :color="tag.color"
              />
            </chips-container>
            <client-name :class="b('client')">{{ task.nameOfClient }}</client-name>
            <chips-container :class="b('chips')">
              <chip
                v-for="(tag, i) in task.specialTags"
                :key="i"
                :label="tag"
              />
            </chips-container>
          </expanded-block>
        </transition>
        <div class="pa">
          <info :class="b('info')">
            <text-block small>{{ task.id }}</text-block>
            <text-block small>{{ task.dateOfCreating }}</text-block>
          </info>
        </div>
      </card-content>
      <div
        v-if="expanded.includes(task.id)"
        style="width: 100%; padding: 20px 0"
      >
        <checkbox
          :checked="selected.includes(task.id)"
          @check="$emit('select', task.id)"
        />
      </div>
    </card>
  </transition>
</template>

<script>
  /**
   * @displayName ExpandedCard
   *
   * Компонент карточки, работает со структурой типа Task
   */
  import {
    Card, CardContent, TaskName, Info, TextBlock, ExpandedBlock, ChipsContainer, ClientName
  } from './styled-components'
  import Chip from '@/components/Chip'
  import Checkbox from '@/components/Checkbox'

  export default {
    name: 'expanded-card',

    components: {
      Card,
      CardContent,
      TaskName,
      Info,
      TextBlock,
      ExpandedBlock,
      ChipsContainer,
      Chip,
      ClientName,
      Checkbox
    },

    props: {
      task: {
        type: Object,
        required: true
      },
      selected: {
        type: Array,
        default: () => []
      },
      expanded: {
        type: Array,
        default: () => []
      }
    }
  }
</script>

<style>
  .scale-card-enter-active,
  .scale-card-leave-active {
    transition: all .2s
  }

  .scale-card-enter, .scale-card-leave-to {
    transform: scale(0);
    opacity: 0;
  }
</style>
