import React from 'react'
import { StyleSheet, css } from 'aphrodite'
import cn from 'classnames'

export default function Loader({ large, center, className, inline = false, padded = false, show = true }) {
    const classes = cn(className, 'loader', {
        'is-size-1': large,
        [css(styles.inline)]: inline,
        [css(styles.center)]: center,
        [css(styles.padded)]: padded,
    })
    return show ? <i className={classes} /> : null
}

const styles = StyleSheet.create({
    center: { margin: '0 auto' },
    padded: { marginTop: '2rem', marginBottom: '2rem' },
    inline: { display: 'inline-flex' },
})
