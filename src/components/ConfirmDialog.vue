<template>
  <Teleport to="body">
    <div v-if="modelValue" class="confirm-dialog-overlay" @click="handleOverlayClick">
      <div class="confirm-dialog" @click.stop>
        <div class="confirm-dialog-header">
          <h3 class="confirm-dialog-title mf">{{ title }}</h3>
        </div>
        <div class="confirm-dialog-content">
          <slot style="color: aliceblue"></slot>
        </div>
        <div class="confirm-dialog-footer">
          <button class="confirm-dialog-btn cancel" @click="handleCancel">{{ $t('common.cancel') }}</button>
          <button class="confirm-dialog-btn confirm" @click="handleConfirm">{{ $t('common.confirm') }}</button>
        </div>
      </div>
    </div>
  </Teleport>
</template>

<script setup>
import { defineProps, defineEmits } from 'vue'
import i18n from '../common/i18n'

const props = defineProps({
  modelValue: {
    type: Boolean,
    required: true
  },
  title: {
    type: String,
    default: () => i18n.global.t('common.confirm')
  }
})

const emit = defineEmits(['update:modelValue', 'confirm', 'cancel'])

const handleConfirm = () => {
  emit('confirm')
  emit('update:modelValue', false)
}

const handleCancel = () => {
  emit('cancel')
  emit('update:modelValue', false)
}

const handleOverlayClick = () => {
  handleCancel()
}
</script>

<style scoped>
.confirm-dialog-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
}

.confirm-dialog {
  width: 300px;
  background-color: #292e33;
  border-radius: 8px;
  box-shadow: 0 2px 12px rgba(0, 0, 0, 0.15);
  display: flex;
  flex-direction: column;
}

.confirm-dialog-header {
  padding: 16px 20px;
  border-bottom: 1px solid #e16221;
}

.confirm-dialog-title {
  margin: 0;
  font-size: 18px;
  font-weight: 500;
  color: aliceblue;
}

.confirm-dialog-content {
  padding: 20px;
  min-height: 100px;
}

.confirm-dialog-footer {
  padding: 16px 20px;
  border-top: 1px solid #e16221;
  display: flex;
  justify-content: flex-end;
  gap: 12px;
}

.confirm-dialog-btn {
  padding: 8px 20px;
  border-radius: 4px;
  border: none;
  cursor: pointer;
  font-size: 14px;
  transition: all 0.3s;
}

.confirm-dialog-btn.cancel {
  background-color: aliceblue;
  color: #666;
}

.confirm-dialog-btn.cancel:hover {
  background-color: aliceblue;
}

.confirm-dialog-btn.confirm {
  background-color: #e16221;
  color: aliceblue;
}

.confirm-dialog-btn.confirm:hover {
  background-color: #e69066;
}
</style> 