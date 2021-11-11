import React from 'react'

import ContainerRow from './ContainerRow'
import CardBtn from './CardBtn'
import Button from './Button'

import './MainContent.scss'

const MainContent = () => {
  return (
    <main className='main-content'>
      <h2 className='main-content-title'>Buttons</h2>
      <section className='buttons-container'>
        <ContainerRow>
          <CardBtn textInfo='<Button />'>
            <Button />
          </CardBtn>
          <CardBtn textInfo='&:hover, &:focus' infoClasses='text-muted'>
            <Button />
          </CardBtn>
        </ContainerRow>
        <ContainerRow>
          <CardBtn textInfo='<Button variant="outline"/>'>
            <Button variant='outline' />
          </CardBtn>
          <CardBtn textInfo='&:hover, &:focus' infoClasses='text-muted'>
            <Button variant='outline' />
          </CardBtn>
        </ContainerRow>
        <ContainerRow>
          <CardBtn textInfo='<Button variant="text" />'>
            <Button variant='text' />
          </CardBtn>
          <CardBtn textInfo='&:hover, &:focus' infoClasses='text-muted'>
            <Button variant='text' />
          </CardBtn>
        </ContainerRow>
        <ContainerRow>
          <CardBtn textInfo='<Button disableShadow />'>
            <Button disableShadow color='primary' />
          </CardBtn>
        </ContainerRow>
        <ContainerRow>
          <CardBtn textInfo='<Button disabled />'>
            <Button disabled />
          </CardBtn>
          <CardBtn textInfo='<Button variant="text" disabled />'>
            <Button variant='text' disabled />
          </CardBtn>
        </ContainerRow>
        <ContainerRow>
          <CardBtn textInfo='<Button startIcon="local_grocery_store" />'>
            <Button startIcon='local_grocery_store' color='primary' />
          </CardBtn>
          <CardBtn textInfo='<Button endIcon="local_grocery_store" />'>
            <Button endIcon='local_grocery_store' color='primary' />
          </CardBtn>
        </ContainerRow>
        <ContainerRow>
          <CardBtn textInfo='<Button size="sm" />'>
            <Button size='sm' color='primary' />
          </CardBtn>
          <CardBtn textInfo='<Button size="md" />'>
            <Button size='md' color='primary' />
          </CardBtn>
          <CardBtn textInfo='<Button size="lg" />'>
            <Button size='lg' color='primary' />
          </CardBtn>
        </ContainerRow>
        <ContainerRow>
          <CardBtn textInfo='<Button color="default" />'>
            <Button color='default' />
          </CardBtn>
          <CardBtn textInfo='<Button color="primary" />'>
            <Button color='primary' />
          </CardBtn>
          <CardBtn textInfo='<Button color="secondary" />'>
            <Button color='secondary' />
          </CardBtn>
          <CardBtn textInfo='<Button color="danger" />'>
            <Button color='danger' />
          </CardBtn>
        </ContainerRow>
        <ContainerRow>
          <CardBtn textInfo='&:hover, &:focus' infoClasses='text-muted'>
            <Button color='default' />
          </CardBtn>
          <CardBtn>
            <Button color='primary' />
          </CardBtn>
          <CardBtn textInfo=' '>
            <Button color='secondary' />
          </CardBtn>
          <CardBtn textInfo=' '>
            <Button color='danger' />
          </CardBtn>
        </ContainerRow>
      </section>
    </main>
  )
}

export default MainContent
