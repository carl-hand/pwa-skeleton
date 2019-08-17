import React from 'react'
import { css } from 'emotion'

const toolbarHeaderCss = css`
    width: 100%;
    position: fixed;
    background-color: #521751;
`

const toolbarNavigationCss = css``

const toolbarLogoCss = css``

const toolbarNavItemsCss = css``

export const Toolbar = props => (
    <header className={toolbarHeaderCss}>
        <nav className={toolbarNavigationCss}>
            <div />
            <div className={toolbarLogoCss}>
                <a href="/">The Logo</a>
            </div>
            <div className={toolbarNavItemsCss}>
                <ul>
                    <li>
                        <a href="/">Products</a>
                    </li>
                    <li>
                        <a href="/">Users</a>
                    </li>
                </ul>
            </div>
        </nav>
    </header>
)
