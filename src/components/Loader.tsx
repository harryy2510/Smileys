import { SvgIcon, SvgIconProps } from '@material-ui/core'
import React from 'react'

export interface LoaderProps extends SvgIconProps {
    size?: number
}

const Loader: React.FC<LoaderProps> = ({ size, ...props }) => {
    return (
        <SvgIcon
            viewBox="0 0 64 64"
            {...props}
            style={{ width: size, height: size, ...props.style }}
        >
            <g>
                <circle cx="16" cy="32" strokeWidth={0} r="3.67909">
                    <animate
                        attributeName="fill-opacity"
                        dur="750ms"
                        values=".5;.6;.8;1;.8;.6;.5;.5"
                        repeatCount="indefinite"
                    />
                    <animate
                        attributeName="r"
                        dur="750ms"
                        values="3;3;4;5;6;5;4;3"
                        repeatCount="indefinite"
                    />
                </circle>
                <circle cx="32" cy="32" strokeWidth={0} r="3">
                    <animate
                        attributeName="fill-opacity"
                        dur="750ms"
                        values=".5;.5;.6;.8;1;.8;.6;.5"
                        repeatCount="indefinite"
                    />
                    <animate
                        attributeName="r"
                        dur="750ms"
                        values="4;3;3;4;5;6;5;4"
                        repeatCount="indefinite"
                    />
                </circle>
                <circle cx="48" cy="32" strokeWidth={0} r="3.32091">
                    <animate
                        attributeName="fill-opacity"
                        dur="750ms"
                        values=".6;.5;.5;.6;.8;1;.8;.6"
                        repeatCount="indefinite"
                    />
                    <animate
                        attributeName="r"
                        dur="750ms"
                        values="5;4;3;3;4;5;6;5"
                        repeatCount="indefinite"
                    />
                </circle>
            </g>
        </SvgIcon>
    )
}

export default Loader
