import { registerBlockType } from '@wordpress/blocks';
import { __ } from '@wordpress/i18n';
import Edit from './edit';
import Save from './save';

registerBlockType( 'block-context/team-member', {
	title: __( 'Team Member', 'team-members' ),
	description: __( 'A team member item', 'team-members' ),
	icon: 'admin-users',
	parent: [ 'block-context/team-members' ],
	supports: {
		reusable: false,
		html: false,
	},
	usesContext: [ 'block-context/team-members-namecolor', 'block-context/team-members-biocolor' ],
	attributes: {
		name: {
			type: 'string',
			source: 'html',
			selector: 'h4',
		},
		bio: {
			type: 'string',
			source: 'html',
			selector: 'p',
		},
		id: {
			type: 'number',
		},
		alt: {
			type: 'string',
			source: 'attribute',
			selector: 'img',
			attribute: 'alt',
			default: '',
		},
		nameColor: {
			type: 'string',
		},
		bioColor: {
			type: 'string',
		},
		url: {
			type: 'string',
			source: 'attribute',
			selector: 'img',
			attribute: 'src',
		},
		socialLinks: {
			type: 'array',
			default: [],
			source: 'query',
			selector: '.wp-block-block-context-team-member-social-links ul li',
			query: {
				icon: {
					source: 'attribute',
					attribute: 'data-icon',
				},
				link: {
					source: 'attribute',
					selector: 'a',
					attribute: 'href',
				},
			},
		},
	},
	edit: Edit,
	save: Save,
} );
