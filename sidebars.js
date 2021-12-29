/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */

// @ts-check
/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
module.exports = {
    main: [
        'overview',
        {
            type: 'category',
            label: 'Getting Started',
            items: [
                'getting-started/the-first-mile',
            ],
        },
        {
            type: 'category',
            label: 'Collaboration',
            items: [
                'collaboration/git-gud',
                'collaboration/development-etiquette',
                'collaboration/crafting-a-good-pull-request',
                'collaboration/reviewing-a-pull-request',
                'collaboration/common-pull-request-issues',
                'collaboration/pair-programming',
            ],
        },
        {
            type: 'category',
            label: 'Style Guides',
            items: [
//              'manual-installation',
//              'manual-installation/android',
//              'manual-installation/ios',
//              'manual-installation/macos',
                {
                    type: 'link',
                    label: 'Technical Writing Guide',
                    href: 'https://developers.google.com/tech-writing',
                },
            ],
        },
        'further-reading',
    ],
};
