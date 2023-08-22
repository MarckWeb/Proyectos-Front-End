import React from 'react'
import './Inputs.scss'

import InputBox from './InputBox/InputBox'


const Inputs = () => {
    return (
        <section className='inputs'>
            <h2 className='inputs__title'>Inputs</h2>

            <article className='inputs__container'>
                <InputBox
                    title='<Input />' />

                <InputBox
                    title='&:hover' />

                <InputBox
                    title='&:focus' />

                <InputBox
                    title='<Input error />' />

                <InputBox
                    title='&:hover' />

                <InputBox
                    title='&:focus' />

                <InputBox
                    title='<Input disabled />' />

                <InputBox
                    title='<Input helperText=”Some interesting text” />'
                    info='Some interesting text' />

                <InputBox
                    title='<Input helperText=”Some interesting text” error />'
                    info='Some interesting text' />

                <InputBox
                    title='<Input startIcon />'
                    icons={true} />

                <InputBox
                    title='<Input endIcon />'
                    icons2={true} />

                <InputBox
                    title='<Input value=”text” />'
                    text='Text'
                />

                <InputBox
                    title='<Input size=”sm” />'
                />

                <InputBox
                    title='<Input size=”md” />'
                />

                <InputBox
                    title='<Input fullWidth />'
                />

                <InputBox
                    title='<Input multiline row=”4” />'
                />
            </article>




            <p className='inputs__paragraph'>created by <b>MarckWeb</b> - devChallenges.io</p>

        </section>
    )
}

export default Inputs