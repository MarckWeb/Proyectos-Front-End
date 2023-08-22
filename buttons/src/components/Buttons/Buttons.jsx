import React from 'react'
import './Buttons.scss'
import ButtonsBox from './ButtonsBox/ButtonsBox'
import { MdShoppingCartCheckout } from 'react-icons/md';
import ButtonsDefault from './ButtonsDefault/ButtonsDefault';
import ButtonMix from './ButtonMix/ButtonMix';


const Buttons = () => {
    return (
        <section className='buttons'>
            <h2 className='buttons__title'>Buttons</h2>

            <article className='buttons__container'>
                <ButtonsBox
                    title='<Button />'
                />

                <ButtonsBox
                    title='&:hover, &:focus'
                    border={'border:1px solid red;'} />

                <ButtonsBox
                    title='<Button variant=”outline” />' />


                <ButtonsBox
                    title='&:hover, &:focus' />


                <ButtonsBox
                    title='<Button variant=”text” />' />

                <ButtonsBox
                    title='&:hover, &:focus' />

                <ButtonsBox
                    title='<Button disableShadow />' />

                <ButtonsBox
                    title='<Button disabled />'
                    nameBtn='Disabled' />

                <ButtonsBox
                    title='<Button variant=”text” disabled />'
                    nameBtn='Disabled' />


            </article>

            <section className='buttons__default'>
                <ButtonsDefault
                    title='<Button startIcon=”local_grocery_store” />' />

                <ButtonsDefault
                    title='<Button endIcon=”local_grocery_store” />' />
            </section>

            <section className='buttons__mix'>
                <ButtonMix
                    title='<Button size=”sm” />' />

                <ButtonMix
                    title='<Button size=”md” />' />

                <ButtonMix
                    title='<Button size=”lg” />' />

                <ButtonMix
                    title='<Button color=”default” />' />

                <ButtonMix
                    title='<Button color=”primary” />' />

                <ButtonMix
                    title='<Button color=”secondary” />'
                    nameBtn='Secondary' />

                <ButtonMix
                    title='<Button color=”danger” />'
                    nameBtn='Danger' />

                <ButtonMix
                    title='&:hover, &:focus'
                />

                <ButtonMix
                />

                <ButtonMix

                    nameBtn='Secondary' />

                <ButtonMix
                    nameBtn='Danger'
                />
            </section>

            <p className='buttons__paragraph'>Icons: https://material.io/resources/icons/?style=round</p>
            <p className='buttons__paragraph'>created by MarckWeb - devChallenges.io</p>

        </section>
    )
}

export default Buttons