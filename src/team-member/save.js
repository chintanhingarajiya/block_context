/* eslint-disable no-unused-expressions */
import { useBlockProps, RichText } from '@wordpress/block-editor';
import { Icon } from '@wordpress/components';

export default function Save( { attributes } ) {
	const { name, bio, url, alt, id, socialLinks, nameColor, bioColor } = attributes;

	const nameStyle = {};
	nameColor && ( nameStyle.color = nameColor );

	const bioStyle = {};
	bioColor && ( bioStyle.color = bioColor );
	
	return (
		<div { ...useBlockProps.save() }>
			{ url && (
				<img
					src={ url }
					alt={ alt }
					className={ id ? `wp-image-${ id }` : null }
				/>
			) }
			{ name && <RichText.Content tagName="h4" value={ name } style={ nameStyle } /> }
			{ bio && <RichText.Content tagName="p" value={ bio } style={ bioStyle } /> }
			{ socialLinks.length > 0 && (
				<div className="wp-block-block-context-team-member-social-links">
					<ul>
						{ socialLinks.map( ( item, index ) => {
							return (
								<li key={ index } data-icon={ item.icon }>
									<a href={ item.link }>
										<Icon icon={ item.icon } />
									</a>
								</li>
							);
						} ) }
					</ul>
				</div>
			) }
		</div>
	);
}
