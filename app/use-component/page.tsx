import Button from '@/components/Button'
import React from 'react'

export default function UseComponent() {
  return (
    <div className='flex gap-2'>
        <Button label='Save' icon='save'/>
        <Button label='Load Data' icon='refresh'/>
        <Button label='Information' icon='info-circle'/>
    </div>
  )
}
