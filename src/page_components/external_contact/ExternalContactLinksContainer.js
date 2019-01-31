/*
    Corey Emery (cemery@andrew.cmu.edu)
    WickEditor Website
    ExternalContactLinksContainer.js

    Container for Wick Links to Email and Forum (External Contacts)
*/

import React, {Component} from 'react';

import ExternalContactLinks from './ExternalContactLinks.js';

import email from '../../Images/Misc/email.svg';
import messages from '../../Images/Misc/messages.svg';

class ExternalContactLinksContainer extends Component {
    constructor(props) {
        super(props);

        this.state = {
            forum: {
                image: messages,
                title: "Community Forum",
                text: "Insert useful suggestion description right in here",
                link: "https://forum.wickeditor.com/"
            },
            email: {
                image: email,
                title: "Contact Us",
                text: "Insert useful suggestion description right in here",
                link: "mailto:contact@wickeditor.com"
            }
        };
    }

    render() {
        return (
            <ExternalContactLinks {...this.state} />
        );
    }
}

export default ExternalContactLinksContainer;