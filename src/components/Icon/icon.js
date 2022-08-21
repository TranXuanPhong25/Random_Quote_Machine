import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { faTwitter, faFontAwesome } from '@fortawesome/free-brands-svg-icons'
import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faFacebookF } from "@fortawesome/free-brands-svg-icons"
import styles from "./icon.module.scss"
import clsx from 'clsx'
library.add(fas, faTwitter, faFontAwesome)

function Icon({ color }) {
    return (
        <div className="Icon">
            <div style={{ background: color }} className={clsx("hoverEffect", styles.subIcon)}>
                <FontAwesomeIcon icon="fa-brands fa-twitter" />
            </div>
            <div style={{ background: color }} className={clsx("hoverEffect", styles.subIcon)}>

                <FontAwesomeIcon icon={faFacebookF} />
            </div>
        </div>
    )
}
export default Icon